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
    _this.handleVote = _this.handleVote.bind(_assertThisInitialized(_this));
    _this.updateVote = _this.updateVote.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VoteCard, [{
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
        className: "vote-card active:".concat(activeVote)
      }, "ExampleComponent: ", label, "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: value,
        onChange: function onChange(e) {
          return setProps({
            value: e.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "This is your value \"", value, "\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button vote-superlike active:".concat(classNameChoices.superlike),
        name: "superlike",
        onClick: this.handleVote
      }, "\"SUPERLIKE ME\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button vote-like active:".concat(classNameChoices.like),
        name: "like",
        onClick: this.handleVote
      }, "\"LIKE ME\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button vote-dislike active:".concat(classNameChoices.dislike),
        name: "dislike",
        onClick: this.handleVote
      }, "\"DISLIKE ME\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Current state: ", JSON.stringify(this.props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Current vote: ", activeVote));
    }
  }]);

  return VoteCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

VoteCard.defaultProps = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3RlX2NhcmQvLi9zcmMvbGliL2NvbXBvbmVudHMvVm90ZUNhcmQucmVhY3QuanMiXSwibmFtZXMiOlsiVm90ZUNhcmQiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJhY3RpdmVWb3RlIiwidm90ZUhpc3RvcnkiLCJzdXBlcmxpa2UiLCJsaWtlIiwiZGlzbGlrZSIsInRyYWNrVm90ZXMiLCJoYW5kbGVWb3RlIiwiYmluZCIsInVwZGF0ZVZvdGUiLCJjdXJyVm90ZUhpc3QiLCJ2b3RlTmFtZSIsImFsbFZvdGVzIiwiYWN0Vm90ZSIsImxlbmd0aCIsInByZXZWb3RlIiwic2V0UHJvcHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJuYW1lIiwicHVzaCIsImlkIiwibGFiZWwiLCJjbGFzc05hbWVDaG9pY2VzIiwiSlNPTiIsInN0cmluZ2lmeSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUlBO0FBQ0E7QUFJQTs7SUFFTUEsUTs7Ozs7QUFFSjtBQUNBLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLGtGQUFNQSxLQUFOO0FBQ0UsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFdBQUssRUFBQyxFQURLO0FBRVhDLGdCQUFVLEVBQUMsSUFGQTtBQUdYQyxpQkFBVyxFQUFDO0FBQ1ZDLGlCQUFTLEVBQUMsQ0FEQTtBQUNHO0FBQ2JDLFlBQUksRUFBQyxDQUZLO0FBR1ZDLGVBQU8sRUFBQyxDQUhFO0FBSVZDLGtCQUFVLEVBQUM7QUFKRDtBQUhELEtBQWI7QUFVQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLCtCQUFsQjtBQUNBLFVBQUtDLFVBQUwsR0FB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Q2lCLGdCQUFnQixDQUFDbkIsT0FBbEQsQ0FEWDtBQUVFLFlBQUksRUFBQyxTQUZQO0FBR0UsZUFBTyxFQUFFLEtBQUtFO0FBSGhCLDBCQXRCSixFQThCSSx5RkFDa0JrQixJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLNUIsS0FBcEIsQ0FEbEIsQ0E5QkosRUFpQ0kseUZBQW1CRyxVQUFuQixDQWpDSixDQURKO0FBdUNIOzs7O0VBM0hrQjBCLCtDOztBQStIdkI5QixRQUFRLENBQUMrQixZQUFULEdBQXdCO0FBQ3BCTCxPQUFLLEVBQUMsZUFEYztBQUVwQnRCLFlBQVUsRUFBQyxJQUZTO0FBR3BCQyxhQUFXLEVBQUM7QUFDVkMsYUFBUyxFQUFDLENBREE7QUFDRztBQUNiQyxRQUFJLEVBQUMsQ0FGSztBQUdWQyxXQUFPLEVBQUMsQ0FIRTtBQUlWQyxjQUFVLEVBQUM7QUFKRDtBQUhRLENBQXhCO0FBYUFULFFBQVEsQ0FBQ2dDLFNBQVQsR0FBcUI7QUFDbkI7OztBQUdBUCxJQUFFLEVBQUVRLGlEQUFTLENBQUNDLE1BSks7O0FBTW5COzs7QUFHQVIsT0FBSyxFQUFFTyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQVRMOztBQVduQjs7O0FBR0FoQyxPQUFLLEVBQUU4QixpREFBUyxDQUFDQyxNQWRFOztBQWdCbkI7OztBQUdBOUIsWUFBVSxFQUFFNkIsaURBQVMsQ0FBQ0csS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTSxXQUFOLEVBQWtCLE1BQWxCLEVBQTBCLFNBQTFCLENBQWhCLENBbkJPOztBQW9CbkI7OztBQUdBL0IsYUFBVyxFQUFFNEIsaURBQVMsQ0FBQ0ksTUF2Qko7O0FBeUJuQjs7OztBQUlBbEIsVUFBUSxFQUFFYyxpREFBUyxDQUFDSztBQTdCRCxDQUFyQixDLENBa0NBOztBQUNldEMsdUVBQWYsRSIsImZpbGUiOiI1NjM0MGQ0LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5cbi8vIENPTlRJTlVFIEZST00gSEVSRSBUT01PUlJPVzpcbi8vIGh0dHBzOi8vZGFzaC5wbG90Lmx5L3JlYWN0LWZvci1weXRob24tZGV2ZWxvcGVyc1xuXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNsYXNzIFZvdGVDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvLyBXaGVuIHdlIGluaXRpYWxpemUsIHdlIGJ1aWxkIGxvZ2ljIGludG8gdGhlIGxpa2UgYW5kIGRpc2xpa2UgY2xhc3Nlc1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHZhbHVlOlwiXCIsXG4gICAgICAgIGFjdGl2ZVZvdGU6bnVsbCxcbiAgICAgICAgdm90ZUhpc3Rvcnk6e1xuICAgICAgICAgIHN1cGVybGlrZTowLCAvLyBjb3VudHMgYXMgcG9zaXRpdmUgdm90ZSBidXQgaXMgYSBzZXBlcmF0ZSBlbnRpdHlcbiAgICAgICAgICBsaWtlOjAsXG4gICAgICAgICAgZGlzbGlrZTowLFxuICAgICAgICAgIHRyYWNrVm90ZXM6W11cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5oYW5kbGVWb3RlID0gdGhpcy5oYW5kbGVWb3RlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnVwZGF0ZVZvdGUgPSB0aGlzLnVwZGF0ZVZvdGUuYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgdXBkYXRlVm90ZShjdXJyVm90ZUhpc3QsIHZvdGVOYW1lKSB7XG4gICAgLy8gUHJldmlvdXMgdm90ZVxuICAgIGNvbnN0IGFsbFZvdGVzID0gY3VyclZvdGVIaXN0LnRyYWNrVm90ZXNcbiAgICB2YXIgYWN0Vm90ZSA9IHRoaXMucHJvcHMuYWN0aXZlVm90ZTsgLy8gaW5zdGFudGlhdGUgdGhlIGl0ZW1cblxuICAgIGlmIChhbGxWb3Rlcy5sZW5ndGg8Mikge1xuICAgICAgLy8gSWYgZmlyc3Qgdm90ZSwgdm90ZSBpcyBjdXJyXG4gICAgICBhY3RWb3RlID0gdm90ZU5hbWVcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGNvbnN0IHByZXZWb3RlID0gYWxsVm90ZXNbYWxsVm90ZXMubGVuZ3RoLTJdXG5cbiAgICAgIGlmKHZvdGVOYW1lPT09cHJldlZvdGUpe1xuICAgICAgICAvKlxuICAgICAgICBJZiB2b3RlIChjbGljaykgaXMgc2FtZSBhcyBwcmV2aW91cyAoY2xpY2spOlxuICAgICAgICAgIOKAkyBpZiB2b3RlIGlzIHRoZSBzYW1lIGFzIGFjdGl2ZVZvdGUgd2Ugc2V0IHZvdGUgdG8gbnVsbFxuICAgICAgICAgIOKAkyBpZiB2b3RlIGlzIGRpZmYgZnJvbSBhY3RpdmVWb3RlIHdlIHNldCB2b3RlIHRvIGN1cnJcbiAgICAgICAgKi9cbiAgICAgICAgaWYoYWN0Vm90ZT09PXZvdGVOYW1lKXtcbiAgICAgICAgICBhY3RWb3RlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIGFjdFZvdGUgPSB2b3RlTmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICAvLyBJZiB2b3RlIGlzIGRpZmYgZnJvbSBwcmV2aW91cywgdm90ZSBpcyBjdXJyXG4gICAgICAgIGFjdFZvdGUgPSB2b3RlTmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCB0aGUgdmFsdWVzXG4gICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7YWN0aXZlVm90ZTphY3RWb3RlfSlcbiAgfVxuXG5cbiAgLy8gTmV4dCBoYW5kbGVyXG4gIGhhbmRsZVZvdGUoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHByb3BlciB2YWx1ZXNcbiAgICBjb25zdCB2b3RlTmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgY29uc3QgY3VyclZvdGVIaXN0ID0gdGhpcy5zdGF0ZS52b3RlSGlzdG9yeTtcbiAgICBjdXJyVm90ZUhpc3Rbdm90ZU5hbWVdKz0xXG4gICAgY3VyclZvdGVIaXN0LnRyYWNrVm90ZXMucHVzaCh2b3RlTmFtZSlcblxuICAgIC8vIFVwZGF0ZSBwcm9wc1xuICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe3ZvdGVIaXN0b3J5OmN1cnJWb3RlSGlzdH0pXG5cbiAgICAvLyBDYWxsIHRoZSBuZXh0IGZ1bmN0aW9uXG4gICAgdGhpcy51cGRhdGVWb3RlKGN1cnJWb3RlSGlzdCx2b3RlTmFtZSlcbiAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpZCwgbGFiZWwsIHNldFByb3BzLHZvdGVIaXN0b3J5LCBhY3RpdmVWb3RlLCB2YWx1ZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIC8vIFNldCB0aGUgdmFsdWVzIG9mIGVhY2ggYnV0dG9uXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZUNob2ljZXMgPSB7XG4gICAgICAgICAgXCJzdXBlcmxpa2VcIjpmYWxzZSxcbiAgICAgICAgICBcImxpa2VcIjpmYWxzZSxcbiAgICAgICAgICBcImRpc2xpa2VcIjpmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgY2xhc3NOYW1lQ2hvaWNlc1thY3RpdmVWb3RlXSA9dHJ1ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT17YHZvdGUtY2FyZCBhY3RpdmU6JHthY3RpdmVWb3RlfWB9PlxuICAgICAgICAgICAgICAgIEV4YW1wbGVDb21wb25lbnQ6IHtsYWJlbH0mbmJzcDtcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQcm9wcyh7dmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgyPlRoaXMgaXMgeW91ciB2YWx1ZSBcInt2YWx1ZX1cIjwvaDI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSB7YGJ1dHRvbiB2b3RlLXN1cGVybGlrZSBhY3RpdmU6JHtjbGFzc05hbWVDaG9pY2VzLnN1cGVybGlrZX1gfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN1cGVybGlrZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVZvdGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgXCJTVVBFUkxJS0UgTUVcIlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSB7YGJ1dHRvbiB2b3RlLWxpa2UgYWN0aXZlOiR7Y2xhc3NOYW1lQ2hvaWNlcy5saWtlfWB9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwibGlrZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVZvdGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgXCJMSUtFIE1FXCJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9IHtgYnV0dG9uIHZvdGUtZGlzbGlrZSBhY3RpdmU6JHtjbGFzc05hbWVDaG9pY2VzLmRpc2xpa2V9YH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXNsaWtlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBcIkRJU0xJS0UgTUVcIlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBDdXJyZW50IHN0YXRlOiB7SlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxoMj5DdXJyZW50IHZvdGU6IHthY3RpdmVWb3RlfTwvaDI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblZvdGVDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBsYWJlbDpcImRlZmF1bHQtbGFiZWxcIixcbiAgICBhY3RpdmVWb3RlOm51bGwsXG4gICAgdm90ZUhpc3Rvcnk6e1xuICAgICAgc3VwZXJsaWtlOjAsIC8vIGNvdW50cyBhcyBwb3NpdGl2ZSB2b3RlIGJ1dCBpcyBhIHNlcGVyYXRlIGVudGl0eVxuICAgICAgbGlrZTowLFxuICAgICAgZGlzbGlrZTowLFxuICAgICAgdHJhY2tWb3RlczpbXVxuICAgIH0sXG5cbn1cblxuXG5Wb3RlQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2b3RlIG9mIHRoZSBvYmplY3RcbiAgICovXG4gIGFjdGl2ZVZvdGU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwnc3VwZXJsaWtlJywnbGlrZScsICdkaXNsaWtlJ10pLFxuICAvKipcbiAgICogVGhlIGhpc3Rvcnkgb2YgdGhlIG9iamVjdFxuICAgKi9cbiAgdm90ZUhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICovXG4gIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxufTtcblxuXG4vLyBFeHBvcnQgdGhlIGl0ZW1cbmV4cG9ydCBkZWZhdWx0IFZvdGVDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==