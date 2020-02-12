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
    _this.starsClick = _this.starsClick.bind(_assertThisInitialized(_this));
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
    key: "starsClick",
    value: function starsClick(e) {
      if (e.target.parentElement.id === 'superlike-iconbutton-id') {
        console.info('hello');
      }
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
        component: "span",
        id: "superlike-iconbutton-id"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_4___default.a, {
        votename: "superlike",
        onClick: this.starsClick
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3RlX2NhcmQvLi9zcmMvbGliL2NvbXBvbmVudHMvVm90ZUNhcmQucmVhY3QuanMiXSwibmFtZXMiOlsiVm90ZUNhcmQiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjb250ZW50IiwiYWN0aXZlVm90ZSIsInZvdGVIaXN0b3J5Iiwic3VwZXJsaWtlIiwibGlrZSIsImRpc2xpa2UiLCJ0cmFja1ZvdGVzIiwidXBkYXRlVmFsdWUiLCJiaW5kIiwiaGFuZGxlVm90ZSIsInVwZGF0ZVZvdGUiLCJoYW5kbGVTdXBlckxpa2UiLCJzdGFyc0NsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0UHJvcHMiLCJ0YXJnZXQiLCJjdXJyVm90ZUhpc3QiLCJ2b3RlTmFtZSIsImFsbFZvdGVzIiwiYWN0Vm90ZSIsImxlbmd0aCIsInByZXZWb3RlIiwiZ2V0QXR0cmlidXRlIiwicHVzaCIsInBhcmVudEVsZW1lbnQiLCJpZCIsImNvbnNvbGUiLCJpbmZvIiwibGFiZWwiLCJtZXRhZGF0YSIsImNsYXNzTmFtZUNob2ljZXMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25lT2YiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFJQTs7SUFFTUEsUTs7Ozs7QUFFSjtBQUNBLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLGtGQUFNQSxLQUFOO0FBQ0UsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFdBQUssRUFBQyxFQURLO0FBRVhDLGFBQU8sRUFBQyxFQUZHO0FBR1hDLGdCQUFVLEVBQUMsSUFIQTtBQUlYQyxpQkFBVyxFQUFDO0FBQ1ZDLGlCQUFTLEVBQUMsQ0FEQTtBQUNHO0FB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QUdwQjhCLFVBQVEsRUFBQyxvQkFIVztBQUlwQkQsT0FBSyxFQUFDLGVBSmM7QUFLcEI1QixZQUFVLEVBQUMsSUFMUztBQU1wQkMsYUFBVyxFQUFDO0FBQ1ZDLGFBQVMsRUFBQyxDQURBO0FBQ0c7QUFDYkMsUUFBSSxFQUFDLENBRks7QUFHVkMsV0FBTyxFQUFDLENBSEU7QUFJVkMsY0FBVSxFQUFDO0FBSkQ7QUFOUSxDQUF4QjtBQWdCQVYsUUFBUSxDQUFDc0MsU0FBVCxHQUFxQjtBQUNuQjs7O0FBR0FSLElBQUUsRUFBRVMsaURBQVMsQ0FBQ0MsTUFKSzs7QUFNbkI7OztBQUdBUCxPQUFLLEVBQUVNLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBVEw7O0FBV25COzs7QUFHQXRDLE9BQUssRUFBRW9DLGlEQUFTLENBQUNDLE1BZEU7O0FBZ0JuQjs7O0FBR0FwQyxTQUFPLEVBQUVtQyxpREFBUyxDQUFDQyxNQW5CQTs7QUFxQm5COzs7QUFHQU4sVUFBUSxFQUFFSyxpREFBUyxDQUFDQyxNQXhCRDtBQXdCUzs7QUFFNUI7OztBQUdBbkMsWUFBVSxFQUFFa0MsaURBQVMsQ0FBQ0csS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTSxXQUFOLEVBQWtCLE1BQWxCLEVBQTBCLFNBQTFCLENBQWhCLENBN0JPOztBQThCbkI7OztBQUdBcEMsYUFBVyxFQUFFaUMsaURBQVMsQ0FBQ0ksTUFqQ0o7O0FBbUNuQjs7OztBQUlBeEIsVUFBUSxFQUFFb0IsaURBQVMsQ0FBQ0s7QUF2Q0QsQ0FBckIsQyxDQTRDQTs7QUFDZTVDLHVFQUFmLEUiLCJmaWxlIjoiZmE0ZmE0YS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuLy8gaW1wb3J0IHsgSWNvbkJ1dHRvbiwgQ29sb3JzIH0gZnJvbSAncmVhY3QtbmF0aXZlLXBhcGVyJztcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgU3RhcnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFycyc7XG5pbXBvcnQgTm90SW50ZXJlc3RlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdEludGVyZXN0ZWQnO1xuaW1wb3J0IFRodW1iVXBBbHRPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RodW1iVXBBbHRPdXRsaW5lZCc7XG5pbXBvcnQgVGh1bWJEb3duQWx0T3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UaHVtYkRvd25BbHRPdXRsaW5lZCc7XG4vLyBDT05USU5VRSBGUk9NIEhFUkUgVE9NT1JST1c6XG4vLyBodHRwczovL2Rhc2gucGxvdC5seS9yZWFjdC1mb3ItcHl0aG9uLWRldmVsb3BlcnNcblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jbGFzcyBWb3RlQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgLy8gV2hlbiB3ZSBpbml0aWFsaXplLCB3ZSBidWlsZCBsb2dpYyBpbnRvIHRoZSBsaWtlIGFuZCBkaXNsaWtlIGNsYXNzZXNcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB2YWx1ZTpcIlwiLFxuICAgICAgICBjb250ZW50OlwiXCIsXG4gICAgICAgIGFjdGl2ZVZvdGU6bnVsbCxcbiAgICAgICAgdm90ZUhpc3Rvcnk6e1xuICAgICAgICAgIHN1cGVybGlrZTowLCAvLyBjb3VudHMgYXMgcG9zaXRpdmUgdm90ZSBidXQgaXMgYSBzZXBlcmF0ZSBlbnRpdHlcbiAgICAgICAgICBsaWtlOjAsXG4gICAgICAgICAgZGlzbGlrZTowLFxuICAgICAgICAgIHRyYWNrVm90ZXM6W11cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVWYWx1ZSA9IHRoaXMudXBkYXRlVmFsdWUuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlVm90ZSA9IHRoaXMuaGFuZGxlVm90ZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy51cGRhdGVWb3RlID0gdGhpcy51cGRhdGVWb3RlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZVN1cGVyTGlrZSA9IHRoaXMuaGFuZGxlU3VwZXJMaWtlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnN0YXJzQ2xpY2sgPSB0aGlzLnN0YXJzQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe3ZhbHVlOmUudGFyZ2V0LnZhbHVlfSlcbiAgICAvLyBUaGUgc2hvcnRlciB3YXkgdG8gZG8gaXQuLi5cbiAgICAvLyBlID0+IHRoaXMucHJvcHMuc2V0UHJvcHMoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZX1cbiAgfVxuXG4gIHVwZGF0ZVZvdGUoY3VyclZvdGVIaXN0LCB2b3RlTmFtZSkge1xuICAgIC8vIFByZXZpb3VzIHZvdGVcbiAgICBjb25zdCBhbGxWb3RlcyA9IGN1cnJWb3RlSGlzdC50cmFja1ZvdGVzXG4gICAgdmFyIGFjdFZvdGUgPSB0aGlzLnByb3BzLmFjdGl2ZVZvdGU7IC8vIGluc3RhbnRpYXRlIHRoZSBpdGVtXG5cbiAgICBpZiAoYWxsVm90ZXMubGVuZ3RoPDIpIHtcbiAgICAgIC8vIElmIGZpcnN0IHZvdGUsIHZvdGUgaXMgY3VyclxuICAgICAgYWN0Vm90ZSA9IHZvdGVOYW1lXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zdCBwcmV2Vm90ZSA9IGFsbFZvdGVzW2FsbFZvdGVzLmxlbmd0aC0yXVxuXG4gICAgICBpZih2b3RlTmFtZT09PXByZXZWb3RlKXtcbiAgICAgICAgLypcbiAgICAgICAgSWYgdm90ZSAoY2xpY2spIGlzIHNhbWUgYXMgcHJldmlvdXMgKGNsaWNrKTpcbiAgICAgICAgICDigJMgaWYgdm90ZSBpcyB0aGUgc2FtZSBhcyBhY3RpdmVWb3RlIHdlIHNldCB2b3RlIHRvIG51bGxcbiAgICAgICAgICDigJMgaWYgdm90ZSBpcyBkaWZmIGZyb20gYWN0aXZlVm90ZSB3ZSBzZXQgdm90ZSB0byBjdXJyXG4gICAgICAgICovXG4gICAgICAgIGlmKGFjdFZvdGU9PT12b3RlTmFtZSl7XG4gICAgICAgICAgYWN0Vm90ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBhY3RWb3RlID0gdm90ZU5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgLy8gSWYgdm90ZSBpcyBkaWZmIGZyb20gcHJldmlvdXMsIHZvdGUgaXMgY3VyclxuICAgICAgICBhY3RWb3RlID0gdm90ZU5hbWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIHZhbHVlc1xuICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe2FjdGl2ZVZvdGU6YWN0Vm90ZX0pXG4gIH1cblxuXG4gIC8vIE5leHQgaGFuZGxlclxuICBoYW5kbGVWb3RlKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIC8vIGlmICghZS50YXJnZXQubmFtZSl7ZT1lLnRhcmdldC5wYXJlbnRFbGVtZW50fVxuICAgIC8vIHZhciB2b3RlTmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIilcbiAgICAvLyBpZighdm90ZU5hbWUpe3ZvdGVOYW1lID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwibGFiZWxcIil9XG4gICAgLy8gaWYoIXZvdGVOYW1lKXt2b3RlTmFtZSA9IGUudGFyZ2V0Lm5hbWV9XG4gICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHByb3BlciB2YWx1ZXNcbiAgICBjb25zdCB2b3RlTmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInZvdGVuYW1lXCIpO1xuICAgIGNvbnN0IGN1cnJWb3RlSGlzdCA9IHRoaXMuc3RhdGUudm90ZUhpc3Rvcnk7XG4gICAgY3VyclZvdGVIaXN0W3ZvdGVOYW1lXSs9MVxuICAgIGN1cnJWb3RlSGlzdC50cmFja1ZvdGVzLnB1c2godm90ZU5hbWUpXG5cbiAgICAvLyBVcGRhdGUgcHJvcHNcbiAgICB0aGlzLnByb3BzLnNldFByb3BzKHt2b3RlSGlzdG9yeTpjdXJyVm90ZUhpc3R9KVxuXG4gICAgLy8gQ2FsbCB0aGUgbmV4dCBmdW5jdGlvblxuICAgIHRoaXMudXBkYXRlVm90ZShjdXJyVm90ZUhpc3Qsdm90ZU5hbWUpXG4gIH1cblxuICBoYW5kbGVTdXBlckxpa2UoZSl7XG4gICAgY29uc3QgY3VyclZvdGVIaXN0ID0gdGhpcy5zdGF0ZS52b3RlSGlzdG9yeTtcbiAgICBjdXJyVm90ZUhpc3RbJ3N1cGVybGlrZSddICs9IDE7XG4gICAgY3VyclZvdGVIaXN0LnRyYWNrVm90ZXMucHVzaCgnc3VwZXJsaWtlJyk7XG4gICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7dm90ZUhpc3Rvcnk6Y3VyclZvdGVIaXN0fSlcbiAgICB0aGlzLnVwZGF0ZVZvdGUoY3VyclZvdGVIaXN0LCAnc3VwZXJsaWtlJyk7XG4gIH1cblxuICBzdGFyc0NsaWNrKGUpe1xuICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkID09PSAnc3VwZXJsaWtlLWljb25idXR0b24taWQnKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ2hlbGxvJyk7XG4gICAgfVxuICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpZCwgbGFiZWwsIHNldFByb3BzLHZvdGVIaXN0b3J5LCBhY3RpdmVWb3RlLCB2YWx1ZSwgY29udGVudCwgbWV0YWRhdGF9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBTZXQgdGhlIHZhbHVlcyBvZiBlYWNoIGJ1dHRvblxuICAgICAgICBjb25zdCBjbGFzc05hbWVDaG9pY2VzID0ge1xuICAgICAgICAgIFwic3VwZXJsaWtlXCI6ZmFsc2UsXG4gICAgICAgICAgXCJsaWtlXCI6ZmFsc2UsXG4gICAgICAgICAgXCJkaXNsaWtlXCI6ZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIGNsYXNzTmFtZUNob2ljZXNbYWN0aXZlVm90ZV0gPXRydWU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9e2lkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdm90ZS1jYXJkYH1cbiAgICAgICAgICAgIGFjdGl2ZXZvdGU9e2Ake2FjdGl2ZVZvdGV9YH1cbiAgICAgICAgICAgIG1ldGFkYXRhPXtcIlwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZWNhcmQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInN1cGVybGlrZVwiXG4gICAgICAgICAgICAgICAgICAgIHZvdGVuYW1lPVwic3VwZXJsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5zdXBlcmxpa2V9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdXBlckxpa2V9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICBpZD0nc3VwZXJsaWtlLWljb25idXR0b24taWQnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFN0YXJzSWNvbiB2b3RlbmFtZT1cInN1cGVybGlrZVwiIG9uQ2xpY2s9e3RoaXMuc3RhcnNDbGlja30vPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgdm90ZW5hbWU9XCJsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5saWtlfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRodW1iVXBBbHRPdXRsaW5lZEljb24gdm90ZW5hbWU9XCJsaWtlXCIvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJkaXNsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgdm90ZW5hbWU9XCJkaXNsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5kaXNsaWtlfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRodW1iRG93bkFsdE91dGxpbmVkSWNvbiB2b3RlbmFtZT1cImRpc2xpa2VcIi8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdXBlcmxpa2VcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ge2B2b3RlLXN1cGVybGlrZWB9XG4gICAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5zdXBlcmxpa2V9YH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVZvdGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBcIlNVUEVSTElLRVwiXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGlrZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSB7YHZvdGUtbGlrZWB9XG4gICAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5saWtlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVWb3RlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgXCJMSUtFXCJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzbGlrZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSB7YHZvdGUtZGlzbGlrZWB9XG4gICAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5kaXNsaWtlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVWb3RlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgXCJESVNMSUtFXCJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHA+Q3VycmVudCBWb3RlOiB7YWN0aXZlVm90ZX08L3A+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblZvdGVDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTpcIlwiLFxuICAgIGNvbnRlbnQ6XCJrZXl3b3JkIHN1Z2dlc3Rpb25cIixcbiAgICBtZXRhZGF0YTpcInsndHlwZSc6J2tleXdvcmQnfVwiLFxuICAgIGxhYmVsOlwiZGVmYXVsdC1sYWJlbFwiLFxuICAgIGFjdGl2ZVZvdGU6bnVsbCxcbiAgICB2b3RlSGlzdG9yeTp7XG4gICAgICBzdXBlcmxpa2U6MCwgLy8gY291bnRzIGFzIHBvc2l0aXZlIHZvdGUgYnV0IGlzIGEgc2VwZXJhdGUgZW50aXR5XG4gICAgICBsaWtlOjAsXG4gICAgICBkaXNsaWtlOjAsXG4gICAgICB0cmFja1ZvdGVzOltdXG4gICAgfSxcblxufVxuXG5cblZvdGVDYXJkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIHZvdGVjYXJkXG4gICAqL1xuICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBNZXRhZGF0YSBhYm91dCB0aGUgaXRlbSBpbiB0aGUgdm90ZWNhcmRcbiAgICovXG4gIG1ldGFkYXRhOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBBIGpzb25pZmllZCBkaWN0XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZvdGUgb2YgdGhlIG9iamVjdFxuICAgKi9cbiAgYWN0aXZlVm90ZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCdzdXBlcmxpa2UnLCdsaWtlJywgJ2Rpc2xpa2UnXSksXG4gIC8qKlxuICAgKiBUaGUgaGlzdG9yeSBvZiB0aGUgb2JqZWN0XG4gICAqL1xuICB2b3RlSGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgKi9cbiAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG59O1xuXG5cbi8vIEV4cG9ydCB0aGUgaXRlbVxuZXhwb3J0IGRlZmF1bHQgVm90ZUNhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9