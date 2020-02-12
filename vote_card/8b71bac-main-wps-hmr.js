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
      e.preventDefault();
      console.log(e.target); // if (!e.target.name){e=e.target.parentElement}
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
        console.log(e.target.parentElement);
      }
    }
  }, {
    key: "wrappedSuperlikeIcon",
    value: function wrappedSuperlikeIcon() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        votename: "superlike",
        onClick: this.starsClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_4___default.a, null));
    }
  }, {
    key: "wrappedLikeIcon",
    value: function wrappedLikeIcon() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        votename: "like",
        onClick: this.starsClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ThumbUpAltOutlined__WEBPACK_IMPORTED_MODULE_6___default.a, null));
    }
  }, {
    key: "wrappedDislikeIcon",
    value: function wrappedDislikeIcon() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        votename: "dislike",
        onClick: this.starsClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ThumbDownAltOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, null));
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
        onClick: this.handleVote,
        isactive: "".concat(classNameChoices.superlike),
        component: "span"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_4___default.a, {
        votename: "superlike"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
        "aria-label": "like",
        votename: "like",
        onClick: this.handleVote,
        isactive: "".concat(classNameChoices.like),
        component: "span"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ThumbUpAltOutlined__WEBPACK_IMPORTED_MODULE_6___default.a, {
        votename: "like"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
        "aria-label": "dislike",
        votename: "dislike",
        onClick: this.handleVote,
        isactive: "".concat(classNameChoices.dislike),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3RlX2NhcmQvLi9zcmMvbGliL2NvbXBvbmVudHMvVm90ZUNhcmQucmVhY3QuanMiXSwibmFtZXMiOlsiVm90ZUNhcmQiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjb250ZW50IiwiYWN0aXZlVm90ZSIsInZvdGVIaXN0b3J5Iiwic3VwZXJsaWtlIiwibGlrZSIsImRpc2xpa2UiLCJ0cmFja1ZvdGVzIiwidXBkYXRlVmFsdWUiLCJiaW5kIiwiaGFuZGxlVm90ZSIsInVwZGF0ZVZvdGUiLCJoYW5kbGVTdXBlckxpa2UiLCJzdGFyc0NsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0UHJvcHMiLCJ0YXJnZXQiLCJjdXJyVm90ZUhpc3QiLCJ2b3RlTmFtZSIsImFsbFZvdGVzIiwiYWN0Vm90ZSIsImxlbmd0aCIsInByZXZWb3RlIiwiY29uc29sZSIsImxvZyIsImdldEF0dHJpYnV0ZSIsInB1c2giLCJwYXJlbnRFbGVtZW50IiwiaWQiLCJsYWJlbCIsIm1ldGFkYXRhIiwiY2xhc3NOYW1lQ2hvaWNlcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUlBOztJQUVNQSxROzs7OztBQUVKO0FBQ0Esb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsa0ZBQU1BLEtBQU47QUFDRSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSyxFQUFDLEVBREs7QUFFWEMsYUFBTyxFQUFDLEVBRkc7QUFHWEMsZ0JBQVUsRUFBQyxJQUhBO0FBSVhDLGlCQUFXLEVBQUM7QUFDVkMsaUJBQVMsRUFBQyxDQURBO0FBQ0c7QUFDYkMsWUFBSSxFQUFDLENBRks7QUFHVkMsZUFBTyxFQUFDLENBSEU7QUFJVkMsa0JBQVUsRUFBQztBQUpEO0FBSkQsS0FBYjtBQVdBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsK0JBQW5CO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRCxJQUFoQiwrQkFBbEI7QUFDQSxVQUFLRSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JGLElBQWhCLCtCQUFsQjtBQUNBLFVBQUtHLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkgsSUFBckIsK0JBQXZCO0FBQ0EsVUFBS0ksVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCSixJQUFoQiwrQkFBbEI7QUFqQmU7QUFrQmxCOzs7O2dDQUVXSyxDLEVBQUU7QUFDWkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsV0FBS2pCLEtBQUwsQ0FBV2tCLFFBQVgsQ0FBb0I7QUFBQ2hCLGFBQUssRUFBQ2MsQ0FBQyxDQUFDRyxNQUFGLENBQVNqQjtBQUFoQixPQUFwQixFQUZZLENBR1o7QUFDQTtBQUNEOzs7K0JBRVVrQixZLEVBQWNDLFEsRUFBVTtBQUNqQztBQUNBLFVBQU1DLFFBQVEsR0FBR0YsWUFBWSxDQUFDWCxVQUE5QjtBQUNBLFVBQUljLE9BQU8sR0FBRyxLQUFLdkIsS0FBTCxDQUFXSSxVQUF6QixDQUhpQyxDQUdJOztBQUVyQyxVQUFJa0IsUUFBUSxDQUFDRSxNQUFULEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCO0FBQ0FELGVBQU8sR0FBR0YsUUFBVjtBQUNELE9BSEQsTUFJSTtBQUNGLFlBQU1JLFFBQVEsR0FBR0gsUUFBUSxDQUFDQSxRQUFRLENBQUNFLE1BQVQsR0FBZ0IsQ0FBakIsQ0FBekI7O0FBRUEsWUFBR0gsUUFBUSxLQUFHSSxRQUFkLEVBQXVCO0FBQ3JCOzs7OztBQUtBLGNBQUdGLE9BQU8sS0FBR0YsUUFBYixFQUFzQjtBQUNwQkUsbUJBQU8sR0FBRyxJQUFWO0FBQ0QsV0FGRCxNQUdJO0FBQ0ZBLG1CQUFPLEdBQUdGLFFBQVY7QUFDRDtBQUNGLFNBWkQsTUFhSTtBQUNGO0FBQ0FFLGlCQUFPLEdBQUdGLFFBQVY7QUFDRDtBQUNGLE9BN0JnQyxDQStCakM7OztBQUNBLFdBQUtyQixLQUFMLENBQVdrQixRQUFYLENBQW9CO0FBQUNkLGtCQUFVLEVBQUNtQjtBQUFaLE9BQXBCO0FBQ0QsSyxDQUdEOzs7OytCQUNXUCxDLEVBQUU7QUFDWEEsT0FBQyxDQUFDQyxjQUFGO0FBRUFTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWCxDQUFDLENBQUNHLE1BQWQsRUFIVyxDQUlYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsVUFBTUUsUUFBUSxHQUFHTCxDQUFDLENBQUNHLE1BQUYsQ0FBU1MsWUFBVCxDQUFzQixVQUF0QixDQUFqQjtBQUNBLFVBQU1SLFlBQVksR0FBRyxLQUFLbkIsS0FBTCxDQUFXSSxXQUFoQztBQUNBZSxrQkFBWSxDQUFDQyxRQUFELENBQVosSUFBd0IsQ0FBeEI7QUFDQUQsa0JBQVksQ0FBQ1gsVUFBYixDQUF3Qm9CLElBQXhCLENBQTZCUixRQUE3QixFQVpXLENBY1g7O0FBQ0EsV0FBS3JCLEtBQUwsQ0FBV2tCLFFBQVgsQ0FBb0I7QUFBQ2IsbUJBQVcsRUFBQ2U7QUFBYixPQUFwQixFQWZXLENBaUJYOztBQUNBLFdBQUtQLFVBQUwsQ0FBZ0JPLFlBQWhCLEVBQTZCQyxRQUE3QjtBQUNEOzs7b0NBRWVMLEMsRUFBRTtBQUNoQixVQUFNSSxZQUFZLEdBQUcsS0FBS25CLEtBQUwsQ0FBV0ksV0FBaEM7QUFDQWUsa0JBQVksQ0FBQyxXQUFELENBQVosSUFBNkIsQ0FBN0I7QUFDQUEsa0JBQVksQ0FBQ1gsVUFBYixDQUF3Qm9CLElBQXhCLENBQTZCLFdBQTdCO0FBQ0EsV0FBSzdCLEtBQUwsQ0FBV2tCLFFBQVgsQ0FBb0I7QUFBQ2IsbUJBQVcsRUFBQ2U7QUFBYixPQUFwQjtBQUNBLFdBQUtQLFVBQUwsQ0FBZ0JPLFlBQWhCLEVBQThCLFdBQTlCO0FBQ0Q7OzsrQkFFVUosQyxFQUFFO0FBQ1gsVUFBSUEsQ0FBQyxDQUFDRyxNQUFGLENBQVNXLGFBQVQsQ0FBdUJDLEVBQXZCLEtBQThCLHlCQUFsQyxFQUE2RDtBQUMzREwsZUFBTyxDQUFDQyxHQUFSLENBQVlYLENBQUMsQ0FBQ0csTUFBRixDQUFTVyxhQUFyQjtBQUNEO0FBQ0Y7OzsyQ0FFc0I7QUFDakIsYUFDQTtBQUFLLGdCQUFRLEVBQUMsV0FBZDtBQUEwQixlQUFPLEVBQUUsS0FBS2Y7QUFBeEMsU0FDQSwyREFBQywrREFBRCxPQURBLENBREE7QUFNTDs7O3NDQUVpQjtBQUNaLGFBQ0E7QUFBSyxnQkFBUSxFQUFDLE1BQWQ7QUFBcUIsZUFBTyxFQUFFLEtBQUtBO0FBQW5DLFNBQ0EsMkRBQUMsNEVBQUQsT0FEQSxDQURBO0FBTUw7Ozt5Q0FFb0I7QUFDZixhQUNBO0FBQUssZ0JBQVEsRUFBQyxTQUFkO0FBQXdCLGVBQU8sRUFBRSxLQUFLQTtBQUF0QyxTQUNBLDJEQUFDLDhFQUFELE9BREEsQ0FEQTtBQU1MOzs7NkJBR1U7QUFBQSx3QkFDMkUsS0FBS2YsS0FEaEY7QUFBQSxVQUNFK0IsRUFERixlQUNFQSxFQURGO0FBQUEsVUFDTUMsS0FETixlQUNNQSxLQUROO0FBQUEsVUFDYWQsUUFEYixlQUNhQSxRQURiO0FBQUEsVUFDc0JiLFdBRHRCLGVBQ3NCQSxXQUR0QjtBQUFBLFVBQ21DRCxVQURuQyxlQUNtQ0EsVUFEbkM7QUFBQSxVQUMrQ0YsS0FEL0MsZUFDK0NBLEtBRC9DO0FBQUEsVUFDc0RDLE9BRHRELGVBQ3NEQSxPQUR0RDtBQUFBLFVBQytEOEIsUUFEL0QsZUFDK0RBLFFBRC9ELEVBR0w7O0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUc7QUFDdkIscUJBQVksS0FEVztBQUV2QixnQkFBTyxLQUZnQjtBQUd2QixtQkFBVTtBQUhhLE9BQXpCO0FBS0FBLHNCQUFnQixDQUFDOUIsVUFBRCxDQUFoQixHQUE4QixJQUE5QjtBQUVBLGFBQ0k7QUFBSyxVQUFFLEVBQUUyQixFQUFUO0FBQ0EsaUJBQVMsYUFEVDtBQUVBLGtCQUFVLFlBQUszQixVQUFMLENBRlY7QUFHQSxnQkFBUSxFQUFFO0FBSFYsU0FLSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVDRCxPQUZELENBTEosRUFXSSwyREFBQyw0REFBRDtBQUNJLHNCQUFXLFdBRGY7QUFFSSxnQkFBUSxFQUFDLFdBRmI7QUFHSSxlQUFPLEVBQUUsS0FBS1MsVUFIbEI7QUFJSSxnQkFBUSxZQUFPc0IsZ0JBQWdCLENBQUM1QixTQUF4QixDQUpaO0FBS0ksaUJBQVMsRUFBQztBQUxkLFNBT0ksMkRBQUMsK0RBQUQ7QUFBVyxnQkFBUSxFQUFDO0FBQXBCLFFBUEosQ0FYSixFQXNCSSwyREFBQyw0REFBRDtBQUNJLHNCQUFXLE1BRGY7QUFFSSxnQkFBUSxFQUFDLE1BRmI7QUFHSSxlQUFPLEVBQUUsS0FBS00sVUFIbEI7QUFJSSxnQkFBUSxZQUFPc0IsZ0JBQWdCLENBQUMzQixJQUF4QixDQUpaO0FBS0ksaUJBQVMsRUFBQztBQUxkLFNBT0ksMkRBQUMsNEVBQUQ7QUFBd0IsZ0JBQVEsRUFBQztBQUFqQyxRQVBKLENBdEJKLEVBaUNJLDJEQUFDLDREQUFEO0FBQ0ksc0JBQVcsU0FEZjtBQUVJLGdCQUFRLEVBQUMsU0FGYjtBQUdJLGVBQU8sRUFBRSxLQUFLSyxVQUhsQjtBQUlJLGdCQUFRLFlBQU9zQixnQkFBZ0IsQ0FBQzFCLE9BQXhCLENBSlo7QUFLSSxpQkFBUyxFQUFDO0FBTGQsU0FPSSwyREFBQyw4RUFBRDtBQUEwQixnQkFBUSxFQUFDO0FBQW5DLFFBUEosQ0FqQ0osRUEyQ0ksd0VBQ0k7QUFDRSxZQUFJLEVBQUMsV0FEUDtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsaUJBQVMsa0JBSFg7QUFJRSxnQkFBUSxZQUFPMEIsZ0JBQWdCLENBQUM1QixTQUF4QixDQUpWO0FBS0UsZUFBTyxFQUFFLEtBQUtNO0FBTGhCLHlCQURKLEVBV0k7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsaUJBQVMsYUFIWDtBQUlFLGdCQUFRLFlBQU9zQixnQkFBZ0IsQ0FBQzNCLElBQXhCLENBSlY7QUFLRSxlQUFPLEVBQUUsS0FBS0s7QUFMaEIsb0JBWEosRUFvQkk7QUFDRSxZQUFJLEVBQUMsU0FEUDtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsaUJBQVMsZ0JBSFg7QUFJRSxnQkFBUSxZQUFPc0IsZ0JBQWdCLENBQUMxQixPQUF4QixDQUpWO0FBS0UsZUFBTyxFQUFFLEtBQUtJO0FBTGhCLHVCQXBCSixDQTNDSixFQTBFRSx3RkFBa0JSLFVBQWxCLENBMUVGLENBREo7QUFnRkg7Ozs7RUE3TmtCK0IsK0M7O0FBaU92QnBDLFFBQVEsQ0FBQ3FDLFlBQVQsR0FBd0I7QUFDcEJsQyxPQUFLLEVBQUMsRUFEYztBQUVwQkMsU0FBTyxFQUFDLG9CQUZZO0FBR3BCOEIsVUFBUSxFQUFDLG9CQUhXO0FBSXBCRCxPQUFLLEVBQUMsZUFKYztBQUtwQjVCLFlBQVUsRUFBQyxJQUxTO0FBTXBCQyxhQUFXLEVBQUM7QUFDVkMsYUFBUyxFQUFDLENBREE7QUFDRztBQUNiQyxRQUFJLEVBQUMsQ0FGSztBQUdWQyxXQUFPLEVBQUMsQ0FIRTtBQUlWQyxjQUFVLEVBQUM7QUFKRDtBQU5RLENBQXhCO0FBZ0JBVixRQUFRLENBQUNzQyxTQUFULEdBQXFCO0FBQ25COzs7QUFHQU4sSUFBRSxFQUFFTyxpREFBUyxDQUFDQyxNQUpLOztBQU1uQjs7O0FBR0FQLE9BQUssRUFBRU0saURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFUTDs7QUFXbkI7OztBQUdBdEMsT0FBSyxFQUFFb0MsaURBQVMsQ0FBQ0MsTUFkRTs7QUFnQm5COzs7QUFHQXBDLFNBQU8sRUFBRW1DLGlEQUFTLENBQUNDLE1BbkJBOztBQXFCbkI7OztBQUdBTixVQUFRLEVBQUVLLGlEQUFTLENBQUNDLE1BeEJEO0FBd0JTOztBQUU1Qjs7O0FBR0FuQyxZQUFVLEVBQUVrQyxpREFBUyxDQUFDRyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFNLFdBQU4sRUFBa0IsTUFBbEIsRUFBMEIsU0FBMUIsQ0FBaEIsQ0E3Qk87O0FBOEJuQjs7O0FBR0FwQyxhQUFXLEVBQUVpQyxpREFBUyxDQUFDSSxNQWpDSjs7QUFtQ25COzs7O0FBSUF4QixVQUFRLEVBQUVvQixpREFBUyxDQUFDSztBQXZDRCxDQUFyQixDLENBNENBOztBQUNlNUMsdUVBQWYsRSIsImZpbGUiOiI4YjcxYmFjLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG4vLyBpbXBvcnQgeyBJY29uQnV0dG9uLCBDb2xvcnMgfSBmcm9tICdyZWFjdC1uYXRpdmUtcGFwZXInO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBTdGFyc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJzJztcbmltcG9ydCBOb3RJbnRlcmVzdGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTm90SW50ZXJlc3RlZCc7XG5pbXBvcnQgVGh1bWJVcEFsdE91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVGh1bWJVcEFsdE91dGxpbmVkJztcbmltcG9ydCBUaHVtYkRvd25BbHRPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RodW1iRG93bkFsdE91dGxpbmVkJztcbi8vIENPTlRJTlVFIEZST00gSEVSRSBUT01PUlJPVzpcbi8vIGh0dHBzOi8vZGFzaC5wbG90Lmx5L3JlYWN0LWZvci1weXRob24tZGV2ZWxvcGVyc1xuXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNsYXNzIFZvdGVDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvLyBXaGVuIHdlIGluaXRpYWxpemUsIHdlIGJ1aWxkIGxvZ2ljIGludG8gdGhlIGxpa2UgYW5kIGRpc2xpa2UgY2xhc3Nlc1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHZhbHVlOlwiXCIsXG4gICAgICAgIGNvbnRlbnQ6XCJcIixcbiAgICAgICAgYWN0aXZlVm90ZTpudWxsLFxuICAgICAgICB2b3RlSGlzdG9yeTp7XG4gICAgICAgICAgc3VwZXJsaWtlOjAsIC8vIGNvdW50cyBhcyBwb3NpdGl2ZSB2b3RlIGJ1dCBpcyBhIHNlcGVyYXRlIGVudGl0eVxuICAgICAgICAgIGxpa2U6MCxcbiAgICAgICAgICBkaXNsaWtlOjAsXG4gICAgICAgICAgdHJhY2tWb3RlczpbXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlID0gdGhpcy51cGRhdGVWYWx1ZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVWb3RlID0gdGhpcy5oYW5kbGVWb3RlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnVwZGF0ZVZvdGUgPSB0aGlzLnVwZGF0ZVZvdGUuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlU3VwZXJMaWtlID0gdGhpcy5oYW5kbGVTdXBlckxpa2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuc3RhcnNDbGljayA9IHRoaXMuc3RhcnNDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlVmFsdWUoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7dmFsdWU6ZS50YXJnZXQudmFsdWV9KVxuICAgIC8vIFRoZSBzaG9ydGVyIHdheSB0byBkbyBpdC4uLlxuICAgIC8vIGUgPT4gdGhpcy5wcm9wcy5zZXRQcm9wcyh7dmFsdWU6IGUudGFyZ2V0LnZhbHVlfVxuICB9XG5cbiAgdXBkYXRlVm90ZShjdXJyVm90ZUhpc3QsIHZvdGVOYW1lKSB7XG4gICAgLy8gUHJldmlvdXMgdm90ZVxuICAgIGNvbnN0IGFsbFZvdGVzID0gY3VyclZvdGVIaXN0LnRyYWNrVm90ZXNcbiAgICB2YXIgYWN0Vm90ZSA9IHRoaXMucHJvcHMuYWN0aXZlVm90ZTsgLy8gaW5zdGFudGlhdGUgdGhlIGl0ZW1cblxuICAgIGlmIChhbGxWb3Rlcy5sZW5ndGg8Mikge1xuICAgICAgLy8gSWYgZmlyc3Qgdm90ZSwgdm90ZSBpcyBjdXJyXG4gICAgICBhY3RWb3RlID0gdm90ZU5hbWVcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGNvbnN0IHByZXZWb3RlID0gYWxsVm90ZXNbYWxsVm90ZXMubGVuZ3RoLTJdXG5cbiAgICAgIGlmKHZvdGVOYW1lPT09cHJldlZvdGUpe1xuICAgICAgICAvKlxuICAgICAgICBJZiB2b3RlIChjbGljaykgaXMgc2FtZSBhcyBwcmV2aW91cyAoY2xpY2spOlxuICAgICAgICAgIOKAkyBpZiB2b3RlIGlzIHRoZSBzYW1lIGFzIGFjdGl2ZVZvdGUgd2Ugc2V0IHZvdGUgdG8gbnVsbFxuICAgICAgICAgIOKAkyBpZiB2b3RlIGlzIGRpZmYgZnJvbSBhY3RpdmVWb3RlIHdlIHNldCB2b3RlIHRvIGN1cnJcbiAgICAgICAgKi9cbiAgICAgICAgaWYoYWN0Vm90ZT09PXZvdGVOYW1lKXtcbiAgICAgICAgICBhY3RWb3RlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIGFjdFZvdGUgPSB2b3RlTmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICAvLyBJZiB2b3RlIGlzIGRpZmYgZnJvbSBwcmV2aW91cywgdm90ZSBpcyBjdXJyXG4gICAgICAgIGFjdFZvdGUgPSB2b3RlTmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCB0aGUgdmFsdWVzXG4gICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7YWN0aXZlVm90ZTphY3RWb3RlfSlcbiAgfVxuXG5cbiAgLy8gTmV4dCBoYW5kbGVyXG4gIGhhbmRsZVZvdGUoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAvLyBpZiAoIWUudGFyZ2V0Lm5hbWUpe2U9ZS50YXJnZXQucGFyZW50RWxlbWVudH1cbiAgICAvLyB2YXIgdm90ZU5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpXG4gICAgLy8gaWYoIXZvdGVOYW1lKXt2b3RlTmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImxhYmVsXCIpfVxuICAgIC8vIGlmKCF2b3RlTmFtZSl7dm90ZU5hbWUgPSBlLnRhcmdldC5uYW1lfVxuICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgd2l0aCBwcm9wZXIgdmFsdWVzXG4gICAgY29uc3Qgdm90ZU5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2b3RlbmFtZVwiKTtcbiAgICBjb25zdCBjdXJyVm90ZUhpc3QgPSB0aGlzLnN0YXRlLnZvdGVIaXN0b3J5O1xuICAgIGN1cnJWb3RlSGlzdFt2b3RlTmFtZV0rPTFcbiAgICBjdXJyVm90ZUhpc3QudHJhY2tWb3Rlcy5wdXNoKHZvdGVOYW1lKVxuXG4gICAgLy8gVXBkYXRlIHByb3BzXG4gICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7dm90ZUhpc3Rvcnk6Y3VyclZvdGVIaXN0fSlcblxuICAgIC8vIENhbGwgdGhlIG5leHQgZnVuY3Rpb25cbiAgICB0aGlzLnVwZGF0ZVZvdGUoY3VyclZvdGVIaXN0LHZvdGVOYW1lKVxuICB9XG5cbiAgaGFuZGxlU3VwZXJMaWtlKGUpe1xuICAgIGNvbnN0IGN1cnJWb3RlSGlzdCA9IHRoaXMuc3RhdGUudm90ZUhpc3Rvcnk7XG4gICAgY3VyclZvdGVIaXN0WydzdXBlcmxpa2UnXSArPSAxO1xuICAgIGN1cnJWb3RlSGlzdC50cmFja1ZvdGVzLnB1c2goJ3N1cGVybGlrZScpO1xuICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe3ZvdGVIaXN0b3J5OmN1cnJWb3RlSGlzdH0pXG4gICAgdGhpcy51cGRhdGVWb3RlKGN1cnJWb3RlSGlzdCwgJ3N1cGVybGlrZScpO1xuICB9XG5cbiAgc3RhcnNDbGljayhlKXtcbiAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCA9PT0gJ3N1cGVybGlrZS1pY29uYnV0dG9uLWlkJykge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgd3JhcHBlZFN1cGVybGlrZUljb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgdm90ZW5hbWU9XCJzdXBlcmxpa2VcIiBvbkNsaWNrPXt0aGlzLnN0YXJzQ2xpY2t9PlxuICAgICAgICA8U3RhcnNJY29uLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcblxuICB9XG5cbiAgd3JhcHBlZExpa2VJY29uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHZvdGVuYW1lPVwibGlrZVwiIG9uQ2xpY2s9e3RoaXMuc3RhcnNDbGlja30+XG4gICAgICAgIDxUaHVtYlVwQWx0T3V0bGluZWRJY29uLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcblxuICB9XG5cbiAgd3JhcHBlZERpc2xpa2VJY29uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHZvdGVuYW1lPVwiZGlzbGlrZVwiIG9uQ2xpY2s9e3RoaXMuc3RhcnNDbGlja30+XG4gICAgICAgIDxUaHVtYkRvd25BbHRPdXRsaW5lZEljb24vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuXG4gIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aWQsIGxhYmVsLCBzZXRQcm9wcyx2b3RlSGlzdG9yeSwgYWN0aXZlVm90ZSwgdmFsdWUsIGNvbnRlbnQsIG1ldGFkYXRhfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgLy8gU2V0IHRoZSB2YWx1ZXMgb2YgZWFjaCBidXR0b25cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lQ2hvaWNlcyA9IHtcbiAgICAgICAgICBcInN1cGVybGlrZVwiOmZhbHNlLFxuICAgICAgICAgIFwibGlrZVwiOmZhbHNlLFxuICAgICAgICAgIFwiZGlzbGlrZVwiOmZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBjbGFzc05hbWVDaG9pY2VzW2FjdGl2ZVZvdGVdID10cnVlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXtpZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHZvdGUtY2FyZGB9XG4gICAgICAgICAgICBhY3RpdmV2b3RlPXtgJHthY3RpdmVWb3RlfWB9XG4gICAgICAgICAgICBtZXRhZGF0YT17XCJcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGVjYXJkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInN1cGVybGlrZVwiXG4gICAgICAgICAgICAgICAgICAgIHZvdGVuYW1lPVwic3VwZXJsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVWb3RlfVxuICAgICAgICAgICAgICAgICAgICBpc2FjdGl2ZSA9IHtgJHtjbGFzc05hbWVDaG9pY2VzLnN1cGVybGlrZX1gfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U3RhcnNJY29uIHZvdGVuYW1lPVwic3VwZXJsaWtlXCIvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxpa2VcIlxuICAgICAgICAgICAgICAgICAgICB2b3RlbmFtZT1cImxpa2VcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVZvdGV9XG4gICAgICAgICAgICAgICAgICAgIGlzYWN0aXZlID0ge2Ake2NsYXNzTmFtZUNob2ljZXMubGlrZX1gfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VGh1bWJVcEFsdE91dGxpbmVkSWNvbiB2b3RlbmFtZT1cImxpa2VcIi8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuXG5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZGlzbGlrZVwiXG4gICAgICAgICAgICAgICAgICAgIHZvdGVuYW1lPVwiZGlzbGlrZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5kaXNsaWtlfWB9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYkRvd25BbHRPdXRsaW5lZEljb24gdm90ZW5hbWU9XCJkaXNsaWtlXCIvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VwZXJsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9IHtgdm90ZS1zdXBlcmxpa2VgfVxuICAgICAgICAgICAgICAgICAgICAgIGlzYWN0aXZlID0ge2Ake2NsYXNzTmFtZUNob2ljZXMuc3VwZXJsaWtlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVWb3RlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgXCJTVVBFUkxJS0VcIlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxpa2VcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ge2B2b3RlLWxpa2VgfVxuICAgICAgICAgICAgICAgICAgICAgIGlzYWN0aXZlID0ge2Ake2NsYXNzTmFtZUNob2ljZXMubGlrZX1gfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFwiTElLRVwiXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpc2xpa2VcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ge2B2b3RlLWRpc2xpa2VgfVxuICAgICAgICAgICAgICAgICAgICAgIGlzYWN0aXZlID0ge2Ake2NsYXNzTmFtZUNob2ljZXMuZGlzbGlrZX1gfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFwiRElTTElLRVwiXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwPkN1cnJlbnQgVm90ZToge2FjdGl2ZVZvdGV9PC9wPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5Wb3RlQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6XCJcIixcbiAgICBjb250ZW50Olwia2V5d29yZCBzdWdnZXN0aW9uXCIsXG4gICAgbWV0YWRhdGE6XCJ7J3R5cGUnOidrZXl3b3JkJ31cIixcbiAgICBsYWJlbDpcImRlZmF1bHQtbGFiZWxcIixcbiAgICBhY3RpdmVWb3RlOm51bGwsXG4gICAgdm90ZUhpc3Rvcnk6e1xuICAgICAgc3VwZXJsaWtlOjAsIC8vIGNvdW50cyBhcyBwb3NpdGl2ZSB2b3RlIGJ1dCBpcyBhIHNlcGVyYXRlIGVudGl0eVxuICAgICAgbGlrZTowLFxuICAgICAgZGlzbGlrZTowLFxuICAgICAgdHJhY2tWb3RlczpbXVxuICAgIH0sXG5cbn1cblxuXG5Wb3RlQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSB2b3RlY2FyZFxuICAgKi9cbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogTWV0YWRhdGEgYWJvdXQgdGhlIGl0ZW0gaW4gdGhlIHZvdGVjYXJkXG4gICAqL1xuICBtZXRhZGF0YTogUHJvcFR5cGVzLnN0cmluZywgLy8gQSBqc29uaWZpZWQgZGljdFxuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2b3RlIG9mIHRoZSBvYmplY3RcbiAgICovXG4gIGFjdGl2ZVZvdGU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwnc3VwZXJsaWtlJywnbGlrZScsICdkaXNsaWtlJ10pLFxuICAvKipcbiAgICogVGhlIGhpc3Rvcnkgb2YgdGhlIG9iamVjdFxuICAgKi9cbiAgdm90ZUhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICovXG4gIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxufTtcblxuXG4vLyBFeHBvcnQgdGhlIGl0ZW1cbmV4cG9ydCBkZWZhdWx0IFZvdGVDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==