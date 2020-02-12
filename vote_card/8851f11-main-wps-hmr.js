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
          metadata = _this$props.metadata; // Set the values of each button

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
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
  * Dash-assigned callback that gets fired when the checkbox item gets selected.
  */
  fireEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}; // Export the item

/* harmony default export */ __webpack_exports__["default"] = (VoteCard);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3RlX2NhcmQvLi9zcmMvbGliL2NvbXBvbmVudHMvVm90ZUNhcmQucmVhY3QuanMiXSwibmFtZXMiOlsiVm90ZUNhcmQiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjbGFzc05hbWUiLCJhY3RpdmVWb3RlIiwidm90ZUhpc3RvcnkiLCJzdXBlcmxpa2UiLCJsaWtlIiwiZGlzbGlrZSIsInRyYWNrVm90ZXMiLCJ1cGRhdGVWYWx1ZSIsImJpbmQiLCJoYW5kbGVWb3RlIiwidXBkYXRlVm90ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFByb3BzIiwidGFyZ2V0IiwiY3VyclZvdGVIaXN0Iiwidm90ZU5hbWUiLCJhbGxWb3RlcyIsImFjdFZvdGUiLCJsZW5ndGgiLCJwcmV2Vm90ZSIsImdldEF0dHJpYnV0ZSIsInB1c2giLCJpZCIsImxhYmVsIiwibWV0YWRhdGEiLCJjbGFzc05hbWVDaG9pY2VzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwib2JqZWN0IiwiZnVuYyIsImZpcmVFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUlBOztJQUlNQSxROzs7OztBQUVKO0FBQ0Esb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsa0ZBQU1BLEtBQU47QUFDRSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSyxFQUFDLEVBREs7QUFFWEMsZUFBUyxFQUFDLFdBRkM7QUFHWEMsZ0JBQVUsRUFBQyxJQUhBO0FBSVhDLGlCQUFXLEVBQUM7QUFDVkMsaUJBQVMsRUFBQyxDQURBO0FBQ0c7QUFDYkMsWUFBSSxFQUFDLENBRks7QUFHVkMsZUFBTyxFQUFDLENBSEU7QUFJ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SyxFQUFDLGVBSmM7QUFLcEJ2QixZQUFVLEVBQUMsSUFMUztBQU1wQkMsYUFBVyxFQUFDO0FBQ1ZDLGFBQVMsRUFBQyxDQURBO0FBQ0c7QUFDYkMsUUFBSSxFQUFDLENBRks7QUFHVkMsV0FBTyxFQUFDLENBSEU7QUFJVkMsY0FBVSxFQUFDO0FBSkQ7QUFOUSxDQUF4QjtBQWdCQVYsUUFBUSxDQUFDaUMsU0FBVCxHQUFxQjtBQUNuQjs7O0FBR0FOLElBQUUsRUFBRU8saURBQVMsQ0FBQ0MsTUFKSzs7QUFNbkI7OztBQUdBUCxPQUFLLEVBQUVNLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBVEw7O0FBV25COzs7QUFHQWpDLE9BQUssRUFBRStCLGlEQUFTLENBQUNDLE1BZEU7O0FBZ0JuQjs7O0FBR0EvQixXQUFTLEVBQUU4QixpREFBUyxDQUFDQyxNQW5CRjs7QUFxQm5COzs7QUFHQU4sVUFBUSxFQUFFSyxpREFBUyxDQUFDQyxNQXhCRDtBQXdCUzs7QUFFNUI7OztBQUdBOUIsWUFBVSxFQUFFNkIsaURBQVMsQ0FBQ0csS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTSxXQUFOLEVBQWtCLE1BQWxCLEVBQTBCLFNBQTFCLENBQWhCLENBN0JPOztBQStCbkI7OztBQUdBL0IsYUFBVyxFQUFFNEIsaURBQVMsQ0FBQ0ksTUFsQ0o7O0FBb0NuQjs7OztBQUlBckIsVUFBUSxFQUFFaUIsaURBQVMsQ0FBQ0ssSUF4Q0Q7O0FBMENuQjs7O0FBR0FDLFdBQVMsRUFBRU4saURBQVMsQ0FBQ0s7QUE3Q0YsQ0FBckIsQyxDQWtEQTs7QUFDZXZDLHVFQUFmLEUiLCJmaWxlIjoiODg1MWYxMS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuLy8gaW1wb3J0IHsgSWNvbkJ1dHRvbiwgQ29sb3JzIH0gZnJvbSAncmVhY3QtbmF0aXZlLXBhcGVyJztcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgU3RhcnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFycyc7XG5pbXBvcnQgTm90SW50ZXJlc3RlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdEludGVyZXN0ZWQnO1xuaW1wb3J0IEhpZ2hsaWdodE9mZkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hpZ2hsaWdodE9mZic7XG5pbXBvcnQgVGh1bWJVcEFsdE91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVGh1bWJVcEFsdE91dGxpbmVkJztcbmltcG9ydCBUaHVtYkRvd25BbHRPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RodW1iRG93bkFsdE91dGxpbmVkJztcbi8vIENPTlRJTlVFIEZST00gSEVSRSBUT01PUlJPVzpcbi8vIGh0dHBzOi8vZGFzaC5wbG90Lmx5L3JlYWN0LWZvci1weXRob24tZGV2ZWxvcGVyc1xuXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuXG5jbGFzcyBWb3RlQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgLy8gV2hlbiB3ZSBpbml0aWFsaXplLCB3ZSBidWlsZCBsb2dpYyBpbnRvIHRoZSBsaWtlIGFuZCBkaXNsaWtlIGNsYXNzZXNcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB2YWx1ZTpcIlwiLFxuICAgICAgICBjbGFzc05hbWU6XCJ2b3RlLWNhcmRcIixcbiAgICAgICAgYWN0aXZlVm90ZTpudWxsLFxuICAgICAgICB2b3RlSGlzdG9yeTp7XG4gICAgICAgICAgc3VwZXJsaWtlOjAsIC8vIGNvdW50cyBhcyBwb3NpdGl2ZSB2b3RlIGJ1dCBpcyBhIHNlcGVyYXRlIGVudGl0eVxuICAgICAgICAgIGxpa2U6MCxcbiAgICAgICAgICBkaXNsaWtlOjAsXG4gICAgICAgICAgdHJhY2tWb3RlczpbXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlID0gdGhpcy51cGRhdGVWYWx1ZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVWb3RlID0gdGhpcy5oYW5kbGVWb3RlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnVwZGF0ZVZvdGUgPSB0aGlzLnVwZGF0ZVZvdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe3ZhbHVlOmUudGFyZ2V0LnZhbHVlfSlcbiAgICAvLyBUaGUgc2hvcnRlciB3YXkgdG8gZG8gaXQuLi5cbiAgICAvLyBlID0+IHRoaXMucHJvcHMuc2V0UHJvcHMoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZX1cbiAgfVxuXG4gIHVwZGF0ZVZvdGUoY3VyclZvdGVIaXN0LCB2b3RlTmFtZSkge1xuICAgIC8vIFByZXZpb3VzIHZvdGVcbiAgICBjb25zdCBhbGxWb3RlcyA9IGN1cnJWb3RlSGlzdC50cmFja1ZvdGVzXG4gICAgdmFyIGFjdFZvdGUgPSB0aGlzLnByb3BzLmFjdGl2ZVZvdGU7IC8vIGluc3RhbnRpYXRlIHRoZSBpdGVtXG5cbiAgICBpZiAoYWxsVm90ZXMubGVuZ3RoPDIpIHtcbiAgICAgIC8vIElmIGZpcnN0IHZvdGUsIHZvdGUgaXMgY3VyclxuICAgICAgYWN0Vm90ZSA9IHZvdGVOYW1lXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zdCBwcmV2Vm90ZSA9IGFsbFZvdGVzW2FsbFZvdGVzLmxlbmd0aC0yXVxuXG4gICAgICBpZih2b3RlTmFtZT09PXByZXZWb3RlKXtcbiAgICAgICAgLypcbiAgICAgICAgSWYgdm90ZSAoY2xpY2spIGlzIHNhbWUgYXMgcHJldmlvdXMgKGNsaWNrKTpcbiAgICAgICAgICDigJMgaWYgdm90ZSBpcyB0aGUgc2FtZSBhcyBhY3RpdmVWb3RlIHdlIHNldCB2b3RlIHRvIG51bGxcbiAgICAgICAgICDigJMgaWYgdm90ZSBpcyBkaWZmIGZyb20gYWN0aXZlVm90ZSB3ZSBzZXQgdm90ZSB0byBjdXJyXG4gICAgICAgICovXG4gICAgICAgIGlmKGFjdFZvdGU9PT12b3RlTmFtZSl7XG4gICAgICAgICAgYWN0Vm90ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBhY3RWb3RlID0gdm90ZU5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgLy8gSWYgdm90ZSBpcyBkaWZmIGZyb20gcHJldmlvdXMsIHZvdGUgaXMgY3VyclxuICAgICAgICBhY3RWb3RlID0gdm90ZU5hbWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIHZhbHVlc1xuICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe2FjdGl2ZVZvdGU6YWN0Vm90ZX0pXG5cbiAgfVxuXG5cbiAgLy8gTmV4dCBoYW5kbGVyXG4gIGhhbmRsZVZvdGUoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaXNhY3RpdmVcIikpXG5cbiAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggcHJvcGVyIHZhbHVlc1xuICAgIGNvbnN0IHZvdGVOYW1lID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidm90ZW5hbWVcIik7XG4gICAgY29uc3QgY3VyclZvdGVIaXN0ID0gdGhpcy5zdGF0ZS52b3RlSGlzdG9yeTtcbiAgICBjdXJyVm90ZUhpc3Rbdm90ZU5hbWVdKz0xXG4gICAgY3VyclZvdGVIaXN0LnRyYWNrVm90ZXMucHVzaCh2b3RlTmFtZSlcblxuICAgIC8vIFVwZGF0ZSBwcm9wc1xuICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe3ZvdGVIaXN0b3J5OmN1cnJWb3RlSGlzdH0pXG5cbiAgICAvLyBDYWxsIHRoZSBuZXh0IGZ1bmN0aW9uXG4gICAgdGhpcy51cGRhdGVWb3RlKGN1cnJWb3RlSGlzdCx2b3RlTmFtZSlcbiAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpZCwgbGFiZWwsIGNsYXNzTmFtZSwgc2V0UHJvcHMsdm90ZUhpc3RvcnksIGFjdGl2ZVZvdGUsIHZhbHVlLCBtZXRhZGF0YX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIC8vIFNldCB0aGUgdmFsdWVzIG9mIGVhY2ggYnV0dG9uXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZUNob2ljZXMgPSB7XG4gICAgICAgICAgXCJzdXBlcmxpa2VcIjpmYWxzZSxcbiAgICAgICAgICBcImxpa2VcIjpmYWxzZSxcbiAgICAgICAgICBcImRpc2xpa2VcIjpmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgY2xhc3NOYW1lQ2hvaWNlc1thY3RpdmVWb3RlXSA9dHJ1ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17aWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgIGFjdGl2ZXZvdGU9e2Ake2FjdGl2ZVZvdGV9YH1cbiAgICAgICAgICAgIG1ldGFkYXRhPXtcIlwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZWNhcmQtdmFsdWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZGlzbGlrZVwiXG4gICAgICAgICAgICAgICAgICAgIHZvdGVuYW1lPVwiZGlzbGlrZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICAgICAgaXNhY3RpdmUgPSB7YCR7Y2xhc3NOYW1lQ2hvaWNlcy5kaXNsaWtlfWB9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYkRvd25BbHRPdXRsaW5lZEljb25cbiAgICAgICAgICAgICAgICAgICAgICB2b3RlbmFtZT1cImRpc2xpa2VcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRpc2xpa2UtaXNhY3RpdmUtJHtjbGFzc05hbWVDaG9pY2VzLmRpc2xpa2V9YH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInN1cGVybGlrZVwiXG4gICAgICAgICAgICAgICAgICAgIHZvdGVuYW1lPVwic3VwZXJsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVWb3RlfVxuICAgICAgICAgICAgICAgICAgICBpc2FjdGl2ZSA9IHtgJHtjbGFzc05hbWVDaG9pY2VzLnN1cGVybGlrZX1gfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U3RhcnNJY29uXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwiaWNvbi1zdXBlcmxpa2VcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHN1cGVybGlrZS1pc2FjdGl2ZS0ke2NsYXNzTmFtZUNob2ljZXMuc3VwZXJsaWtlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgdm90ZW5hbWU9XCJzdXBlcmxpa2VcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxpa2VcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVZvdGV9XG4gICAgICAgICAgICAgICAgICAgIGlzYWN0aXZlID0ge2Ake2NsYXNzTmFtZUNob2ljZXMubGlrZX1gfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VGh1bWJVcEFsdE91dGxpbmVkSWNvblxuICAgICAgICAgICAgICAgICAgICAgIHZvdGVuYW1lPVwibGlrZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGlrZS1pc2FjdGl2ZS0ke2NsYXNzTmFtZUNob2ljZXMubGlrZX1gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuVm90ZUNhcmQuZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOlwia2V5d29yZCBzdWdnZXN0aW9uXCIsXG4gICAgY2xhc3NOYW1lOlwidm90ZS1jYXJkXCIsXG4gICAgbWV0YWRhdGE6XCJ7J3R5cGUnOidrZXl3b3JkJ31cIixcbiAgICBsYWJlbDpcImRlZmF1bHQtbGFiZWxcIixcbiAgICBhY3RpdmVWb3RlOm51bGwsXG4gICAgdm90ZUhpc3Rvcnk6e1xuICAgICAgc3VwZXJsaWtlOjAsIC8vIGNvdW50cyBhcyBwb3NpdGl2ZSB2b3RlIGJ1dCBpcyBhIHNlcGVyYXRlIGVudGl0eVxuICAgICAgbGlrZTowLFxuICAgICAgZGlzbGlrZTowLFxuICAgICAgdHJhY2tWb3RlczpbXVxuICAgIH0sXG5cbn1cblxuXG5Wb3RlQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSB2b3RlY2FyZFxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjbGFzc25hbWUgb2YgdGhlIHZvdGVjYXJkXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE1ldGFkYXRhIGFib3V0IHRoZSBpdGVtIGluIHRoZSB2b3RlY2FyZFxuICAgKi9cbiAgbWV0YWRhdGE6IFByb3BUeXBlcy5zdHJpbmcsIC8vIEEganNvbmlmaWVkIGRpY3RcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdm90ZSBvZiB0aGUgb2JqZWN0XG4gICAqL1xuICBhY3RpdmVWb3RlOiBQcm9wVHlwZXMub25lT2YoW251bGwsJ3N1cGVybGlrZScsJ2xpa2UnLCAnZGlzbGlrZSddKSxcblxuICAvKipcbiAgICogVGhlIGhpc3Rvcnkgb2YgdGhlIG9iamVjdFxuICAgKi9cbiAgdm90ZUhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICovXG4gIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgZ2V0cyBmaXJlZCB3aGVuIHRoZSBjaGVja2JveCBpdGVtIGdldHMgc2VsZWN0ZWQuXG4gICovXG4gIGZpcmVFdmVudDogUHJvcFR5cGVzLmZ1bmMsXG5cbn07XG5cblxuLy8gRXhwb3J0IHRoZSBpdGVtXG5leHBvcnQgZGVmYXVsdCBWb3RlQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=