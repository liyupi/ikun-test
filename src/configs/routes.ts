import IndexPage from "../pages/IndexPage.vue";
import ResultPage from "../pages/ResultPage.vue";
import RankPage from "../pages/RankPage.vue";

/**
 * 定义页面路由
 */
const routes = [
  { path: "/", component: IndexPage },
  {
    path: "/result/:id",
    component: ResultPage,
    props: true,
  },
  {
    path: "/rank",
    component: RankPage,
  },
];

export default routes;
