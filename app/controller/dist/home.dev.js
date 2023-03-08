'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Controller = require('egg').Controller;

var HomeController =
/*#__PURE__*/
function (_Controller) {
  _inherits(HomeController, _Controller);

  function HomeController() {
    _classCallCheck(this, HomeController);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomeController).apply(this, arguments));
  }

  _createClass(HomeController, [{
    key: "index",
    value: function index() {
      var ctx;
      return regeneratorRuntime.async(function index$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ctx = this.ctx;
              _context.next = 3;
              return regeneratorRuntime.awrap(ctx.render('index.html', {
                title: 'CAN1177' // 将 title 传入 index.html

              }));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    } // 获取用户信息

  }, {
    key: "user",
    value: function user() {
      var ctx, result;
      return regeneratorRuntime.async(function user$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ctx = this.ctx;
              _context2.next = 3;
              return regeneratorRuntime.awrap(ctx.service.home.user());

            case 3:
              result = _context2.sent;
              ctx.body = result;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    } // post 请求方法

  }, {
    key: "add",
    value: function add() {
      var ctx, title;
      return regeneratorRuntime.async(function add$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              ctx = this.ctx;
              title = ctx.request.body.title; // Egg 框架内置了 bodyParser 中间件来对 POST 请求 body 解析成 object 挂载到 ctx.request.body 上

              ctx.body = {
                title: title
              };

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    } // 新增用户方法

  }, {
    key: "addUser",
    value: function addUser() {
      var ctx;
      return regeneratorRuntime.async(function addUser$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              ctx = this.ctx; // const { name } = ctx.request.body;

              try {
                // const result = await ctx.service.home.addUser(name)
                ctx.body = {
                  code: 200,
                  msg: '添加成功',
                  data: null
                };
              } catch (e) {
                ctx.body = {
                  code: 500,
                  msg: '添加失败',
                  data: null
                };
              }

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    } // 删除 

  }, {
    key: "delUser",
    value: function delUser() {
      var ctx, id, result;
      return regeneratorRuntime.async(function delUser$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              ctx = this.ctx;
              id = ctx.request.body.id;
              _context5.prev = 2;
              _context5.next = 5;
              return regeneratorRuntime.awrap(ctx.service.home.delUser(id));

            case 5:
              result = _context5.sent;
              ctx.body = {
                code: 200,
                msg: "删除成功",
                data: null
              };
              _context5.next = 12;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](2);
              ctx.body = {
                code: 500,
                msg: '删除失败',
                data: null
              };

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this, [[2, 9]]);
    }
  }]);

  return HomeController;
}(Controller);

module.exports = HomeController;