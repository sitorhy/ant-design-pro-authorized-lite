"use strict";

exports.__esModule = true;
exports.checkPermissions = void 0;

var _react = _interopRequireDefault(require("react"));

var _PromiseRender = _interopRequireDefault(require("./PromiseRender"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPromise(obj) {
  return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
}
/**
 * Common check permissions method
 * @param { 权限判定 Permission judgment type string |array | Promise | Function } authority
 * @param { 你的权限 Your permission description  type:string} currentAuthority
 * @param { 通过的组件 Passing components } target
 * @param { 未通过的组件 no pass components } Exception
 * @param { 异步加载填充控件 } spinner
 */


var checkPermissions = (authority, currentAuthority, target, Exception, spinner) => {
  // 没有判定权限.默认查看所有
  // Retirement authority, return target;
  if (!authority) {
    return target;
  } // 数组处理


  if (Array.isArray(authority)) {
    if (authority.indexOf(currentAuthority) >= 0) {
      return target;
    }

    if (Array.isArray(currentAuthority)) {
      for (var i = 0; i < currentAuthority.length; i += 1) {
        var element = currentAuthority[i];

        if (authority.indexOf(element) >= 0) {
          return target;
        }
      }
    }

    return Exception;
  } // string 处理


  if (typeof authority === "string") {
    if (authority === currentAuthority) {
      return target;
    }

    if (Array.isArray(currentAuthority)) {
      for (var _i = 0; _i < currentAuthority.length; _i += 1) {
        var _element = currentAuthority[_i];

        if (authority.indexOf(_element) >= 0) {
          return target;
        }
      }
    }

    return Exception;
  } // Promise 处理


  if (isPromise(authority)) {
    return /*#__PURE__*/_react.default.createElement(_PromiseRender.default, {
      ok: target,
      error: Exception,
      promise: authority,
      spinner: spinner
    });
  } // Function 处理


  if (typeof authority === "function") {
    try {
      var bool = authority(currentAuthority); // 函数执行后返回值是 Promise

      if (isPromise(bool)) {
        return /*#__PURE__*/_react.default.createElement(_PromiseRender.default, {
          ok: target,
          error: Exception,
          promise: bool,
          spinner: spinner
        });
      }

      if (bool) {
        return target;
      }

      return Exception;
    } catch (error) {
      throw error;
    }
  }

  throw new Error("unsupported parameters");
};

exports.checkPermissions = checkPermissions;