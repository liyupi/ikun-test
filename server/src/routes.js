/**
 * 接口路由
 * @author yupi
 */
const routes = [
  {
    path: "/question/list",
    handler: require("./controller/questionController").listQuestionsApi,
  },
  {
    path: "/user_score/add",
    handler: require("./controller/userScoreController").addUserScoreApi,
  },
  {
    path: "/user_score/get",
    handler: require("./controller/userScoreController").getUserScoreApi,
  },
  {
    path: "/user_score/list/rank",
    handler: require("./controller/userScoreController").listUserScoreRankApi,
  },
];

module.exports = routes;
