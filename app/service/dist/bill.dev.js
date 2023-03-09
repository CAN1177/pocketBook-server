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

var Service = require("egg").Service;

var BillService =
/*#__PURE__*/
function (_Service) {
  _inherits(BillService, _Service);

  function BillService() {
    _classCallCheck(this, BillService);

    return _possibleConstructorReturn(this, _getPrototypeOf(BillService).apply(this, arguments));
  }

  _createClass(BillService, [{
    key: "add",
    value: function add(params) {
      var ctx, app, result;
      return regeneratorRuntime.async(function add$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ctx = this.ctx, app = this.app;
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(app.mysql.insert("bill", params));

            case 4:
              result = _context.sent;
              return _context.abrupt("return", result);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              return _context.abrupt("return", null);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[1, 8]]);
    } // 获取账单列表

  }, {
    key: "list",
    value: function list(id) {
      var ctx, app, QUERY_STR, sql, result;
      return regeneratorRuntime.async(function list$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ctx = this.ctx, app = this.app;
              QUERY_STR = "id, pay_type, amount, date, type_id, type_name, remark";
              sql = "select ".concat(QUERY_STR, " from bill where user_id = ").concat(id);
              _context2.prev = 3;
              _context2.next = 6;
              return regeneratorRuntime.awrap(app.mysql.query(sql));

            case 6:
              result = _context2.sent;
              return _context2.abrupt("return", result);

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](3);
              console.log(_context2.t0);
              return _context2.abrupt("return", null);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[3, 10]]);
    }
  }, {
    key: "detail",
    value: function detail(id, user_id) {
      var ctx, app, result;
      return regeneratorRuntime.async(function detail$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              ctx = this.ctx, app = this.app;
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(app.mysql.get("bill", {
                id: id,
                user_id: user_id
              }));

            case 4:
              result = _context3.sent;
              return _context3.abrupt("return", result);

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              console.log(_context3.t0);
              return _context3.abrupt("return", null);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[1, 8]]);
    }
  }]);

  return BillService;
}(Service);

module.exports = BillService;