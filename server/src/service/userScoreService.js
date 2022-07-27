const _ = require("lodash");
const { questionMap } = require("../data/questions");
const UserScoreModel = require("../model/userScore");
const { NOT_FOUND_ERROR_CODE } = require("../exception/errorCode");
const MyError = require("../exception");
const { Op } = require("sequelize");
const { results } = require("../data/results");

/**
 * 添加用户得分记录
 * @param questionIds
 * @param answers
 * @param username
 * @return {Promise<void>}
 */
async function addUserScore(questionIds, answers, username) {
  const questionsData = questionIds.map((questionId) => {
    return questionMap[questionId];
  });
  let score = getScore(questionsData, answers);
  // 特殊分数加成
  const jiWords = ["🐔", "鸡", "坤", "kun", "下蛋", "篮球", "🏀"];
  for (let i = 0; i < jiWords.length; i++) {
    const word = jiWords[i];
    // 只能加 1 次
    if (username.includes(word)) {
      score += 5;
      break;
    }
  }
  return await UserScoreModel.create({
    username,
    score,
    answers: JSON.stringify(answers),
    questions: JSON.stringify(questionIds),
  });
}

/**
 * 获取用户得分记录
 * @param id
 * @return {Promise<void>}
 */
async function getUserScore(id) {
  let userScore = await UserScoreModel.findByPk(id);
  if (!userScore) {
    throw new MyError(NOT_FOUND_ERROR_CODE);
  }
  userScore = userScore.dataValues;
  // 排名 = 大于自己得分的人数 + 1
  userScore.rank =
    (await UserScoreModel.count({
      where: {
        score: {
          [Op.gt]: userScore.score,
        },
      },
    })) + 1;
  const totalScoreNum = await UserScoreModel.count();
  userScore.surpass = (
    ((totalScoreNum - userScore.rank) * 100) /
    (totalScoreNum - 1)
  ).toFixed(2);
  userScore.result = getResult(userScore.score);
  return userScore;
}

/**
 * 获取用户分数排行
 * @param size
 * @return {Promise<Model[]>}
 */
async function listUserScoreRank(size = 20) {
  return await UserScoreModel.findAll({
    limit: size,
    order: [["score", "desc"]],
  });
}

/**
 * 获取分数
 * @param questions
 * @param answers
 * @return {number}
 */
function getScore(questions, answers) {
  let score = 0;
  questions.forEach((question, index) => {
    const userAnswer = answers[index];
    // 设置了标准答案，答对才得分
    if (question.answer && question.answer.length > 0) {
      if (
        userAnswer.length === question.answer.length &&
        userAnswer.length === _.union(userAnswer, question.answer).length
      ) {
        score += question.score ?? 0;
      }
    } else {
      // 无标准答案，根据选项给分
      question.options.forEach((option) => {
        // 选中了改答案
        if (userAnswer.includes(option.key)) {
          score += option.score ?? 0;
        }
      });
    }
  });
  return score;
}

/**
 * 获取结果
 * @param score
 * @return result
 */
function getResult(score) {
  let result;
  for (const r of results) {
    if (score >= r.score) {
      result = r;
    } else {
      break;
    }
  }
  return result;
}

module.exports = {
  addUserScore,
  getUserScore,
  listUserScoreRank,
};
