'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _WebsocketView = require('./Components/WebsocketView');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_WebsocketView.WebsocketView, {
    server: "wss://wot.city/object/testman/viewer" }, _react2.default.createElement("p", { onMessage: function onMessage(data) {
        console.log(data);
    } })), document.getElementById('content'));
//# sourceMappingURL=demo.js.map
