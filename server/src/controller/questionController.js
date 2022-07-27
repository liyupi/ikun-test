const { questions } = require("../data/questions");
const _ = require("lodash");

/**
 * 随机获取题目
 * @param event
 * @param req
 * @param res
 */
async function listQuestionsApi(event, req, res) {
  const { size = 10 } = event;
  // fixme 注意，如果是正式上线的答题程序，这里要把答案和各选项的分数信息抹掉
  return _.sampleSize(questions, size);
}

module.exports = {
  listQuestionsApi,
};
