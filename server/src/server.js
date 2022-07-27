const express = require("express");
const bodyParser = require("body-parser");
const MyError = require("./exception");
const http = require("http");
const { FORBIDDEN_ERROR_CODE } = require("./exception/errorCode");
const session = require("express-session");

// 请求大小限制
const requestLimit = "5120kb";

class ExpressServer {
  constructor() {
    this.app = express();
    // 上下文请求路径
    this.contextPath = "/api";
    this.app.use(
      bodyParser.urlencoded({ extended: false, limit: requestLimit })
    );
    this.app.use(bodyParser.json({ limit: requestLimit }));
    this.app.set("x-powered-by", false);
    this.app.use(
      session({
        name: "ikun", // 设置 session 对应 cookie 的名称
        secret: "ikun", // 服务器生成 session 的签名
        cookie: {
          // cookie 配置与cookie-parser的配置一致
          maxAge: 1000 * 60 * 60,
          secure: false,
        },
      })
    );
    this.app.all("*", (req, res, next) => {
      // 开启跨域
      res.setHeader("Access-Control-Allow-Credentials", "true");
      const origin = req.get("Origin");
      // 允许的地址 http://127.0.0.1:9000 这样的格式
      if (origin) {
        res.setHeader("Access-Control-Allow-Origin", origin);
      }
      // 允许跨域请求的方法
      res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, OPTIONS, DELETE, PUT"
      );
      // 允许跨域请求 header 携带哪些东西
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since"
      );
      next();
    });
    this.server = http.createServer(this.app);
  }

  setRoute(path, handlerFunction) {
    const handler = async (req, res) => {
      // IP 过滤
      const requestClientIp = getClientIp(req);
      if (!requestClientIp) {
        return FORBIDDEN_ERROR_CODE;
      }
      const event = req.body;
      let result;
      try {
        const startTime = new Date().getTime();
        let params;
        if (event.file) {
          let eventCopy = { ...event };
          eventCopy.file = undefined;
          params = JSON.stringify(eventCopy);
        } else {
          params = JSON.stringify(event);
        }
        console.log(
          `req start path = ${req.path}, clientIp = ${requestClientIp}, params = ${params}`
        );
        result = await handlerFunction(event, req, res);
        // 封装响应
        result = {
          code: 0,
          data: result,
        };
        console.log(
          `req end path = ${
            req.path
          }, clientIp = ${requestClientIp}, params = ${params}, costTime = ${
            new Date().getTime() - startTime
          }`
        );
      } catch (e) {
        // 全局异常处理
        if (e instanceof MyError) {
          result = {
            code: e.code,
            message: e.message,
            data: null,
          };
        } else {
          result = {
            code: 500,
            data: null,
            message: "server error",
          };
        }
        console.error(
          `req error path = ${
            req.path
          }, clientIp = ${requestClientIp}, params = ${JSON.stringify(event)}`,
          e
        );
      }
      res.send(result);
    };
    this.app.post(this.contextPath + path, handler);
  }

  listen(port) {
    this.server.listen(port);
    let url = `http://localhost:${port}`;
    if (this.contextPath) {
      url += this.contextPath;
    }
    console.log(`server start at ${url}, env = ${process.env.NODE_ENV}`);
  }
}

/**
 * 获取真实客户端 ip
 * @param req
 * @returns {*|string}
 */
function getClientIp(req) {
  if (!req) {
    return "";
  }
  return (
    req.headers["x-forwarded-for"] ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    req.connection?.socket?.remoteAddress ||
    req.ip
  );
}

module.exports.ExpressServer = ExpressServer;
