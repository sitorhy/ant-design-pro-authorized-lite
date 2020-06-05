"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _CheckPermissions = require("./CheckPermissions");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = (_ref) => {
  var {
    children,
    authority,
    currentAuthority,
    forceUpdate,
    noMatch = null,
    spinner = null
  } = _ref;
  return (0, _CheckPermissions.checkPermissions)(authority, currentAuthority, typeof children === "undefined" ? null : forceUpdate ? /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    key: Date.now().toString()
  }, children) : children, noMatch, spinner);
};

exports.default = _default;