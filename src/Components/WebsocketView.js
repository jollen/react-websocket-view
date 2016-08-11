'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WebsocketView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppStore = require('../Stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _AppActions = require('../Actions/AppActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebsocketView = exports.WebsocketView = function (_Component) {
    _inherits(WebsocketView, _Component);

    function WebsocketView(props, context) {
        _classCallCheck(this, WebsocketView);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WebsocketView).call(this, props, context));

        _this.state = {
            data: {}
        };

        _this.onMessage = _this.onMessage.bind(_this);

        _AppActions.AppActions.connect(_this.props.server);
        return _this;
    }

    _createClass(WebsocketView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AppStore2.default.addMessageListener(this.onMessage);

            var children = [];

            // Has only one child
            if (typeof this.props.children.length === 'undefined') {
                children.push(this.props.children);
                // Has many children
            } else {
                children = this.props.children;
            }

            // Register child components to store
            for (var child in children) {
                if (children.hasOwnProperty(child)) {
                    if (typeof children[child].props.onMessage === 'function') {
                        _AppStore2.default.addMessageListener(children[child].props.onMessage);
                    }
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _AppStore2.default.removeMessageListener(this.onMessage);

            var children = [];

            // Has only one child
            if (typeof this.props.children.length === 'undefined') {
                children.push(this.props.children);
                // Has many children
            } else {
                children = this.props.children;
            }

            // Register child components to store
            for (var child in children) {
                if (children.hasOwnProperty(child)) {
                    if (typeof children[child].props.onMessage === 'function') {
                        _AppStore2.default.removeMessageListener(children[child].props.onMessage);
                    }
                }
            }
        }
    }, {
        key: 'onMessage',
        value: function onMessage(item) {
            this.setState({
                data: item
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement("div", { id: "websocketView" });
        }
    }]);

    return WebsocketView;
}(_react.Component);

WebsocketView.defaultProps = {};
//# sourceMappingURL=WebsocketView.js.map
