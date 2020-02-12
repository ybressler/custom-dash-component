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
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/HighlightOff */ "./node_modules/@material-ui/icons/HighlightOff.js");
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ThumbUpAltOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ThumbUpAltOutlined */ "./node_modules/@material-ui/icons/ThumbUpAltOutlined.js");
/* harmony import */ var _material_ui_icons_ThumbUpAltOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ThumbUpAltOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ThumbDownAltOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ThumbDownAltOutlined */ "./node_modules/@material-ui/icons/ThumbDownAltOutlined.js");
/* harmony import */ var _material_ui_icons_ThumbDownAltOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ThumbDownAltOutlined__WEBPACK_IMPORTED_MODULE_8__);
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
      className: "vote-card",
      data: "",
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
    _this.updateVote = _this.updateVote.bind(_assertThisInitialized(_this)); // this.updateData = this.updateData.bind(this);

    return _this;
  } // updateData(currVoteHist, voteName){
  //   var currData = {"activeVote":voteName, "voteHistory":currVoteHist};
  //   this.props.setProps({data:JSON.stringify(currData)})
  //   console.log(this.state)
  // }


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


      var currData = {
        "activeVote": voteName,
        "voteHistory": currVoteHist
      };
      this.props.setProps({
        activeVote: actVote,
        data: JSON.stringify(currData)
      });
    } // Next handler

  }, {
    key: "handleVote",
    value: function handleVote(e) {
      e.preventDefault(); // console.log(event.target.getAttribute("isactive"))
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
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          className = _this$props.className,
          setProps = _this$props.setProps,
          voteHistory = _this$props.voteHistory,
          activeVote = _this$props.activeVote,
          value = _this$props.value,
          metadata = _this$props.metadata,
          data = _this$props.data; // Set the values of each button

      var classNameChoices = {
        "superlike": false,
        "like": false,
        "dislike": false
      };
      classNameChoices[activeVote] = true;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id,
        className: className,
        activevote: "".concat(activeVote),
        data: "".concat(data),
        metadata: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "votecard-value"
      }, value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
        "aria-label": "dislike",
        votename: "dislike",
        onClick: this.handleVote,
        isactive: "".concat(classNameChoices.dislike),
        component: "span"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ThumbDownAltOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, {
        votename: "dislike",
        className: "dislike-isactive-".concat(classNameChoices.dislike)
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
        "aria-label": "superlike",
        votename: "superlike",
        onClick: this.handleVote,
        isactive: "".concat(classNameChoices.superlike),
        component: "span"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_4___default.a // className="icon-superlike"
      , {
        className: "superlike-isactive-".concat(classNameChoices.superlike),
        votename: "superlike"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
        "aria-label": "like",
        onClick: this.handleVote,
        isactive: "".concat(classNameChoices.like),
        component: "span"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ThumbUpAltOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {
        votename: "like",
        className: "like-isactive-".concat(classNameChoices.like)
      })));
    }
  }]);

  return VoteCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

VoteCard.defaultProps = {
  value: "keyword suggestion",
  className: "vote-card",
  data: "",
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
   * The value displayed in the votecard
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The classname of the votecard
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
  * The stored data for the id.
  * This is where I'll store everything for now...
  */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

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
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
  * Dash-assigned callback that gets fired when the checkbox item gets selected.
  */
  fireEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}; // Export the item

/* harmony default export */ __webpack_exports__["default"] = (VoteCard);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3RlX2NhcmQvLi9zcmMvbGliL2NvbXBvbmVudHMvVm90ZUNhcmQucmVhY3QuanMiXSwibmFtZXMiOlsiVm90ZUNhcmQiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjbGFzc05hbWUiLCJkYXRhIiwiYWN0aXZlVm90ZSIsInZvdGVIaXN0b3J5Iiwic3VwZXJsaWtlIiwibGlrZSIsImRpc2xpa2UiLCJ0cmFja1ZvdGVzIiwiaGFuZGxlVm90ZSIsImJpbmQiLCJ1cGRhdGVWb3RlIiwiY3VyclZvdGVIaXN0Iiwidm90ZU5hbWUiLCJhbGxWb3RlcyIsImFjdFZvdGUiLCJsZW5ndGgiLCJwcmV2Vm90ZSIsImN1cnJEYXRhIiwic2V0UHJvcHMiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwicHVzaCIsImlkIiwibGFiZWwiLCJtZXRhZGF0YSIsImNsYXNzTmFtZUNob2ljZXMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25lT2YiLCJvYmplY3QiLCJjaGlsZHJlbiIsIm5vZGUiLCJmdW5jIiwiZmlyZUV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBSUE7O0lBSU1BLFE7Ozs7O0FBRUo7QUFDQSxvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixrRkFBTUEsS0FBTjtBQUNFLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLLEVBQUMsRUFESztBQUVYQyxlQUFTLEVBQUMsV0FGQztBQUdYQyxVQUFJLEVBQUMsRUFITTtBQUlYQyxnQkFBVSxFQUFDLElBSkE7QUFLWEMsaUJBQVcsRUFBQztBQUNWQyxpQkFB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bi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbi8vIGltcG9ydCB7IEljb25CdXR0b24sIENvbG9ycyB9IGZyb20gJ3JlYWN0LW5hdGl2ZS1wYXBlcic7XG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFN0YXJzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhcnMnO1xuaW1wb3J0IE5vdEludGVyZXN0ZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ob3RJbnRlcmVzdGVkJztcbmltcG9ydCBIaWdobGlnaHRPZmZJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IaWdobGlnaHRPZmYnO1xuaW1wb3J0IFRodW1iVXBBbHRPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RodW1iVXBBbHRPdXRsaW5lZCc7XG5pbXBvcnQgVGh1bWJEb3duQWx0T3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UaHVtYkRvd25BbHRPdXRsaW5lZCc7XG4vLyBDT05USU5VRSBGUk9NIEhFUkUgVE9NT1JST1c6XG4vLyBodHRwczovL2Rhc2gucGxvdC5seS9yZWFjdC1mb3ItcHl0aG9uLWRldmVsb3BlcnNcblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuY2xhc3MgVm90ZUNhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIC8vIFdoZW4gd2UgaW5pdGlhbGl6ZSwgd2UgYnVpbGQgbG9naWMgaW50byB0aGUgbGlrZSBhbmQgZGlzbGlrZSBjbGFzc2VzXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6XCJcIixcbiAgICAgICAgY2xhc3NOYW1lOlwidm90ZS1jYXJkXCIsXG4gICAgICAgIGRhdGE6XCJcIixcbiAgICAgICAgYWN0aXZlVm90ZTpudWxsLFxuICAgICAgICB2b3RlSGlzdG9yeTp7XG4gICAgICAgICAgc3VwZXJsaWtlOjAsIC8vIGNvdW50cyBhcyBwb3NpdGl2ZSB2b3RlIGJ1dCBpcyBhIHNlcGVyYXRlIGVudGl0eVxuICAgICAgICAgIGxpa2U6MCxcbiAgICAgICAgICBkaXNsaWtlOjAsXG4gICAgICAgICAgdHJhY2tWb3RlczpbXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZVZvdGUgPSB0aGlzLmhhbmRsZVZvdGUuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMudXBkYXRlVm90ZSA9IHRoaXMudXBkYXRlVm90ZS5iaW5kKHRoaXMpO1xuICAgICAgLy8gdGhpcy51cGRhdGVEYXRhID0gdGhpcy51cGRhdGVEYXRhLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyB1cGRhdGVEYXRhKGN1cnJWb3RlSGlzdCwgdm90ZU5hbWUpe1xuICAvLyAgIHZhciBjdXJyRGF0YSA9IHtcImFjdGl2ZVZvdGVcIjp2b3RlTmFtZSwgXCJ2b3RlSGlzdG9yeVwiOmN1cnJWb3RlSGlzdH07XG4gIC8vICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7ZGF0YTpKU09OLnN0cmluZ2lmeShjdXJyRGF0YSl9KVxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gIC8vIH1cblxuICB1cGRhdGVWb3RlKGN1cnJWb3RlSGlzdCwgdm90ZU5hbWUpIHtcbiAgICAvLyBQcmV2aW91cyB2b3RlXG4gICAgY29uc3QgYWxsVm90ZXMgPSBjdXJyVm90ZUhpc3QudHJhY2tWb3Rlc1xuICAgIHZhciBhY3RWb3RlID0gdGhpcy5wcm9wcy5hY3RpdmVWb3RlOyAvLyBpbnN0YW50aWF0ZSB0aGUgaXRlbVxuXG4gICAgaWYgKGFsbFZvdGVzLmxlbmd0aDwyKSB7XG4gICAgICAvLyBJZiBmaXJzdCB2b3RlLCB2b3RlIGlzIGN1cnJcbiAgICAgIGFjdFZvdGUgPSB2b3RlTmFtZVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgY29uc3QgcHJldlZvdGUgPSBhbGxWb3Rlc1thbGxWb3Rlcy5sZW5ndGgtMl1cblxuICAgICAgaWYodm90ZU5hbWU9PT1wcmV2Vm90ZSl7XG4gICAgICAgIC8qXG4gICAgICAgIElmIHZvdGUgKGNsaWNrKSBpcyBzYW1lIGFzIHByZXZpb3VzIChjbGljayk6XG4gICAgICAgICAg4oCTIGlmIHZvdGUgaXMgdGhlIHNhbWUgYXMgYWN0aXZlVm90ZSB3ZSBzZXQgdm90ZSB0byBudWxsXG4gICAgICAgICAg4oCTIGlmIHZvdGUgaXMgZGlmZiBmcm9tIGFjdGl2ZVZvdGUgd2Ugc2V0IHZvdGUgdG8gY3VyclxuICAgICAgICAqL1xuICAgICAgICBpZihhY3RWb3RlPT09dm90ZU5hbWUpe1xuICAgICAgICAgIGFjdFZvdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgYWN0Vm90ZSA9IHZvdGVOYW1lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIC8vIElmIHZvdGUgaXMgZGlmZiBmcm9tIHByZXZpb3VzLCB2b3RlIGlzIGN1cnJcbiAgICAgICAgYWN0Vm90ZSA9IHZvdGVOYW1lXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSB2YWx1ZXNcbiAgICB2YXIgY3VyckRhdGEgPSB7XCJhY3RpdmVWb3RlXCI6dm90ZU5hbWUsIFwidm90ZUhpc3RvcnlcIjpjdXJyVm90ZUhpc3QsfTtcbiAgICB0aGlzLnByb3BzLnNldFByb3BzKHthY3RpdmVWb3RlOmFjdFZvdGUsIGRhdGE6SlNPTi5zdHJpbmdpZnkoY3VyckRhdGEpfSlcbiAgfVxuXG5cbiAgLy8gTmV4dCBoYW5kbGVyXG4gIGhhbmRsZVZvdGUoZSl7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpc2FjdGl2ZVwiKSlcblxuICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgd2l0aCBwcm9wZXIgdmFsdWVzXG4gICAgY29uc3Qgdm90ZU5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2b3RlbmFtZVwiKTtcbiAgICBjb25zdCBjdXJyVm90ZUhpc3QgPSB0aGlzLnN0YXRlLnZvdGVIaXN0b3J5O1xuICAgIGN1cnJWb3RlSGlzdFt2b3RlTmFtZV0rPTFcbiAgICBjdXJyVm90ZUhpc3QudHJhY2tWb3Rlcy5wdXNoKHZvdGVOYW1lKVxuXG4gICAgLy8gVXBkYXRlIHByb3BzXG4gICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7dm90ZUhpc3Rvcnk6Y3VyclZvdGVIaXN0fSlcblxuICAgIC8vIENhbGwgdGhlIG5leHQgZnVuY3Rpb25cbiAgICB0aGlzLnVwZGF0ZVZvdGUoY3VyclZvdGVIaXN0LHZvdGVOYW1lKVxuICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2lkLCBsYWJlbCwgY2xhc3NOYW1lLCBzZXRQcm9wcyx2b3RlSGlzdG9yeSwgYWN0aXZlVm90ZSwgdmFsdWUsIG1ldGFkYXRhLCBkYXRhfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgLy8gU2V0IHRoZSB2YWx1ZXMgb2YgZWFjaCBidXR0b25cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lQ2hvaWNlcyA9IHtcbiAgICAgICAgICBcInN1cGVybGlrZVwiOmZhbHNlLFxuICAgICAgICAgIFwibGlrZVwiOmZhbHNlLFxuICAgICAgICAgIFwiZGlzbGlrZVwiOmZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBjbGFzc05hbWVDaG9pY2VzW2FjdGl2ZVZvdGVdID10cnVlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXtpZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgYWN0aXZldm90ZT17YCR7YWN0aXZlVm90ZX1gfVxuICAgICAgICAgICAgZGF0YT17YCR7ZGF0YX1gfVxuICAgICAgICAgICAgbWV0YWRhdGE9e1wiXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3RlY2FyZC12YWx1ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJkaXNsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgdm90ZW5hbWU9XCJkaXNsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVWb3RlfVxuICAgICAgICAgICAgICAgICAgICBpc2FjdGl2ZSA9IHtgJHtjbGFzc05hbWVDaG9pY2VzLmRpc2xpa2V9YH1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRodW1iRG93bkFsdE91dGxpbmVkSWNvblxuICAgICAgICAgICAgICAgICAgICAgIHZvdGVuYW1lPVwiZGlzbGlrZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZGlzbGlrZS1pc2FjdGl2ZS0ke2NsYXNzTmFtZUNob2ljZXMuZGlzbGlrZX1gfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuXG5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic3VwZXJsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgdm90ZW5hbWU9XCJzdXBlcmxpa2VcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVZvdGV9XG4gICAgICAgICAgICAgICAgICAgIGlzYWN0aXZlID0ge2Ake2NsYXNzTmFtZUNob2ljZXMuc3VwZXJsaWtlfWB9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFyc0ljb25cbiAgICAgICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJpY29uLXN1cGVybGlrZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc3VwZXJsaWtlLWlzYWN0aXZlLSR7Y2xhc3NOYW1lQ2hvaWNlcy5zdXBlcmxpa2V9YH1cbiAgICAgICAgICAgICAgICAgICAgICB2b3RlbmFtZT1cInN1cGVybGlrZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuXG5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGlrZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5saWtlfWB9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYlVwQWx0T3V0bGluZWRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgdm90ZW5hbWU9XCJsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BsaWtlLWlzYWN0aXZlLSR7Y2xhc3NOYW1lQ2hvaWNlcy5saWtlfWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5Wb3RlQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6XCJrZXl3b3JkIHN1Z2dlc3Rpb25cIixcbiAgICBjbGFzc05hbWU6XCJ2b3RlLWNhcmRcIixcbiAgICBkYXRhOlwiXCIsXG4gICAgbWV0YWRhdGE6XCJ7J3R5cGUnOidrZXl3b3JkJ31cIixcbiAgICBsYWJlbDpcImRlZmF1bHQtbGFiZWxcIixcbiAgICBhY3RpdmVWb3RlOm51bGwsXG4gICAgdm90ZUhpc3Rvcnk6e1xuICAgICAgc3VwZXJsaWtlOjAsIC8vIGNvdW50cyBhcyBwb3NpdGl2ZSB2b3RlIGJ1dCBpcyBhIHNlcGVyYXRlIGVudGl0eVxuICAgICAgbGlrZTowLFxuICAgICAgZGlzbGlrZTowLFxuICAgICAgdHJhY2tWb3RlczpbXVxuICAgIH0sXG5cbn1cblxuXG5Wb3RlQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSB2b3RlY2FyZFxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjbGFzc25hbWUgb2YgdGhlIHZvdGVjYXJkXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICogVGhlIHN0b3JlZCBkYXRhIGZvciB0aGUgaWQuXG4gICogVGhpcyBpcyB3aGVyZSBJJ2xsIHN0b3JlIGV2ZXJ5dGhpbmcgZm9yIG5vdy4uLlxuICAqL1xuICBkYXRhOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBNZXRhZGF0YSBhYm91dCB0aGUgaXRlbSBpbiB0aGUgdm90ZWNhcmRcbiAgICovXG4gIG1ldGFkYXRhOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBBIGpzb25pZmllZCBkaWN0XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZvdGUgb2YgdGhlIG9iamVjdFxuICAgKi9cbiAgYWN0aXZlVm90ZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCdzdXBlcmxpa2UnLCdsaWtlJywgJ2Rpc2xpa2UnXSksXG5cbiAgLyoqXG4gICAqIFRoZSBoaXN0b3J5IG9mIHRoZSBvYmplY3RcbiAgICovXG4gIHZvdGVIaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0LFxuXG5cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgKi9cbiAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBnZXRzIGZpcmVkIHdoZW4gdGhlIGNoZWNrYm94IGl0ZW0gZ2V0cyBzZWxlY3RlZC5cbiAgKi9cbiAgZmlyZUV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcblxufTtcblxuXG4vLyBFeHBvcnQgdGhlIGl0ZW1cbmV4cG9ydCBkZWZhdWx0IFZvdGVDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==