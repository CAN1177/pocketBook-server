"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var moment = require("moment");

var Controller = require("egg").Controller;

var BillController =
/*#__PURE__*/
function (_Controller) {
  _inherits(BillController, _Controller);

  function BillController() {
    _classCallCheck(this, BillController);

    return _possibleConstructorReturn(this, _getPrototypeOf(BillController).apply(this, arguments));
  }

  _createClass(BillController, [{
    key: "add",
    value: function add() {
      var ctx, app, _ctx$request$body, amount, type_id, type_name, date, pay_type, _ctx$request$body$rem, remark, user_id, token, decode, result;

      return regeneratorRuntime.async(function add$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ctx = this.ctx, app = this.app; // 获取请求中携带的参数

              _ctx$request$body = ctx.request.body, amount = _ctx$request$body.amount, type_id = _ctx$request$body.type_id, type_name = _ctx$request$body.type_name, date = _ctx$request$body.date, pay_type = _ctx$request$body.pay_type, _ctx$request$body$rem = _ctx$request$body.remark, remark = _ctx$request$body$rem === void 0 ? "" : _ctx$request$body$rem; // 判空处理，这里前端也可以做，但是后端也需要做一层判断。

              if (!(!amount || !type_id || !type_name || !date || !pay_type)) {
                _context.next = 5;
                break;
              }

              ctx.body = {
                code: 400,
                msg: "参数错误",
                data: null
              };
              return _context.abrupt("return");

            case 5:
              _context.prev = 5;
              token = ctx.request.header.authorization; // 拿到 token 获取用户信息

              _context.next = 9;
              return regeneratorRuntime.awrap(app.jwt.verify(token, app.config.jwt.secret));

            case 9:
              decode = _context.sent;

              if (decode) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return");

            case 12:
              user_id = decode.id; // user_id 默认添加到每个账单项，作为后续获取指定用户账单的标示。
              // 可以理解为，我登录 A 账户，那么所做的操作都得加上 A 账户的 id，后续获取的时候，就过滤出 A 账户 id 的账单信息。

              _context.next = 15;
              return regeneratorRuntime.awrap(ctx.service.bill.add({
                amount: amount,
                type_id: type_id,
                type_name: type_name,
                date: date,
                pay_type: pay_type,
                remark: remark,
                user_id: user_id
              }));

            case 15:
              result = _context.sent;
              ctx.body = {
                code: 200,
                msg: "请求成功",
                data: null
              };
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](5);
              ctx.body = {
                code: 500,
                msg: "系统错误",
                data: null
              };

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[5, 19]]);
    }
  }, {
    key: "list",
    value: function list() {
      var ctx, app, _ctx$query, date, _ctx$query$page, page, _ctx$query$page_size, page_size, _ctx$query$type_id, type_id, user_id, token, decode, list, _list, listMap, filterListMap, __list, totalExpense, totalIncome;

      return regeneratorRuntime.async(function list$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ctx = this.ctx, app = this.app; // 获取，日期 date，分页数据，类型 type_id，这些都是我们在前端传给后端的数据

              _ctx$query = ctx.query, date = _ctx$query.date, _ctx$query$page = _ctx$query.page, page = _ctx$query$page === void 0 ? 1 : _ctx$query$page, _ctx$query$page_size = _ctx$query.page_size, page_size = _ctx$query$page_size === void 0 ? 5 : _ctx$query$page_size, _ctx$query$type_id = _ctx$query.type_id, type_id = _ctx$query$type_id === void 0 ? "all" : _ctx$query$type_id;
              _context2.prev = 2;
              // 通过 token 解析，拿到 user_id
              token = ctx.request.header.authorization;
              _context2.next = 6;
              return regeneratorRuntime.awrap(app.jwt.verify(token, app.config.jwt.secret));

            case 6:
              decode = _context2.sent;

              if (decode) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return");

            case 9:
              user_id = decode.id; // 拿到当前用户的账单列表

              _context2.next = 12;
              return regeneratorRuntime.awrap(ctx.service.bill.list(user_id));

            case 12:
              list = _context2.sent;
              // 过滤出月份和类型所对应的账单列表
              _list = list.filter(function (item) {
                if (type_id != "all") {
                  return moment(Number(item.date)).format("YYYY-MM") == date && type_id == item.type_id;
                }

                return moment(Number(item.date)).format("YYYY-MM") == date;
              }); // 格式化数据，将其变成我们之前设置好的对象格式

              listMap = _list.reduce(function (curr, item) {
                // curr 默认初始值是一个空数组 []
                // 把第一个账单项的时间格式化为 YYYY-MM-DD
                var date = moment(Number(item.date)).format("YYYY-MM-DD"); // 如果能在累加的数组中找到当前项日期 date，那么在数组中的加入当前项到 bills 数组。

                if (curr && curr.length && curr.findIndex(function (item) {
                  return item.date == date;
                }) > -1) {
                  var index = curr.findIndex(function (item) {
                    return item.date == date;
                  });
                  curr[index].bills.push(item);
                } // 如果在累加的数组中找不到当前项日期的，那么再新建一项。


                if (curr && curr.length && curr.findIndex(function (item) {
                  return item.date == date;
                }) == -1) {
                  curr.push({
                    date: date,
                    bills: [item]
                  });
                } // 如果 curr 为空数组，则默认添加第一个账单项 item ，格式化为下列模式


                if (!curr.length) {
                  curr.push({
                    date: date,
                    bills: [item]
                  });
                }

                return curr;
              }, []).sort(function (a, b) {
                return moment(b.date) - moment(a.date);
              }); // 时间顺序为倒叙，时间约新的，在越上面
              // 分页处理，listMap 为我们格式化后的全部数据，还未分页。

              filterListMap = listMap.slice((page - 1) * page_size, page * page_size); // 计算当月总收入和支出
              // 首先获取当月所有账单列表

              __list = list.filter(function (item) {
                return moment(Number(item.date)).format("YYYY-MM") == date;
              }); // 累加计算支出

              totalExpense = __list.reduce(function (curr, item) {
                if (item.pay_type == 1) {
                  curr += Number(item.amount);
                  return curr;
                }

                return curr;
              }, 0); // 累加计算收入

              totalIncome = __list.reduce(function (curr, item) {
                if (item.pay_type == 2) {
                  curr += Number(item.amount);
                  return curr;
                }

                return curr;
              }, 0); // 返回数据

              ctx.body = {
                code: 200,
                msg: "请求成功",
                data: {
                  totalExpense: totalExpense,
                  // 当月支出
                  totalIncome: totalIncome,
                  // 当月收入
                  totalPage: Math.ceil(listMap.length / page_size),
                  // 总分页
                  list: filterListMap || [] // 格式化后，并且经过分页处理的数据

                }
              };
              _context2.next = 25;
              break;

            case 22:
              _context2.prev = 22;
              _context2.t0 = _context2["catch"](2);
              ctx.body = {
                code: 500,
                msg: "系统错误",
                data: null
              };

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[2, 22]]);
    } // 获取账单详情

  }, {
    key: "detail",
    value: function detail() {
      var ctx, app, _ctx$query$id, id, user_id, token, decode, detail;

      return regeneratorRuntime.async(function detail$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              ctx = this.ctx, app = this.app; // 获取账单 id 参数

              _ctx$query$id = ctx.query.id, id = _ctx$query$id === void 0 ? "" : _ctx$query$id; // 获取用户 user_id

              token = ctx.request.header.authorization; // 获取当前用户信息

              _context3.next = 5;
              return regeneratorRuntime.awrap(app.jwt.verify(token, app.config.jwt.secret));

            case 5:
              decode = _context3.sent;

              if (decode) {
                _context3.next = 8;
                break;
              }

              return _context3.abrupt("return");

            case 8:
              user_id = decode.id; // 判断是否传入账单 id

              if (id) {
                _context3.next = 12;
                break;
              }

              ctx.body = {
                code: 500,
                msg: "订单id不能为空",
                data: null
              };
              return _context3.abrupt("return");

            case 12:
              _context3.prev = 12;
              _context3.next = 15;
              return regeneratorRuntime.awrap(ctx.service.bill.detail(id, user_id));

            case 15:
              detail = _context3.sent;
              ctx.body = {
                code: 200,
                msg: "请求成功",
                data: detail
              };
              _context3.next = 22;
              break;

            case 19:
              _context3.prev = 19;
              _context3.t0 = _context3["catch"](12);
              ctx.body = {
                code: 500,
                msg: "系统错误",
                data: null
              };

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[12, 19]]);
    } // 编辑账单

  }, {
    key: "update",
    value: function update() {
      var ctx, app, _ctx$request$body2, id, amount, type_id, type_name, date, pay_type, _ctx$request$body2$re, remark, user_id, token, decode, result;

      return regeneratorRuntime.async(function update$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              ctx = this.ctx, app = this.app; // 账单的相关参数，这里注意要把账单的 id 也传进来

              _ctx$request$body2 = ctx.request.body, id = _ctx$request$body2.id, amount = _ctx$request$body2.amount, type_id = _ctx$request$body2.type_id, type_name = _ctx$request$body2.type_name, date = _ctx$request$body2.date, pay_type = _ctx$request$body2.pay_type, _ctx$request$body2$re = _ctx$request$body2.remark, remark = _ctx$request$body2$re === void 0 ? "" : _ctx$request$body2$re; // 判空处理

              if (!amount || !type_id || !type_name || !date || !pay_type) {
                ctx.body = {
                  code: 400,
                  msg: "参数错误",
                  data: null
                };
              }

              _context4.prev = 3;
              token = ctx.request.header.authorization;
              _context4.next = 7;
              return regeneratorRuntime.awrap(app.jwt.verify(token, app.config.jwt.secret));

            case 7:
              decode = _context4.sent;

              if (decode) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt("return");

            case 10:
              user_id = decode.id; // 根据账单 id 和 user_id，修改账单数据

              _context4.next = 13;
              return regeneratorRuntime.awrap(ctx.service.bill.update({
                id: id,
                // 账单 id
                amount: amount,
                // 金额
                type_id: type_id,
                // 消费类型 id
                type_name: type_name,
                // 消费类型名称
                date: date,
                // 日期
                pay_type: pay_type,
                // 消费类型
                remark: remark,
                // 备注
                user_id: user_id // 用户 id

              }));

            case 13:
              result = _context4.sent;
              ctx.body = {
                code: 200,
                msg: "请求成功",
                data: null
              };
              _context4.next = 20;
              break;

            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4["catch"](3);
              ctx.body = {
                code: 500,
                msg: "系统错误",
                data: null
              };

            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, [[3, 17]]);
    }
  }, {
    key: "data",
    value: function data() {
      var ctx, app, _ctx$query$date, date, user_id, token, decode, result, start, end, _data, total_expense, total_income, total_data;

      return regeneratorRuntime.async(function data$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              ctx = this.ctx, app = this.app;
              _ctx$query$date = ctx.query.date, date = _ctx$query$date === void 0 ? "" : _ctx$query$date; // 获取用户 user_id

              token = ctx.request.header.authorization;
              _context5.next = 5;
              return regeneratorRuntime.awrap(app.jwt.verify(token, app.config.jwt.secret));

            case 5:
              decode = _context5.sent;

              if (decode) {
                _context5.next = 8;
                break;
              }

              return _context5.abrupt("return");

            case 8:
              user_id = decode.id;

              if (date) {
                _context5.next = 12;
                break;
              }

              ctx.body = {
                code: 400,
                msg: "参数错误",
                data: null
              };
              return _context5.abrupt("return");

            case 12:
              _context5.prev = 12;
              _context5.next = 15;
              return regeneratorRuntime.awrap(ctx.service.bill.list(user_id));

            case 15:
              result = _context5.sent;
              start = moment(date).startOf("month").unix() * 1000; // 选择月份，月初时间

              end = moment(date).endOf("month").unix() * 1000; // 选择月份，月末时间

              _data = result.filter(function (item) {
                if (Number(item.date) > start && Number(item.date) < end) {
                  return item;
                }
              }); // 总支出

              total_expense = _data.reduce(function (arr, cur) {
                if (cur.pay_type == 1) {
                  arr += Number(cur.amount);
                }

                return arr;
              }, 0); // 总收入

              total_income = _data.reduce(function (arr, cur) {
                if (cur.pay_type == 2) {
                  arr += Number(cur.amount);
                }

                return arr;
              }, 0); // 获取收支构成

              total_data = _data.reduce(function (arr, cur) {
                var index = arr.findIndex(function (item) {
                  return item.type_id == cur.type_id;
                });

                if (index == -1) {
                  arr.push({
                    type_id: cur.type_id,
                    type_name: cur.type_name,
                    pay_type: cur.pay_type,
                    number: Number(cur.amount)
                  });
                }

                if (index > -1) {
                  arr[index].number += Number(cur.amount);
                }

                return arr;
              }, []);
              total_data = total_data.map(function (item) {
                item.number = Number(Number(item.number).toFixed(2));
                return item;
              });
              ctx.body = {
                code: 200,
                msg: "请求成功",
                data: {
                  total_expense: Number(total_expense).toFixed(2),
                  total_income: Number(total_income).toFixed(2),
                  total_data: total_data || []
                }
              };
              _context5.next = 29;
              break;

            case 26:
              _context5.prev = 26;
              _context5.t0 = _context5["catch"](12);
              ctx.body = {
                code: 500,
                msg: "系统错误",
                data: null
              };

            case 29:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this, [[12, 26]]);
    }
  }]);

  return BillController;
}(Controller);

module.exports = BillController;