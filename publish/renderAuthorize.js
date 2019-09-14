"use strict";

exports.__esModule = true;
exports.default = void 0;

var _Authorized = _interopRequireDefault(require("./Authorized"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * @param {string|()=>String} currentAuthority
 */
var _default = function _default(currentAuthority, authority) {
  if (authority === void 0) {
    authority = [];
  }

  return (_ref) => {
    var rest = _extends({}, _ref);

    var CURRENT = "NULL";

    if (currentAuthority) {
      if (currentAuthority.constructor.name === "Function") {
        CURRENT = currentAuthority();
      }

      if (currentAuthority.constructor.name === "String" || currentAuthority.constructor.name === "Array") {
        CURRENT = currentAuthority;
      }
    } else {
      CURRENT = "NULL";
    }

    return (0, _Authorized.default)(_extends({
      currentAuthority: CURRENT,
      authority
    }, rest));
  };
};

exports.default = _default;