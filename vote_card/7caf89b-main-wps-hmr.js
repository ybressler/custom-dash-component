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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Stars */ "./node_modules/@material-ui/icons/Stars.js");
/* harmony import */ var _material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_NotInterested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/NotInterested */ "./node_modules/@material-ui/icons/NotInterested.js");
/* harmony import */ var _material_ui_icons_NotInterested__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotInterested__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ThumbUpAltOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ThumbUpAltOutlined */ "./node_modules/@material-ui/icons/ThumbUpAltOutlined.js");
/* harmony import */ var _material_ui_icons_ThumbUpAltOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ThumbUpAltOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ThumbDownAltOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ThumbDownAltOutlined */ "./node_modules/@material-ui/icons/ThumbDownAltOutlined.js");
/* harmony import */ var _material_ui_icons_ThumbDownAltOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ThumbDownAltOutlined__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // import { IconButton, Colors } from 'react-native-paper';





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
    _this.handleSuperLike = _this.handleSuperLike.bind(_assertThisInitialized(_this));
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
      e.preventDefault(); // if (!e.target.name){e=e.target.parentElement}
      // var voteName = e.target.getAttribute("aria-label")
      // if(!voteName){voteName = e.target.getAttribute("label")}
      // if(!voteName){voteName = e.target.name}
      // Update the state with proper values

      var voteName = e.target.getAttribute("votename");
      var currVoteHist = this.state.voteHistory;
      currVoteHist[voteName] += 1;
      currVoteHist.trackVotes.push(voteName); // Update props

      this.props.setProps({
        voteHistory: currVoteHist
      }); // Call the next function

      this.updateVote(currVoteHist, voteName);
    }
  }, {
    key: "handleSuperLike",
    value: function handleSuperLike(e) {
      var currVoteHist = this.state.voteHistory;
      currVoteHist['superlike'] += 1;
      currVoteHist.trackVotes.push('superlike');
      this.props.setProps({
        voteHistory: currVoteHist
      });
      this.updateVote(currVoteHist, 'superlike');
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
      }, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
        "aria-label": "superlike",
        votename: "superlike",
        isactive: "".concat(classNameChoices.superlike),
        onClick: this.handleSuperLike,
        component: "span"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_4___default.a, {
        votename: "superlike"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
        "aria-label": "like",
        votename: "like",
        isactive: "".concat(classNameChoices.like),
        onClick: this.handleVote,
        component: "span"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ThumbUpAltOutlined__WEBPACK_IMPORTED_MODULE_6___default.a, {
        votename: "like"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
        "aria-label": "dislike",
        votename: "dislike",
        isactive: "".concat(classNameChoices.dislike),
        onClick: this.handleVote,
        component: "span"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ThumbDownAltOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {
        votename: "dislike"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
      }, "\"DISLIKE\"")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Current Vote: ", activeVote));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3RlX2NhcmQvLi9zcmMvbGliL2NvbXBvbmVudHMvVm90ZUNhcmQucmVhY3QuanMiXSwibmFtZXMiOlsiVm90ZUNhcmQiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjb250ZW50IiwiYWN0aXZlVm90ZSIsInZvdGVIaXN0b3J5Iiwic3VwZXJsaWtlIiwibGlrZSIsImRpc2xpa2UiLCJ0cmFja1ZvdGVzIiwidXBkYXRlVmFsdWUiLCJiaW5kIiwiaGFuZGxlVm90ZSIsInVwZGF0ZVZvdGUiLCJoYW5kbGVTdXBlckxpa2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRQcm9wcyIsInRhcmdldCIsImN1cnJWb3RlSGlzdCIsInZvdGVOYW1lIiwiYWxsVm90ZXMiLCJhY3RWb3RlIiwibGVuZ3RoIiwicHJldlZvdGUiLCJnZXRBdHRyaWJ1dGUiLCJwdXNoIiwiaWQiLCJsYWJlbCIsIm1ldGFkYXRhIiwiY2xhc3NOYW1lQ2hvaWNlcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUlBOztJQUVNQSxROzs7OztBQUVKO0FBQ0Esb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsa0ZBQU1BLEtBQU47QUFDRSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSyxFQUFDLEVBREs7QUFFWEMsYUFBTyxFQUFDLEVBRkc7QUFHWEMsZ0JBQVUsRUFBQyxJQUhBO0FBSVhDLGlCQUFXLEVBQUM7QUFDVkMsaUJBQVMsRUFBQyxDQURBO0FBQ0c7QUFDYkMsWUFBSSxFQUFDLENBRks7QUFHVkMsZUFBTyxFQUFDLENBSEU7QUFJVkMs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RUFBRU0saURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFUTDs7QUFXbkI7OztBQUdBbEMsT0FBSyxFQUFFZ0MsaURBQVMsQ0FBQ0MsTUFkRTs7QUFnQm5COzs7QUFHQWhDLFNBQU8sRUFBRStCLGlEQUFTLENBQUNDLE1BbkJBOztBQXFCbkI7OztBQUdBTixVQUFRLEVBQUVLLGlEQUFTLENBQUNDLE1BeEJEO0FBd0JTOztBQUU1Qjs7O0FBR0EvQixZQUFVLEVBQUU4QixpREFBUyxDQUFDRyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFNLFdBQU4sRUFBa0IsTUFBbEIsRUFBMEIsU0FBMUIsQ0FBaEIsQ0E3Qk87O0FBOEJuQjs7O0FBR0FoQyxhQUFXLEVBQUU2QixpREFBUyxDQUFDSSxNQWpDSjs7QUFtQ25COzs7O0FBSUFyQixVQUFRLEVBQUVpQixpREFBUyxDQUFDSztBQXZDRCxDQUFyQixDLENBNENBOztBQUNleEMsdUVBQWYsRSIsImZpbGUiOiI3Y2FmODliLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG4vLyBpbXBvcnQgeyBJY29uQnV0dG9uLCBDb2xvcnMgfSBmcm9tICdyZWFjdC1uYXRpdmUtcGFwZXInO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBTdGFyc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJzJztcbmltcG9ydCBOb3RJbnRlcmVzdGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTm90SW50ZXJlc3RlZCc7XG5pbXBvcnQgVGh1bWJVcEFsdE91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVGh1bWJVcEFsdE91dGxpbmVkJztcbmltcG9ydCBUaHVtYkRvd25BbHRPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RodW1iRG93bkFsdE91dGxpbmVkJztcbi8vIENPTlRJTlVFIEZST00gSEVSRSBUT01PUlJPVzpcbi8vIGh0dHBzOi8vZGFzaC5wbG90Lmx5L3JlYWN0LWZvci1weXRob24tZGV2ZWxvcGVyc1xuXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNsYXNzIFZvdGVDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvLyBXaGVuIHdlIGluaXRpYWxpemUsIHdlIGJ1aWxkIGxvZ2ljIGludG8gdGhlIGxpa2UgYW5kIGRpc2xpa2UgY2xhc3Nlc1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHZhbHVlOlwiXCIsXG4gICAgICAgIGNvbnRlbnQ6XCJcIixcbiAgICAgICAgYWN0aXZlVm90ZTpudWxsLFxuICAgICAgICB2b3RlSGlzdG9yeTp7XG4gICAgICAgICAgc3VwZXJsaWtlOjAsIC8vIGNvdW50cyBhcyBwb3NpdGl2ZSB2b3RlIGJ1dCBpcyBhIHNlcGVyYXRlIGVudGl0eVxuICAgICAgICAgIGxpa2U6MCxcbiAgICAgICAgICBkaXNsaWtlOjAsXG4gICAgICAgICAgdHJhY2tWb3RlczpbXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlID0gdGhpcy51cGRhdGVWYWx1ZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVWb3RlID0gdGhpcy5oYW5kbGVWb3RlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnVwZGF0ZVZvdGUgPSB0aGlzLnVwZGF0ZVZvdGUuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlU3VwZXJMaWtlID0gdGhpcy5oYW5kbGVTdXBlckxpa2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe3ZhbHVlOmUudGFyZ2V0LnZhbHVlfSlcbiAgICAvLyBUaGUgc2hvcnRlciB3YXkgdG8gZG8gaXQuLi5cbiAgICAvLyBlID0+IHRoaXMucHJvcHMuc2V0UHJvcHMoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZX1cbiAgfVxuXG4gIHVwZGF0ZVZvdGUoY3VyclZvdGVIaXN0LCB2b3RlTmFtZSkge1xuICAgIC8vIFByZXZpb3VzIHZvdGVcbiAgICBjb25zdCBhbGxWb3RlcyA9IGN1cnJWb3RlSGlzdC50cmFja1ZvdGVzXG4gICAgdmFyIGFjdFZvdGUgPSB0aGlzLnByb3BzLmFjdGl2ZVZvdGU7IC8vIGluc3RhbnRpYXRlIHRoZSBpdGVtXG5cbiAgICBpZiAoYWxsVm90ZXMubGVuZ3RoPDIpIHtcbiAgICAgIC8vIElmIGZpcnN0IHZvdGUsIHZvdGUgaXMgY3VyclxuICAgICAgYWN0Vm90ZSA9IHZvdGVOYW1lXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zdCBwcmV2Vm90ZSA9IGFsbFZvdGVzW2FsbFZvdGVzLmxlbmd0aC0yXVxuXG4gICAgICBpZih2b3RlTmFtZT09PXByZXZWb3RlKXtcbiAgICAgICAgLypcbiAgICAgICAgSWYgdm90ZSAoY2xpY2spIGlzIHNhbWUgYXMgcHJldmlvdXMgKGNsaWNrKTpcbiAgICAgICAgICDigJMgaWYgdm90ZSBpcyB0aGUgc2FtZSBhcyBhY3RpdmVWb3RlIHdlIHNldCB2b3RlIHRvIG51bGxcbiAgICAgICAgICDigJMgaWYgdm90ZSBpcyBkaWZmIGZyb20gYWN0aXZlVm90ZSB3ZSBzZXQgdm90ZSB0byBjdXJyXG4gICAgICAgICovXG4gICAgICAgIGlmKGFjdFZvdGU9PT12b3RlTmFtZSl7XG4gICAgICAgICAgYWN0Vm90ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBhY3RWb3RlID0gdm90ZU5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgLy8gSWYgdm90ZSBpcyBkaWZmIGZyb20gcHJldmlvdXMsIHZvdGUgaXMgY3VyclxuICAgICAgICBhY3RWb3RlID0gdm90ZU5hbWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIHZhbHVlc1xuICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe2FjdGl2ZVZvdGU6YWN0Vm90ZX0pXG4gIH1cblxuXG4gIC8vIE5leHQgaGFuZGxlclxuICBoYW5kbGVWb3RlKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIC8vIGlmICghZS50YXJnZXQubmFtZSl7ZT1lLnRhcmdldC5wYXJlbnRFbGVtZW50fVxuICAgIC8vIHZhciB2b3RlTmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIilcbiAgICAvLyBpZighdm90ZU5hbWUpe3ZvdGVOYW1lID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwibGFiZWxcIil9XG4gICAgLy8gaWYoIXZvdGVOYW1lKXt2b3RlTmFtZSA9IGUudGFyZ2V0Lm5hbWV9XG4gICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHByb3BlciB2YWx1ZXNcbiAgICBjb25zdCB2b3RlTmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInZvdGVuYW1lXCIpO1xuICAgIGNvbnN0IGN1cnJWb3RlSGlzdCA9IHRoaXMuc3RhdGUudm90ZUhpc3Rvcnk7XG4gICAgY3VyclZvdGVIaXN0W3ZvdGVOYW1lXSs9MVxuICAgIGN1cnJWb3RlSGlzdC50cmFja1ZvdGVzLnB1c2godm90ZU5hbWUpXG5cbiAgICAvLyBVcGRhdGUgcHJvcHNcbiAgICB0aGlzLnByb3BzLnNldFByb3BzKHt2b3RlSGlzdG9yeTpjdXJyVm90ZUhpc3R9KVxuXG4gICAgLy8gQ2FsbCB0aGUgbmV4dCBmdW5jdGlvblxuICAgIHRoaXMudXBkYXRlVm90ZShjdXJyVm90ZUhpc3Qsdm90ZU5hbWUpXG4gIH1cblxuICBoYW5kbGVTdXBlckxpa2UoZSl7XG4gICAgY29uc3QgY3VyclZvdGVIaXN0ID0gdGhpcy5zdGF0ZS52b3RlSGlzdG9yeTtcbiAgICBjdXJyVm90ZUhpc3RbJ3N1cGVybGlrZSddICs9IDE7XG4gICAgY3VyclZvdGVIaXN0LnRyYWNrVm90ZXMucHVzaCgnc3VwZXJsaWtlJyk7XG5cbiAgICB0aGlzLnByb3BzLnNldFByb3BzKHt2b3RlSGlzdG9yeTpjdXJyVm90ZUhpc3R9KVxuICAgIHRoaXMudXBkYXRlVm90ZShjdXJyVm90ZUhpc3QsICdzdXBlcmxpa2UnKTtcbiAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aWQsIGxhYmVsLCBzZXRQcm9wcyx2b3RlSGlzdG9yeSwgYWN0aXZlVm90ZSwgdmFsdWUsIGNvbnRlbnQsIG1ldGFkYXRhfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgLy8gU2V0IHRoZSB2YWx1ZXMgb2YgZWFjaCBidXR0b25cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lQ2hvaWNlcyA9IHtcbiAgICAgICAgICBcInN1cGVybGlrZVwiOmZhbHNlLFxuICAgICAgICAgIFwibGlrZVwiOmZhbHNlLFxuICAgICAgICAgIFwiZGlzbGlrZVwiOmZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBjbGFzc05hbWVDaG9pY2VzW2FjdGl2ZVZvdGVdID10cnVlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXtpZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHZvdGUtY2FyZGB9XG4gICAgICAgICAgICBhY3RpdmV2b3RlPXtgJHthY3RpdmVWb3RlfWB9XG4gICAgICAgICAgICBtZXRhZGF0YT17XCJcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGVjYXJkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzdXBlcmxpa2VcIlxuICAgICAgICAgICAgICAgICAgICB2b3RlbmFtZT1cInN1cGVybGlrZVwiXG4gICAgICAgICAgICAgICAgICAgIGlzYWN0aXZlID0ge2Ake2NsYXNzTmFtZUNob2ljZXMuc3VwZXJsaWtlfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VwZXJMaWtlfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U3RhcnNJY29uIHZvdGVuYW1lPVwic3VwZXJsaWtlXCIvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgdm90ZW5hbWU9XCJsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5saWtlfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRodW1iVXBBbHRPdXRsaW5lZEljb24gdm90ZW5hbWU9XCJsaWtlXCIvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJkaXNsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgdm90ZW5hbWU9XCJkaXNsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5kaXNsaWtlfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRodW1iRG93bkFsdE91dGxpbmVkSWNvbiB2b3RlbmFtZT1cImRpc2xpa2VcIi8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdXBlcmxpa2VcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ge2B2b3RlLXN1cGVybGlrZWB9XG4gICAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5zdXBlcmxpa2V9YH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVZvdGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBcIlNVUEVSTElLRVwiXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGlrZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSB7YHZvdGUtbGlrZWB9XG4gICAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5saWtlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVWb3RlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgXCJMSUtFXCJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzbGlrZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSB7YHZvdGUtZGlzbGlrZWB9XG4gICAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5kaXNsaWtlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVWb3RlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgXCJESVNMSUtFXCJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHA+Q3VycmVudCBWb3RlOiB7YWN0aXZlVm90ZX08L3A+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblZvdGVDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTpcIlwiLFxuICAgIGNvbnRlbnQ6XCJrZXl3b3JkIHN1Z2dlc3Rpb25cIixcbiAgICBtZXRhZGF0YTpcInsndHlwZSc6J2tleXdvcmQnfVwiLFxuICAgIGxhYmVsOlwiZGVmYXVsdC1sYWJlbFwiLFxuICAgIGFjdGl2ZVZvdGU6bnVsbCxcbiAgICB2b3RlSGlzdG9yeTp7XG4gICAgICBzdXBlcmxpa2U6MCwgLy8gY291bnRzIGFzIHBvc2l0aXZlIHZvdGUgYnV0IGlzIGEgc2VwZXJhdGUgZW50aXR5XG4gICAgICBsaWtlOjAsXG4gICAgICBkaXNsaWtlOjAsXG4gICAgICB0cmFja1ZvdGVzOltdXG4gICAgfSxcblxufVxuXG5cblZvdGVDYXJkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIHZvdGVjYXJkXG4gICAqL1xuICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBNZXRhZGF0YSBhYm91dCB0aGUgaXRlbSBpbiB0aGUgdm90ZWNhcmRcbiAgICovXG4gIG1ldGFkYXRhOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBBIGpzb25pZmllZCBkaWN0XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZvdGUgb2YgdGhlIG9iamVjdFxuICAgKi9cbiAgYWN0aXZlVm90ZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCdzdXBlcmxpa2UnLCdsaWtlJywgJ2Rpc2xpa2UnXSksXG4gIC8qKlxuICAgKiBUaGUgaGlzdG9yeSBvZiB0aGUgb2JqZWN0XG4gICAqL1xuICB2b3RlSGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgKi9cbiAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG59O1xuXG5cbi8vIEV4cG9ydCB0aGUgaXRlbVxuZXhwb3J0IGRlZmF1bHQgVm90ZUNhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9