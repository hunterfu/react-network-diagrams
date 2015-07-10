"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _mapEdgeLinear = require("./map-edge-linear");

var _mapEdgeLinear2 = _interopRequireDefault(_mapEdgeLinear);

var _mapEdgeArc = require("./map-edge-arc");

var _mapEdgeArc2 = _interopRequireDefault(_mapEdgeArc);

exports["default"] = _react2["default"].createClass({
    displayName: "map-edge-bidirectional",

    getDefaultProps: function getDefaultProps() {
        return {
            width: 1,
            spacing: 3.5,
            offset: 18,
            sourceTargetColor: "#C9CACC",
            targetSourceColor: "#C9CACC",
            selected: false,
            muted: false
        };
    },

    render: function render() {
        var paths = [];

        var sourceToTargetName = "" + this.props.source + "--" + this.props.target;
        var targetToSourceName = "" + this.props.target + "--" + this.props.source;

        // Position of the bidirectional lines relative to the center line
        var position = this.props.width * 0.75;

        if (this.props.shape === "curved") {
            return _react2["default"].createElement(
                "g",
                null,
                _react2["default"].createElement(_mapEdgeArc2["default"], { name: this.props.name,
                    x1: this.props.x1,
                    y1: this.props.y1,
                    x2: this.props.x2,
                    y2: this.props.y2,
                    arrow: true,
                    position: position,
                    color: this.props.sourceTargetColor,
                    width: this.props.width,
                    classed: this.props.classed,
                    key: sourceToTargetName,
                    curveDirection: this.props.curveDirection,
                    offset: this.props.offset,
                    selected: this.props.selected,
                    onSelectionChange: this.props.onSelectionChange,
                    muted: this.props.muted }),
                _react2["default"].createElement(_mapEdgeArc2["default"], { name: this.props.name,
                    x1: this.props.x2,
                    y1: this.props.y2,
                    x2: this.props.x1,
                    y2: this.props.y1,
                    arrow: true,
                    position: position,
                    color: this.props.targetSourceColor,
                    width: this.props.width,
                    classed: this.props.classed,
                    key: targetToSourceName,
                    curveDirection: this.props.curveDirection,
                    offset: this.props.offset,
                    selected: this.props.selected,
                    onSelectionChange: this.props.onSelectionChange,
                    muted: this.props.muted }),
                _react2["default"].createElement(_mapEdgeArc2["default"], { name: this.props.name,
                    x1: this.props.x2,
                    y1: this.props.y2,
                    x2: this.props.x1,
                    y2: this.props.y1,
                    position: 0,
                    width: 5,
                    classed: this.props.classed,
                    key: "" + sourceToTargetName + "-event-region",
                    onSelectionChange: this.props.onSelectionChange,
                    curveDirection: this.props.curveDirection,
                    offset: this.props.offset,
                    invisible: true })
            );
        } else {
            return _react2["default"].createElement(
                "g",
                null,
                _react2["default"].createElement(_mapEdgeLinear2["default"], { name: this.props.name,
                    x1: this.props.x1,
                    y1: this.props.y1,
                    x2: this.props.x2,
                    y2: this.props.y2,
                    arrow: true,
                    color: this.props.sourceTargetColor,
                    width: this.props.width,
                    position: position,
                    className: this.props.classed,
                    key: sourceToTargetName,
                    selected: this.props.selected,
                    muted: this.props.muted,
                    onSelectionChange: this.props.onSelectionChange }),
                _react2["default"].createElement(_mapEdgeLinear2["default"], { name: this.props.name,
                    x1: this.props.x2,
                    y1: this.props.y2,
                    x2: this.props.x1,
                    y2: this.props.y1,
                    arrow: true,
                    color: this.props.targetSourceColor,
                    width: this.props.width,
                    position: position,
                    className: this.props.classed,
                    key: targetToSourceName,
                    selected: this.props.selected,
                    muted: this.props.muted,
                    onSelectionChange: this.props.onSelectionChange }),
                _react2["default"].createElement(_mapEdgeLinear2["default"], { name: this.props.name,
                    x1: this.props.x2,
                    y1: this.props.y2,
                    x2: this.props.x1,
                    y2: this.props.y1,
                    width: 5,
                    position: 0,
                    className: this.props.classed,
                    key: "" + targetToSourceName + "-event-region",
                    onSelectionChange: this.props.onSelectionChange,
                    invisible: true })
            );
        }

        return _react2["default"].createElement(
            "g",
            null,
            paths
        );
    }
});
module.exports = exports["default"];