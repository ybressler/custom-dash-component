webpackHotUpdatevote_card("main",{

/***/ "./src/lib/components/VoteCard.react.js":
/*!**********************************************!*\
  !*** ./src/lib/components/VoteCard.react.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/lib/components/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // CONTINUE FROM HERE TOMORROW:
// https://dash.plot.ly/react-for-python-developers
// =========================================================

var VoteCard =
/*#__PURE__*/
function (_Component) {
  _inherits(VoteCard, _Component);

  // When we initialize, we build logic into the like and dislike classes
  function VoteCard(props) {
    var _this;

    _classCallCheck(this, VoteCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VoteCard).call(this, props));
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
    };
    _this.updateValue = _this.updateValue.bind(_assertThisInitialized(_this));
    _this.handleVote = _this.handleVote.bind(_assertThisInitialized(_this));
    _this.updateVote = _this.updateVote.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VoteCard, [{
    key: "updateValue",
    value: function updateValue(e) {
      e.preventDefault();
      this.props.setProps({
        value: e.target.value
      }); // The shorter way to do it...
      // e => this.props.setProps({value: e.target.value}
    }
  }, {
    key: "updateVote",
    value: function updateVote(currVoteHist, voteName) {
      // Previous vote
      var allVotes = currVoteHist.trackVotes;
      var actVote = this.props.activeVote; // instantiate the item

      if (allVotes.length < 2) {
        // If first vote, vote is curr
        actVote = voteName;
      } else {
        var prevVote = allVotes[allVotes.length - 2];

        if (voteName === prevVote) {
          /*
          If vote (click) is same as previous (click):
            – if vote is the same as activeVote we set vote to null
            – if vote is diff from activeVote we set vote to curr
          */
          if (actVote === voteName) {
            actVote = null;
          } else {
            actVote = voteName;
          }
        } else {
          // If vote is diff from previous, vote is curr
          actVote = voteName;
        }
      } // Set the values


      this.props.setProps({
        activeVote: actVote
      });
    } // Next handler

  }, {
    key: "handleVote",
    value: function handleVote(e) {
      e.preventDefault(); // Update the state with proper values

      var voteName = e.target.name;
      var currVoteHist = this.state.voteHistory;
      currVoteHist[voteName] += 1;
      currVoteHist.trackVotes.push(voteName); // Update props

      this.props.setProps({
        voteHistory: currVoteHist
      }); // Call the next function

      this.updateVote(currVoteHist, voteName);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          setProps = _this$props.setProps,
          voteHistory = _this$props.voteHistory,
          activeVote = _this$props.activeVote,
          value = _this$props.value; // Set the values of each button

      var classNameChoices = {
        "superlike": false,
        "like": false,
        "dislike": false
      };
      classNameChoices[activeVote] = true;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id,
        className: "vote-card",
        activevote: "".concat(activeVote)
      }, "ExampleComponent: ", label, "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: value,
        onChange: this.updateValue
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "This is your value \"", value, "\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        name: "superlike",
        type: "button",
        className: "vote-superlike",
        isactive: "".concat(classNameChoices.superlike),
        onClick: this.handleVote
      }, "\"SUPERLIKE\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        name: "like",
        type: "button",
        className: "vote-like",
        isactive: "".concat(classNameChoices.like),
        onClick: this.handleVote
      }, "\"LIKE\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        name: "dislike",
        type: "button",
        className: "vote-dislike",
        isactive: "".concat(classNameChoices.dislike),
        onClick: this.handleVote
      }, "\"DISLIKE\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Current state: ", JSON.stringify(this.props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Current vote: ", activeVote));
    }
  }]);

  return VoteCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

VoteCard.defaultProps = {
  value: "",
  label: "default-label",
  activeVote: null,
  voteHistory: {
    superlike: 0,
    // counts as positive vote but is a seperate entity
    like: 0,
    dislike: 0,
    trackVotes: []
  }
};
VoteCard.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * The value displayed in the input.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The current vote of the object
   */
  activeVote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([null, 'superlike', 'like', 'dislike']),

  /**
   * The history of the object
   */
  voteHistory: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}; // Export the item

/* harmony default export */ __webpack_exports__["default"] = (VoteCard);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3RlX2NhcmQvLi9zcmMvbGliL2NvbXBvbmVudHMvVm90ZUNhcmQucmVhY3QuanMiXSwibmFtZXMiOlsiVm90ZUNhcmQiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJhY3RpdmVWb3RlIiwidm90ZUhpc3RvcnkiLCJzdXBlcmxpa2UiLCJsaWtlIiwiZGlzbGlrZSIsInRyYWNrVm90ZXMiLCJ1cGRhdGVWYWx1ZSIsImJpbmQiLCJoYW5kbGVWb3RlIiwidXBkYXRlVm90ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFByb3BzIiwidGFyZ2V0IiwiY3VyclZvdGVIaXN0Iiwidm90ZU5hbWUiLCJhbGxWb3RlcyIsImFjdFZvdGUiLCJsZW5ndGgiLCJwcmV2Vm90ZSIsIm5hbWUiLCJwdXNoIiwiaWQiLCJsYWJlbCIsImNsYXNzTmFtZUNob2ljZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBSUE7QUFDQTtBQUlBOztJQUVNQSxROzs7OztBQUVKO0FBQ0Esb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsa0ZBQU1BLEtBQU47QUFDRSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSyxFQUFDLEVBREs7QUFFWEMsZ0JBQVUsRUFBQyxJQUZBO0FBR1hDLGlCQUFXLEVBQUM7QUFDVkMsaUJBQVMsRUFBQyxDQURBO0FBQ0c7QUFDYkMsWUFBSSxFQUFDLENBRks7QUFHVkMsZUFBTyxFQUFDLENBSEU7QUFJVkMsa0JBQVUsRUFBQztBQUpEO0FBSEQsS0FBYjtBQVVBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsK0JBQW5CO0FBQ0Es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QUFrQixNQUFsQixFQUEwQixTQUExQixDQUFoQixDQW5CTzs7QUFvQm5COzs7QUFHQWhDLGFBQVcsRUFBRTZCLGlEQUFTLENBQUNJLE1BdkJKOztBQXlCbkI7Ozs7QUFJQXRCLFVBQVEsRUFBRWtCLGlEQUFTLENBQUNLO0FBN0JELENBQXJCLEMsQ0FrQ0E7O0FBQ2V2Qyx1RUFBZixFIiwiZmlsZSI6ImQzYzBhODQtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cblxuLy8gQ09OVElOVUUgRlJPTSBIRVJFIFRPTU9SUk9XOlxuLy8gaHR0cHM6Ly9kYXNoLnBsb3QubHkvcmVhY3QtZm9yLXB5dGhvbi1kZXZlbG9wZXJzXG5cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY2xhc3MgVm90ZUNhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIC8vIFdoZW4gd2UgaW5pdGlhbGl6ZSwgd2UgYnVpbGQgbG9naWMgaW50byB0aGUgbGlrZSBhbmQgZGlzbGlrZSBjbGFzc2VzXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6XCJcIixcbiAgICAgICAgYWN0aXZlVm90ZTpudWxsLFxuICAgICAgICB2b3RlSGlzdG9yeTp7XG4gICAgICAgICAgc3VwZXJsaWtlOjAsIC8vIGNvdW50cyBhcyBwb3NpdGl2ZSB2b3RlIGJ1dCBpcyBhIHNlcGVyYXRlIGVudGl0eVxuICAgICAgICAgIGxpa2U6MCxcbiAgICAgICAgICBkaXNsaWtlOjAsXG4gICAgICAgICAgdHJhY2tWb3RlczpbXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlID0gdGhpcy51cGRhdGVWYWx1ZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVWb3RlID0gdGhpcy5oYW5kbGVWb3RlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnVwZGF0ZVZvdGUgPSB0aGlzLnVwZGF0ZVZvdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe3ZhbHVlOmUudGFyZ2V0LnZhbHVlfSlcbiAgICAvLyBUaGUgc2hvcnRlciB3YXkgdG8gZG8gaXQuLi5cbiAgICAvLyBlID0+IHRoaXMucHJvcHMuc2V0UHJvcHMoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZX1cbiAgfVxuXG4gIHVwZGF0ZVZvdGUoY3VyclZvdGVIaXN0LCB2b3RlTmFtZSkge1xuICAgIC8vIFByZXZpb3VzIHZvdGVcbiAgICBjb25zdCBhbGxWb3RlcyA9IGN1cnJWb3RlSGlzdC50cmFja1ZvdGVzXG4gICAgdmFyIGFjdFZvdGUgPSB0aGlzLnByb3BzLmFjdGl2ZVZvdGU7IC8vIGluc3RhbnRpYXRlIHRoZSBpdGVtXG5cbiAgICBpZiAoYWxsVm90ZXMubGVuZ3RoPDIpIHtcbiAgICAgIC8vIElmIGZpcnN0IHZvdGUsIHZvdGUgaXMgY3VyclxuICAgICAgYWN0Vm90ZSA9IHZvdGVOYW1lXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zdCBwcmV2Vm90ZSA9IGFsbFZvdGVzW2FsbFZvdGVzLmxlbmd0aC0yXVxuXG4gICAgICBpZih2b3RlTmFtZT09PXByZXZWb3RlKXtcbiAgICAgICAgLypcbiAgICAgICAgSWYgdm90ZSAoY2xpY2spIGlzIHNhbWUgYXMgcHJldmlvdXMgKGNsaWNrKTpcbiAgICAgICAgICDigJMgaWYgdm90ZSBpcyB0aGUgc2FtZSBhcyBhY3RpdmVWb3RlIHdlIHNldCB2b3RlIHRvIG51bGxcbiAgICAgICAgICDigJMgaWYgdm90ZSBpcyBkaWZmIGZyb20gYWN0aXZlVm90ZSB3ZSBzZXQgdm90ZSB0byBjdXJyXG4gICAgICAgICovXG4gICAgICAgIGlmKGFjdFZvdGU9PT12b3RlTmFtZSl7XG4gICAgICAgICAgYWN0Vm90ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBhY3RWb3RlID0gdm90ZU5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgLy8gSWYgdm90ZSBpcyBkaWZmIGZyb20gcHJldmlvdXMsIHZvdGUgaXMgY3VyclxuICAgICAgICBhY3RWb3RlID0gdm90ZU5hbWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIHZhbHVlc1xuICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe2FjdGl2ZVZvdGU6YWN0Vm90ZX0pXG4gIH1cblxuXG4gIC8vIE5leHQgaGFuZGxlclxuICBoYW5kbGVWb3RlKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgd2l0aCBwcm9wZXIgdmFsdWVzXG4gICAgY29uc3Qgdm90ZU5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIGNvbnN0IGN1cnJWb3RlSGlzdCA9IHRoaXMuc3RhdGUudm90ZUhpc3Rvcnk7XG4gICAgY3VyclZvdGVIaXN0W3ZvdGVOYW1lXSs9MVxuICAgIGN1cnJWb3RlSGlzdC50cmFja1ZvdGVzLnB1c2godm90ZU5hbWUpXG5cbiAgICAvLyBVcGRhdGUgcHJvcHNcbiAgICB0aGlzLnByb3BzLnNldFByb3BzKHt2b3RlSGlzdG9yeTpjdXJyVm90ZUhpc3R9KVxuXG4gICAgLy8gQ2FsbCB0aGUgbmV4dCBmdW5jdGlvblxuICAgIHRoaXMudXBkYXRlVm90ZShjdXJyVm90ZUhpc3Qsdm90ZU5hbWUpXG4gIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aWQsIGxhYmVsLCBzZXRQcm9wcyx2b3RlSGlzdG9yeSwgYWN0aXZlVm90ZSwgdmFsdWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBTZXQgdGhlIHZhbHVlcyBvZiBlYWNoIGJ1dHRvblxuICAgICAgICBjb25zdCBjbGFzc05hbWVDaG9pY2VzID0ge1xuICAgICAgICAgIFwic3VwZXJsaWtlXCI6ZmFsc2UsXG4gICAgICAgICAgXCJsaWtlXCI6ZmFsc2UsXG4gICAgICAgICAgXCJkaXNsaWtlXCI6ZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIGNsYXNzTmFtZUNob2ljZXNbYWN0aXZlVm90ZV0gPXRydWU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9e2lkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdm90ZS1jYXJkYH1cbiAgICAgICAgICAgIGFjdGl2ZXZvdGU9e2Ake2FjdGl2ZVZvdGV9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFeGFtcGxlQ29tcG9uZW50OiB7bGFiZWx9Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlVmFsdWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aDI+VGhpcyBpcyB5b3VyIHZhbHVlIFwie3ZhbHVlfVwiPC9oMj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdXBlcmxpa2VcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9IHtgdm90ZS1zdXBlcmxpa2VgfVxuICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5zdXBlcmxpa2V9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBcIlNVUEVSTElLRVwiXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibGlrZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ge2B2b3RlLWxpa2VgfVxuICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5saWtlfWB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVZvdGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgXCJMSUtFXCJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzbGlrZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ge2B2b3RlLWRpc2xpa2VgfVxuICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5kaXNsaWtlfWB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVZvdGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgXCJESVNMSUtFXCJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgQ3VycmVudCBzdGF0ZToge0pTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aDI+Q3VycmVudCB2b3RlOiB7YWN0aXZlVm90ZX08L2gyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5Wb3RlQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6XCJcIixcbiAgICBsYWJlbDpcImRlZmF1bHQtbGFiZWxcIixcbiAgICBhY3RpdmVWb3RlOm51bGwsXG4gICAgdm90ZUhpc3Rvcnk6e1xuICAgICAgc3VwZXJsaWtlOjAsIC8vIGNvdW50cyBhcyBwb3NpdGl2ZSB2b3RlIGJ1dCBpcyBhIHNlcGVyYXRlIGVudGl0eVxuICAgICAgbGlrZTowLFxuICAgICAgZGlzbGlrZTowLFxuICAgICAgdHJhY2tWb3RlczpbXVxuICAgIH0sXG5cbn1cblxuXG5Wb3RlQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2b3RlIG9mIHRoZSBvYmplY3RcbiAgICovXG4gIGFjdGl2ZVZvdGU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwnc3VwZXJsaWtlJywnbGlrZScsICdkaXNsaWtlJ10pLFxuICAvKipcbiAgICogVGhlIGhpc3Rvcnkgb2YgdGhlIG9iamVjdFxuICAgKi9cbiAgdm90ZUhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICovXG4gIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxufTtcblxuXG4vLyBFeHBvcnQgdGhlIGl0ZW1cbmV4cG9ydCBkZWZhdWx0IFZvdGVDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==