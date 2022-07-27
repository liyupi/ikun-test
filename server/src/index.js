const { ExpressServer } = require("./server");
const routes = require("./routes");

// 创建 Server 实例
const server = new ExpressServer();

// 注册接口路由
for (const route of routes) {
  server.setRoute(route.path, route.handler);
}

// 监听端口
server.listen(7123);
