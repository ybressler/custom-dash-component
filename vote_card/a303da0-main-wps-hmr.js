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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@material-ui/icons/AccessAlarm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@material-ui/icons/ThreeDRotation'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
      content: "",
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
          value = _this$props.value,
          content = _this$props.content,
          metadata = _this$props.metadata; // Set the values of each button

      var classNameChoices = {
        "superlike": false,
        "like": false,
        "dislike": false
      };
      classNameChoices[activeVote] = true;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id,
        className: "vote-card",
        activevote: "".concat(activeVote),
        metadata: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "votecard-content"
      }, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeIcon, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
      }, "\"DISLIKE\""));
    }
  }]);

  return VoteCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

VoteCard.defaultProps = {
  value: "",
  content: "keyword suggestion",
  metadata: "{'type':'keyword'}",
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
   * The value displayed in the votecard
   */
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Metadata about the item in the votecard
   */
  metadata: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // A jsonified dict

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3RlX2NhcmQvLi9zcmMvbGliL2NvbXBvbmVudHMvVm90ZUNhcmQucmVhY3QuanMiXSwibmFtZXMiOlsiVm90ZUNhcmQiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjb250ZW50IiwiYWN0aXZlVm90ZSIsInZvdGVIaXN0b3J5Iiwic3VwZXJsaWtlIiwibGlrZSIsImRpc2xpa2UiLCJ0cmFja1ZvdGVzIiwidXBkYXRlVmFsdWUiLCJiaW5kIiwiaGFuZGxlVm90ZSIsInVwZGF0ZVZvdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRQcm9wcyIsInRhcmdldCIsImN1cnJWb3RlSGlzdCIsInZvdGVOYW1lIiwiYWxsVm90ZXMiLCJhY3RWb3RlIiwibGVuZ3RoIiwicHJldlZvdGUiLCJuYW1lIiwicHVzaCIsImlkIiwibGFiZWwiLCJtZXRhZGF0YSIsImNsYXNzTmFtZUNob2ljZXMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25lT2YiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Q0FHQTtBQUNBO0FBSUE7O0lBRU1BLFE7Ozs7O0FBRUo7QUFDQSxvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixrRkFBTUEsS0FBTjtBQUNFLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLLEVBQUMsRUFESztBQUVYQyxhQUFPLEVBQUMsRUFGRztBQUdYQyxnQkFBVSxFQUFDLElBSEE7QUFJWEMsaUJBQVcsRUFBQztBQUNWQyxpQkFBUyxFQUFDLENBREE7QUFDRztBQUNiQyxZQUFJLEVBQUMsQ0FGSztBQUdWQyxlQUFPLEVBQUMsQ0FIRTtBQUlWQyxrQkFBVSxFQUFDO0FBSkQ7QUFKRCxLQUFiO0FBV0EsVUFBS0MsV0FBTCxHQUFtQixN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OEIsaURBQVMsQ0FBQ0MsTUFuQkE7O0FBcUJuQjs7O0FBR0FOLFVBQVEsRUFBRUssaURBQVMsQ0FBQ0MsTUF4QkQ7QUF3QlM7O0FBRTVCOzs7QUFHQTlCLFlBQVUsRUFBRTZCLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU0sV0FBTixFQUFrQixNQUFsQixFQUEwQixTQUExQixDQUFoQixDQTdCTzs7QUE4Qm5COzs7QUFHQS9CLGFBQVcsRUFBRTRCLGlEQUFTLENBQUNJLE1BakNKOztBQW1DbkI7Ozs7QUFJQXJCLFVBQVEsRUFBRWlCLGlEQUFTLENBQUNLO0FBdkNELENBQXJCLEMsQ0E0Q0E7O0FBQ2V2Qyx1RUFBZixFIiwiZmlsZSI6ImEzMDNkYTAtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCBBY2Nlc3NBbGFybUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FjY2Vzc0FsYXJtJztcbmltcG9ydCBUaHJlZURSb3RhdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVGhyZWVEUm90YXRpb24nO1xuXG4vLyBDT05USU5VRSBGUk9NIEhFUkUgVE9NT1JST1c6XG4vLyBodHRwczovL2Rhc2gucGxvdC5seS9yZWFjdC1mb3ItcHl0aG9uLWRldmVsb3BlcnNcblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jbGFzcyBWb3RlQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgLy8gV2hlbiB3ZSBpbml0aWFsaXplLCB3ZSBidWlsZCBsb2dpYyBpbnRvIHRoZSBsaWtlIGFuZCBkaXNsaWtlIGNsYXNzZXNcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB2YWx1ZTpcIlwiLFxuICAgICAgICBjb250ZW50OlwiXCIsXG4gICAgICAgIGFjdGl2ZVZvdGU6bnVsbCxcbiAgICAgICAgdm90ZUhpc3Rvcnk6e1xuICAgICAgICAgIHN1cGVybGlrZTowLCAvLyBjb3VudHMgYXMgcG9zaXRpdmUgdm90ZSBidXQgaXMgYSBzZXBlcmF0ZSBlbnRpdHlcbiAgICAgICAgICBsaWtlOjAsXG4gICAgICAgICAgZGlzbGlrZTowLFxuICAgICAgICAgIHRyYWNrVm90ZXM6W11cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVWYWx1ZSA9IHRoaXMudXBkYXRlVmFsdWUuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlVm90ZSA9IHRoaXMuaGFuZGxlVm90ZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy51cGRhdGVWb3RlID0gdGhpcy51cGRhdGVWb3RlLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVWYWx1ZShlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnByb3BzLnNldFByb3BzKHt2YWx1ZTplLnRhcmdldC52YWx1ZX0pXG4gICAgLy8gVGhlIHNob3J0ZXIgd2F5IHRvIGRvIGl0Li4uXG4gICAgLy8gZSA9PiB0aGlzLnByb3BzLnNldFByb3BzKHt2YWx1ZTogZS50YXJnZXQudmFsdWV9XG4gIH1cblxuICB1cGRhdGVWb3RlKGN1cnJWb3RlSGlzdCwgdm90ZU5hbWUpIHtcbiAgICAvLyBQcmV2aW91cyB2b3RlXG4gICAgY29uc3QgYWxsVm90ZXMgPSBjdXJyVm90ZUhpc3QudHJhY2tWb3Rlc1xuICAgIHZhciBhY3RWb3RlID0gdGhpcy5wcm9wcy5hY3RpdmVWb3RlOyAvLyBpbnN0YW50aWF0ZSB0aGUgaXRlbVxuXG4gICAgaWYgKGFsbFZvdGVzLmxlbmd0aDwyKSB7XG4gICAgICAvLyBJZiBmaXJzdCB2b3RlLCB2b3RlIGlzIGN1cnJcbiAgICAgIGFjdFZvdGUgPSB2b3RlTmFtZVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgY29uc3QgcHJldlZvdGUgPSBhbGxWb3Rlc1thbGxWb3Rlcy5sZW5ndGgtMl1cblxuICAgICAgaWYodm90ZU5hbWU9PT1wcmV2Vm90ZSl7XG4gICAgICAgIC8qXG4gICAgICAgIElmIHZvdGUgKGNsaWNrKSBpcyBzYW1lIGFzIHByZXZpb3VzIChjbGljayk6XG4gICAgICAgICAg4oCTIGlmIHZvdGUgaXMgdGhlIHNhbWUgYXMgYWN0aXZlVm90ZSB3ZSBzZXQgdm90ZSB0byBudWxsXG4gICAgICAgICAg4oCTIGlmIHZvdGUgaXMgZGlmZiBmcm9tIGFjdGl2ZVZvdGUgd2Ugc2V0IHZvdGUgdG8gY3VyclxuICAgICAgICAqL1xuICAgICAgICBpZihhY3RWb3RlPT09dm90ZU5hbWUpe1xuICAgICAgICAgIGFjdFZvdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgYWN0Vm90ZSA9IHZvdGVOYW1lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIC8vIElmIHZvdGUgaXMgZGlmZiBmcm9tIHByZXZpb3VzLCB2b3RlIGlzIGN1cnJcbiAgICAgICAgYWN0Vm90ZSA9IHZvdGVOYW1lXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSB2YWx1ZXNcbiAgICB0aGlzLnByb3BzLnNldFByb3BzKHthY3RpdmVWb3RlOmFjdFZvdGV9KVxuICB9XG5cblxuICAvLyBOZXh0IGhhbmRsZXJcbiAgaGFuZGxlVm90ZShlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggcHJvcGVyIHZhbHVlc1xuICAgIGNvbnN0IHZvdGVOYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBjb25zdCBjdXJyVm90ZUhpc3QgPSB0aGlzLnN0YXRlLnZvdGVIaXN0b3J5O1xuICAgIGN1cnJWb3RlSGlzdFt2b3RlTmFtZV0rPTFcbiAgICBjdXJyVm90ZUhpc3QudHJhY2tWb3Rlcy5wdXNoKHZvdGVOYW1lKVxuXG4gICAgLy8gVXBkYXRlIHByb3BzXG4gICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7dm90ZUhpc3Rvcnk6Y3VyclZvdGVIaXN0fSlcblxuICAgIC8vIENhbGwgdGhlIG5leHQgZnVuY3Rpb25cbiAgICB0aGlzLnVwZGF0ZVZvdGUoY3VyclZvdGVIaXN0LHZvdGVOYW1lKVxuICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2lkLCBsYWJlbCwgc2V0UHJvcHMsdm90ZUhpc3RvcnksIGFjdGl2ZVZvdGUsIHZhbHVlLCBjb250ZW50LCBtZXRhZGF0YX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIC8vIFNldCB0aGUgdmFsdWVzIG9mIGVhY2ggYnV0dG9uXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZUNob2ljZXMgPSB7XG4gICAgICAgICAgXCJzdXBlcmxpa2VcIjpmYWxzZSxcbiAgICAgICAgICBcImxpa2VcIjpmYWxzZSxcbiAgICAgICAgICBcImRpc2xpa2VcIjpmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgY2xhc3NOYW1lQ2hvaWNlc1thY3RpdmVWb3RlXSA9dHJ1ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17aWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B2b3RlLWNhcmRgfVxuICAgICAgICAgICAgYWN0aXZldm90ZT17YCR7YWN0aXZlVm90ZX1gfVxuICAgICAgICAgICAgbWV0YWRhdGE9e1wiXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3RlY2FyZC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEhvbWVJY29uIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN1cGVybGlrZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ge2B2b3RlLXN1cGVybGlrZWB9XG4gICAgICAgICAgICAgICAgICBpc2FjdGl2ZSA9IHtgJHtjbGFzc05hbWVDaG9pY2VzLnN1cGVybGlrZX1gfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVWb3RlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFwiU1VQRVJMSUtFXCJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsaWtlXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSB7YHZvdGUtbGlrZWB9XG4gICAgICAgICAgICAgICAgICBpc2FjdGl2ZSA9IHtgJHtjbGFzc05hbWVDaG9pY2VzLmxpa2V9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBcIkxJS0VcIlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXNsaWtlXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSB7YHZvdGUtZGlzbGlrZWB9XG4gICAgICAgICAgICAgICAgICBpc2FjdGl2ZSA9IHtgJHtjbGFzc05hbWVDaG9pY2VzLmRpc2xpa2V9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBcIkRJU0xJS0VcIlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuVm90ZUNhcmQuZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOlwiXCIsXG4gICAgY29udGVudDpcImtleXdvcmQgc3VnZ2VzdGlvblwiLFxuICAgIG1ldGFkYXRhOlwieyd0eXBlJzona2V5d29yZCd9XCIsXG4gICAgbGFiZWw6XCJkZWZhdWx0LWxhYmVsXCIsXG4gICAgYWN0aXZlVm90ZTpudWxsLFxuICAgIHZvdGVIaXN0b3J5OntcbiAgICAgIHN1cGVybGlrZTowLCAvLyBjb3VudHMgYXMgcG9zaXRpdmUgdm90ZSBidXQgaXMgYSBzZXBlcmF0ZSBlbnRpdHlcbiAgICAgIGxpa2U6MCxcbiAgICAgIGRpc2xpa2U6MCxcbiAgICAgIHRyYWNrVm90ZXM6W11cbiAgICB9LFxuXG59XG5cblxuVm90ZUNhcmQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgdm90ZWNhcmRcbiAgICovXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE1ldGFkYXRhIGFib3V0IHRoZSBpdGVtIGluIHRoZSB2b3RlY2FyZFxuICAgKi9cbiAgbWV0YWRhdGE6IFByb3BUeXBlcy5zdHJpbmcsIC8vIEEganNvbmlmaWVkIGRpY3RcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdm90ZSBvZiB0aGUgb2JqZWN0XG4gICAqL1xuICBhY3RpdmVWb3RlOiBQcm9wVHlwZXMub25lT2YoW251bGwsJ3N1cGVybGlrZScsJ2xpa2UnLCAnZGlzbGlrZSddKSxcbiAgLyoqXG4gICAqIFRoZSBoaXN0b3J5IG9mIHRoZSBvYmplY3RcbiAgICovXG4gIHZvdGVIaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAqL1xuICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG5cbn07XG5cblxuLy8gRXhwb3J0IHRoZSBpdGVtXG5leHBvcnQgZGVmYXVsdCBWb3RlQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=