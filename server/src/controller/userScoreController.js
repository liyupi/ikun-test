const MyError = require("../exception");
const { REQUEST_PARAMS_ERROR_CODE } = require("../exception/errorCode");
const {
  addUserScore,
  getUserScore,
  listUserScoreRank,
} = require("../service/userScoreService");

/**
 * 添加用户得分
 * @param event
 * @param req
 * @param res
 */
async function addUserScoreApi(event, req, res) {
  const { questionIds, answers, username = "无名" } = event;
  if (
    !answers ||
    answers.length < 1 ||
    !questionIds ||
    questionIds.length < 1 ||
    answers.length !== questionIds.length ||
    questionIds.length !== 10 ||
    username.length > 32
  ) {
    throw new MyError(REQUEST_PARAMS_ERROR_CODE);
  }
  return await addUserScore(questionIds, answers, username);
}

/**
 * 获取用户得分及排名
 * @param event
 * @param req
 * @param res
 */
async function getUserScoreApi(event, req, res) {
  const { id } = event;
  if (!id) {
    throw new MyError(REQUEST_PARAMS_ERROR_CODE);
  }
  return await getUserScore(id);
}

/**
 * 获取用户得分排行
 * @param event
 * @param req
 * @param res
 */
async function listUserScoreRankApi(event, req, res) {
  const { size = 20 } = event;
  return await listUserScoreRank(size);
}

module.exports = {
  addUserScoreApi,
  getUserScoreApi,
  listUserScoreRankApi,
};
