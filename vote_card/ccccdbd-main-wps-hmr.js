webpackHotUpdatevote_card("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint no-magic-numbers: 0 */



var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  // Allow the component to update its props
  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this)); // Set the initial state

    _this.state = {
      value: "",
      activeVote: null,
      voteHistory: {
        superlike: 0,
        // counts as positive vote but is a seperate entity
        like: 0,
        dislike: 0,
        trackVotes: []
      }
    }; // If you want to set the state, do it here

    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "VoteCard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Do anything you want here. It's not part of the core component but is probably loaded from the .py file"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["VoteCard"], _extends({
        setProps: this.setProps
      }, this.state)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3RlX2NhcmQvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJ2YWx1ZSIsImFjdGl2ZVZvdGUiLCJ2b3RlSGlzdG9yeSIsInN1cGVybGlrZSIsImxpa2UiLCJkaXNsaWtlIiwidHJhY2tWb3RlcyIsInNldFByb3BzIiwiYmluZCIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0lBRU1BLEc7Ozs7O0FBRUY7QUFDQSxpQkFBYztBQUFBOztBQUFBOztBQUNWLDhFQURVLENBRVY7O0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBQyxFQURHO0FBRVRDLGdCQUFVLEVBQUMsSUFGRjtBQUdUQyxpQkFBVyxFQUFDO0FBQ1ZDLGlCQUFTLEVBQUMsQ0FEQTtBQUNHO0FBQ2JDLFlBQUksRUFBQyxDQUZLO0FBR1ZDLGVBQU8sRUFBQyxDQUhFO0FBSVZDLGtCQUFVLEVBQUM7QUFKRDtBQUhILEtBQWIsQ0FIVSxDQWFWOztBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQWRVO0FBZWI7Ozs7NkJBRVFDLFEsRUFBVTtBQUNmLFdBQUtDLFFBQUwsQ0FBY0QsUUFBZDtBQUNIOzs7NkJBRVE7QUFDTCxhQUNJLHdFQUNJLGtGQURKLEVBRUksZ0xBRkosRUFHSSxzRUFISixFQUlJLDJEQUFDLDZDQUFEO0FBQ0ksZ0JBQVEsRUFBRSxLQUFLRjtBQURuQixTQUVRLEtBQUtSLEtBRmIsRUFKSixDQURKO0FBV0g7Ozs7RUFwQ2FZLCtDOztBQXVDSGIsa0VBQWYsRSIsImZpbGUiOiJjY2NjZGJkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICB7Vm90ZUNhcmR9ICBmcm9tICcuLi9saWInO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgLy8gQWxsb3cgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIHByb3BzXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6XCJcIixcbiAgICAgICAgICAgIGFjdGl2ZVZvdGU6bnVsbCxcbiAgICAgICAgICAgIHZvdGVIaXN0b3J5OntcbiAgICAgICAgICAgICAgc3VwZXJsaWtlOjAsIC8vIGNvdW50cyBhcyBwb3NpdGl2ZSB2b3RlIGJ1dCBpcyBhIHNlcGVyYXRlIGVudGl0eVxuICAgICAgICAgICAgICBsaWtlOjAsXG4gICAgICAgICAgICAgIGRpc2xpa2U6MCxcbiAgICAgICAgICAgICAgdHJhY2tWb3RlczpbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHlvdSB3YW50IHRvIHNldCB0aGUgc3RhdGUsIGRvIGl0IGhlcmVcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5Wb3RlQ2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+RG8gYW55dGhpbmcgeW91IHdhbnQgaGVyZS4gSXQncyBub3QgcGFydCBvZiB0aGUgY29yZSBjb21wb25lbnQgYnV0IGlzIHByb2JhYmx5IGxvYWRlZCBmcm9tIHRoZSAucHkgZmlsZTwvcD5cbiAgICAgICAgICAgICAgICA8aHI+PC9ocj5cbiAgICAgICAgICAgICAgICA8Vm90ZUNhcmRcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==