/* eslint valid-jsdoc: "off" */
'use strict';
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function (appInfo) {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  var config = exports = {}; // use for cookie sign key, should change to your own and keep security

  config.keys = appInfo.name + '_1628326815850_4693'; // add your middleware config here

  config.middleware = [];
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 初始化密码，没设置的可以不写
      // 数据库名
      database: 'pocketBook' // 我们新建的数据库名称

    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  };
  config.jwt = {
    secret: 'CAN177'
  }; // 安全摸索

  config.security = {
    csrf: {
      enable: false
    }
  }; // 接收模式

  config.multipart = {
    mode: 'file'
  };
  config.cors = {
    origin: '*',
    // 允许所有跨域访问
    credentials: true,
    // 允许 Cookie 跨域跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  config.view = {
    mapping: {
      '.html': 'ejs'
    } // 左边写成.html后缀，会自动渲染.html文件

  }; // add your user config here

  var userConfig = {
    // myAppName: 'egg',
    uploadDir: 'app/public/upload'
  };
  return _objectSpread({}, config, {}, userConfig);
};