"use strict";

exports.__esModule = true;
exports.default = void 0;

var _CheckPermissions = require("./CheckPermissions");

var _default = (_ref) => {
  var {
    children,
    authority,
    currentAuthority,
    noMatch = null,
    spinner = null
  } = _ref;
  return (0, _CheckPermissions.checkPermissions)(authority, currentAuthority, typeof children === "undefined" ? null : children, noMatch, spinner);
};

exports.default = _default;