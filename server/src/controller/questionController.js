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
  return _.sampleSize(questions, size);
}

module.exports = {
  listQuestionsApi,
};
