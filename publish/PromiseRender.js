"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class _default extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      fetchSuccess: null
    });

    _defineProperty(this, "setFetchSuccess", fetchSuccess => {
      this.setState({
        fetchSuccess
      });
    });

    _defineProperty(this, "checkIsInstantiation", target => {
      if (!_react.default.isValidElement(target)) {
        return target;
      }

      return () => target;
    });

    _defineProperty(this, "setRenderComponent", props => {
      props.promise.then(() => {
        this.setFetchSuccess(true);
      }).catch(() => {
        this.setFetchSuccess(false);
      });
    });

    _defineProperty(this, "renderComponent", () => {
      var _this$props = this.props,
          {
        ok
      } = _this$props,
          rest = _objectWithoutPropertiesLoose(_this$props, ["ok"]);

      var Component = this.checkIsInstantiation(ok);
      return Component ? _react.default.createElement(Component, rest) : null;
    });

    _defineProperty(this, "renderException", () => {
      var _this$props2 = this.props,
          {
        error
      } = _this$props2,
          rest = _objectWithoutPropertiesLoose(_this$props2, ["error"]);

      var Component = this.checkIsInstantiation(error);
      return Component ? _react.default.createElement(Component, rest) : null;
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    var {
      promise
    } = nextProps;

    if (promise !== this.props.promise) {
      this.setRenderComponent(nextProps);
    }
  } // Determine whether the incoming component has been instantiated
  // AuthorizedRoute is already instantiated
  // Authorized  render is already instantiated, children is no instantiated
  // Secured is not instantiated


  componentDidMount() {
    this.setRenderComponent(this.props);
  }

  render() {
    var {
      fetchSuccess
    } = this.state;
    var {
      spinner: Spinner = null
    } = this.props;
    return fetchSuccess === null ? Spinner : fetchSuccess ? this.renderComponent() : this.renderException();
  }

}

exports.default = _default;