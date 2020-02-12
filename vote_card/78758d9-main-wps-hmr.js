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

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
// class TextInput extends Component {
//
//   // Not sure if I need to list the current
//   constructor(props) {
//     super(props);
//     this.state = {
//        // Set the initial state
//         value:"",
//         activeVote:null,
//         voteHistory:{
//           superlike:0, // counts as positive vote but is a seperate entity
//           like:0,
//           dislike:0,
//           trackVotes:[]
//         }
//     }
//   }
// render(){
//   return "hello"
// }
// }
// export default TextInput;
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
      // activeVote:null,
      value: "",
      voteHistory: {
        superlike: 0,
        // counts as positive vote but is a seperate entity
        like: 0,
        dislike: 0,
        trackVotes: []
      }
    }; // this.onClick = this.onClick.bind(this);
    // this.update = this.update.bind(this);

    _this.handleVote = _this.handleVote.bind(_assertThisInitialized(_this));
    return _this;
  } // onClick(e) {
  //   // here you know which component is that, so you can call parent method
  //   this.props.update(this.props.voteHistory.id);
  // }


  _createClass(VoteCard, [{
    key: "handleVote",
    value: function handleVote(e) {
      e.preventDefault(); // Update the state with proper values

      var currVoteHist = this.state.voteHistory;
      currVoteHist[e.target.name] += 1;
      console.info(currVoteHist);
      this.props.voteHistory[e.target.name] += 1;
      this.setState({
        voteHistory: currVoteHist
      });
    } // handleVote(e){
    //
    // }
    //  e => setProps({voteHistory: voteHistory.dislike+=1})
    //
    // handleInputChange = (e) => {
    //   // get the value from the DOM node
    //   const newValue = e.target.value;
    //   // update the state!
    //   this.setState({
    //     value: newValue
    //   })
    // }
    // update(id) {
    //find and update your item, you can do it since you have an 'id'
    //follow link: http://codereview.stackexchange.com/questions/43438/writing-a-function-to-add-or-modify-an-existing-object-inside-an-array
    // this.setState({
    //   data:
    // })
    // }
    // init() {
    //   // Not necessary, already built in...
    //   this.value = value;
    //   this.activeVote = activeVote;
    //   this.voteHistory = voteHistory;
    // }

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          setProps = _this$props.setProps,
          voteHistory = _this$props.voteHistory,
          value = _this$props.value;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id
      }, "ExampleComponent: ", label, "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: value,
        onChange: function onChange(e) {
          return setProps({
            value: e.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "This is your value \"", value, "\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button vote-like",
        name: "superlike",
        onClick: this.handleVote
      }, "\"SUPERLIKE ME\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button vote-like",
        name: "like",
        onClick: this.handleVote
      }, "\"LIKE ME\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button vote-dislike",
        name: "dislike",
        onClick: this.handleVote
      }, "\"DISLIKE ME\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Current state: ", JSON.stringify(this.props), "Current history: ", JSON.stringify(voteHistory)));
    }
  }]);

  return VoteCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // Current history: {JSON.stringify(voteHistory)}


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
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Update values
   */
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}; // Export the item

/* harmony default export */ __webpack_exports__["default"] = (VoteCard); // setDislike() {
//   this.setState({
//     dislikeActive: !this.props.dislikeActive,
//     dislike: this.props.dislikeActive
//       ? this.props.dislike - 1
//       : this.props.dislike + 1
//   });
// }
// setLike() {
//   this.setState({
//     likeActive: !this.state.likeActive,
//     like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
//   });
// }
//
// handleLike() {
//   if (this.state.dislikeActive) {
//     this.setLike();
//     this.setDislike();
//   }
//   this.setLike();
// }
//
// handleDislike() {
//   if (this.state.likeActive) {
//     this.setDislike();
//     this.setLike();
//   }
//   this.setDislike();
// }
//  ============================================================================
// class Buttons extends React.Component {
//   state = {
//     like: 23,
//     dislike: 3,
//     likeActive: false,
//     dislikeActive: false
//   };
//
// setDislike() {
//   this.setState({
//     dislikeActive: !this.state.dislikeActive,
//     dislike: this.state.dislikeActive
//       ? this.state.dislike - 1
//       : this.state.dislike + 1
//   });
// }
// setLike() {
//   this.setState({
//     likeActive: !this.state.likeActive,
//     like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
//   });
// }
//
// handleLike() {
//   if (this.state.dislikeActive) {
//     this.setLike();
//     this.setDislike();
//   }
//   this.setLike();
// }
//
// handleDislike() {
//   if (this.state.likeActive) {
//     this.setDislike();
//     this.setLike();
//   }
//   this.setDislike();
// }
//
//   render() {
//     return (
//       <>
//         <button
//           onClick={() => this.handleLike()}
//           className={c({ ["active"]: this.state.likeActive })}
//         >
//           {this.state.like}
//         </button>
//         <button
//           className={c({ ["active"]: this.state.dislikeActive })}
//           onClick={() => this.handleDislike()}
//         >
//           {this.state.dislike}
//         </button>
//       </>
//     );
//   }
// }
//
// function getButtons() {
//   return <Buttons />;
// }
//
// const rootElement = document.getElementById("root");
// render(<getButtons />, rootElement);
//  ============================================================================
// class LikeButton extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       liked: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState({
//       liked: !this.state.liked
//     });
//   }
//
//   render() {
//     const text = this.state.liked ? 'liked' : 'haven\'t liked';
//     const label = this.state.liked ? 'Unlike' : 'Like'
//     return (
//       <div className="customContainer">
//         <button className="btn btn-primary" onClick={this.handleClick}>
//           {label}</button>
//         <p>
//           you {text} this. Click to toggle.
//         </p>
//       </div>
//     );
//   }
// }
// export LikeButton
// ReactDOM.render(
//   <LikeButton />,
//   document.getElementById('example')
// )

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b3RlX2NhcmQvLi9zcmMvbGliL2NvbXBvbmVudHMvVm90ZUNhcmQucmVhY3QuanMiXSwibmFtZXMiOlsiVm90ZUNhcmQiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJ2b3RlSGlzdG9yeSIsInN1cGVybGlrZSIsImxpa2UiLCJkaXNsaWtlIiwidHJhY2tWb3RlcyIsImhhbmRsZVZvdGUiLCJiaW5kIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VyclZvdGVIaXN0IiwidGFyZ2V0IiwibmFtZSIsImNvbnNvbGUiLCJpbmZvIiwic2V0U3RhdGUiLCJpZCIsImxhYmVsIiwic2V0UHJvcHMiLCJKU09OIiwic3RyaW5naWZ5IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiYWN0aXZlVm90ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsIm9iamVjdCIsImZ1bmMiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUlBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFRQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDRDtBQUNBO0FBQ0Y7QUFDRDtBQUVBOztJQUVNQSxROzs7OztBQUVKO0FBQ0Esb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsa0ZBQU1BLEtBQU47QUFDRSxVQUFLQyxLQUFMLEdBQWE7QUFDWDtBQUNBQyxXQUFLLEVBQUMsRUFGSztBQUdYQyxpQkFBVyxFQUFDO0FBQ1ZDLGlCQUFTLEVBQUMsQ0FEQTtBQUNHO0FBQ2JDLFlBQUksRUFBQyxDQUZLO0FBR1ZDLGVBQU8sRUFBQyxDQUhFO0FBSVZDLGtCQUFVLEVBQUM7QUFKRDtBQUhELEtBQWIsQ0FGZSxDQVlmO0FBQ0E7O0FBQ0Es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QUFFd0IsaURBQVMsQ0FBQ0ksTUF2Qko7O0FBeUJuQjs7OztBQUlBWCxVQUFRLEVBQUVPLGlEQUFTLENBQUNLLElBN0JEOztBQStCbkI7OztBQUdBQyxRQUFNLEVBQUVOLGlEQUFTLENBQUNLO0FBbENDLENBQXJCLEMsQ0F1Q0E7O0FBQ2VqQyx1RUFBZixFLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJIiwiZmlsZSI6Ijc4NzU4ZDktbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cblxuLy8gQ09OVElOVUUgRlJPTSBIRVJFIFRPTU9SUk9XOlxuLy8gaHR0cHM6Ly9kYXNoLnBsb3QubHkvcmVhY3QtZm9yLXB5dGhvbi1kZXZlbG9wZXJzXG5cbi8qKlxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxuICogZGlzcGxheXMgaXQuXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxuICovXG5cbiAvLyBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuIC8vXG4gLy8gICAvLyBOb3Qgc3VyZSBpZiBJIG5lZWQgdG8gbGlzdCB0aGUgY3VycmVudFxuIC8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAvLyAgICAgc3VwZXIocHJvcHMpO1xuIC8vICAgICB0aGlzLnN0YXRlID0ge1xuIC8vICAgICAgICAvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGVcbiAvLyAgICAgICAgIHZhbHVlOlwiXCIsXG4gLy8gICAgICAgICBhY3RpdmVWb3RlOm51bGwsXG4gLy8gICAgICAgICB2b3RlSGlzdG9yeTp7XG4gLy8gICAgICAgICAgIHN1cGVybGlrZTowLCAvLyBjb3VudHMgYXMgcG9zaXRpdmUgdm90ZSBidXQgaXMgYSBzZXBlcmF0ZSBlbnRpdHlcbiAvLyAgICAgICAgICAgbGlrZTowLFxuIC8vICAgICAgICAgICBkaXNsaWtlOjAsXG4gLy8gICAgICAgICAgIHRyYWNrVm90ZXM6W11cbiAvLyAgICAgICAgIH1cbiAvLyAgICAgfVxuIC8vICAgfVxuICAgIC8vIHJlbmRlcigpe1xuICAgLy8gICByZXR1cm4gXCJoZWxsb1wiXG4gICAvLyB9XG4gLy8gfVxuLy8gZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY2xhc3MgVm90ZUNhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIC8vIFdoZW4gd2UgaW5pdGlhbGl6ZSwgd2UgYnVpbGQgbG9naWMgaW50byB0aGUgbGlrZSBhbmQgZGlzbGlrZSBjbGFzc2VzXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLy8gYWN0aXZlVm90ZTpudWxsLFxuICAgICAgICB2YWx1ZTpcIlwiLFxuICAgICAgICB2b3RlSGlzdG9yeTp7XG4gICAgICAgICAgc3VwZXJsaWtlOjAsIC8vIGNvdW50cyBhcyBwb3NpdGl2ZSB2b3RlIGJ1dCBpcyBhIHNlcGVyYXRlIGVudGl0eVxuICAgICAgICAgIGxpa2U6MCxcbiAgICAgICAgICBkaXNsaWtlOjAsXG4gICAgICAgICAgdHJhY2tWb3RlczpbXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgIC8vIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlVm90ZSA9IHRoaXMuaGFuZGxlVm90ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gb25DbGljayhlKSB7XG4gIC8vICAgLy8gaGVyZSB5b3Uga25vdyB3aGljaCBjb21wb25lbnQgaXMgdGhhdCwgc28geW91IGNhbiBjYWxsIHBhcmVudCBtZXRob2RcbiAgLy8gICB0aGlzLnByb3BzLnVwZGF0ZSh0aGlzLnByb3BzLnZvdGVIaXN0b3J5LmlkKTtcbiAgLy8gfVxuXG4gIGhhbmRsZVZvdGUoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHByb3BlciB2YWx1ZXNcbiAgICBjb25zdCBjdXJyVm90ZUhpc3QgPSB0aGlzLnN0YXRlLnZvdGVIaXN0b3J5XG4gICAgY3VyclZvdGVIaXN0W2UudGFyZ2V0Lm5hbWVdKz0xXG4gICAgY29uc29sZS5pbmZvKGN1cnJWb3RlSGlzdClcbiAgICB0aGlzLnByb3BzLnZvdGVIaXN0b3J5W2UudGFyZ2V0Lm5hbWVdKz0xXG4gICAgdGhpcy5zZXRTdGF0ZSh7dm90ZUhpc3Rvcnk6Y3VyclZvdGVIaXN0fSk7XG5cblxuICB9XG5cbiAgLy8gaGFuZGxlVm90ZShlKXtcbiAgLy9cbiAgLy8gfVxuICAvLyAgZSA9PiBzZXRQcm9wcyh7dm90ZUhpc3Rvcnk6IHZvdGVIaXN0b3J5LmRpc2xpa2UrPTF9KVxuICAvL1xuICAvLyBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gIC8vICAgLy8gZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBET00gbm9kZVxuICAvLyAgIGNvbnN0IG5ld1ZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gIC8vICAgLy8gdXBkYXRlIHRoZSBzdGF0ZSFcbiAgLy8gICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgIHZhbHVlOiBuZXdWYWx1ZVxuICAvLyAgIH0pXG4gIC8vIH1cblxuXG4gIC8vIHVwZGF0ZShpZCkge1xuICAvL2ZpbmQgYW5kIHVwZGF0ZSB5b3VyIGl0ZW0sIHlvdSBjYW4gZG8gaXQgc2luY2UgeW91IGhhdmUgYW4gJ2lkJ1xuICAvL2ZvbGxvdyBsaW5rOiBodHRwOi8vY29kZXJldmlldy5zdGFja2V4Y2hhbmdlLmNvbS9xdWVzdGlvbnMvNDM0Mzgvd3JpdGluZy1hLWZ1bmN0aW9uLXRvLWFkZC1vci1tb2RpZnktYW4tZXhpc3Rpbmctb2JqZWN0LWluc2lkZS1hbi1hcnJheVxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAvLyAgIGRhdGE6XG4gICAgICAvLyB9KVxuXG4gIC8vIH1cblxuICAvLyBpbml0KCkge1xuICAvLyAgIC8vIE5vdCBuZWNlc3NhcnksIGFscmVhZHkgYnVpbHQgaW4uLi5cbiAgLy8gICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIC8vICAgdGhpcy5hY3RpdmVWb3RlID0gYWN0aXZlVm90ZTtcbiAgLy8gICB0aGlzLnZvdGVIaXN0b3J5ID0gdm90ZUhpc3Rvcnk7XG4gIC8vIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aWQsIGxhYmVsLCBzZXRQcm9wcyx2b3RlSGlzdG9yeSwgdmFsdWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17aWR9PlxuICAgICAgICAgICAgICAgIEV4YW1wbGVDb21wb25lbnQ6IHtsYWJlbH0mbmJzcDtcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQcm9wcyh7dmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgyPlRoaXMgaXMgeW91ciB2YWx1ZSBcInt2YWx1ZX1cIjwvaDI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHZvdGUtbGlrZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3VwZXJsaWtlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBcIlNVUEVSTElLRSBNRVwiXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gdm90ZS1saWtlXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsaWtlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVm90ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBcIkxJS0UgTUVcIlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiB2b3RlLWRpc2xpa2VcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRpc2xpa2VcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVWb3RlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFwiRElTTElLRSBNRVwiXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEN1cnJlbnQgc3RhdGU6IHtKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgICAgIEN1cnJlbnQgaGlzdG9yeToge0pTT04uc3RyaW5naWZ5KHZvdGVIaXN0b3J5KX1cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxufVxuLy8gQ3VycmVudCBoaXN0b3J5OiB7SlNPTi5zdHJpbmdpZnkodm90ZUhpc3RvcnkpfVxuVm90ZUNhcmQuZGVmYXVsdFByb3BzID0ge1xuICAgIGxhYmVsOlwiZGVmYXVsdC1sYWJlbFwiLFxuICAgIGFjdGl2ZVZvdGU6bnVsbCxcbiAgICB2b3RlSGlzdG9yeTp7XG4gICAgICBzdXBlcmxpa2U6MCwgLy8gY291bnRzIGFzIHBvc2l0aXZlIHZvdGUgYnV0IGlzIGEgc2VwZXJhdGUgZW50aXR5XG4gICAgICBsaWtlOjAsXG4gICAgICBkaXNsaWtlOjAsXG4gICAgICB0cmFja1ZvdGVzOltdXG4gICAgfSxcblxufVxuXG5cblZvdGVDYXJkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZvdGUgb2YgdGhlIG9iamVjdFxuICAgKi9cbiAgYWN0aXZlVm90ZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCdzdXBlcmxpa2UnLCdsaWtlJywgJ2Rpc2xpa2UnXSksXG4gIC8qKlxuICAgKiBUaGUgaGlzdG9yeSBvZiB0aGUgb2JqZWN0XG4gICAqL1xuICB2b3RlSGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgKi9cbiAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdmFsdWVzXG4gICAqL1xuICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jXG5cbn07XG5cblxuLy8gRXhwb3J0IHRoZSBpdGVtXG5leHBvcnQgZGVmYXVsdCBWb3RlQ2FyZDtcblxuXG4vLyBzZXREaXNsaWtlKCkge1xuLy8gICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICBkaXNsaWtlQWN0aXZlOiAhdGhpcy5wcm9wcy5kaXNsaWtlQWN0aXZlLFxuLy8gICAgIGRpc2xpa2U6IHRoaXMucHJvcHMuZGlzbGlrZUFjdGl2ZVxuLy8gICAgICAgPyB0aGlzLnByb3BzLmRpc2xpa2UgLSAxXG4vLyAgICAgICA6IHRoaXMucHJvcHMuZGlzbGlrZSArIDFcbi8vICAgfSk7XG4vLyB9XG4vLyBzZXRMaWtlKCkge1xuLy8gICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICBsaWtlQWN0aXZlOiAhdGhpcy5zdGF0ZS5saWtlQWN0aXZlLFxuLy8gICAgIGxpa2U6IHRoaXMuc3RhdGUubGlrZUFjdGl2ZSA/IHRoaXMuc3RhdGUubGlrZSAtIDEgOiB0aGlzLnN0YXRlLmxpa2UgKyAxXG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIGhhbmRsZUxpa2UoKSB7XG4vLyAgIGlmICh0aGlzLnN0YXRlLmRpc2xpa2VBY3RpdmUpIHtcbi8vICAgICB0aGlzLnNldExpa2UoKTtcbi8vICAgICB0aGlzLnNldERpc2xpa2UoKTtcbi8vICAgfVxuLy8gICB0aGlzLnNldExpa2UoKTtcbi8vIH1cbi8vXG4vLyBoYW5kbGVEaXNsaWtlKCkge1xuLy8gICBpZiAodGhpcy5zdGF0ZS5saWtlQWN0aXZlKSB7XG4vLyAgICAgdGhpcy5zZXREaXNsaWtlKCk7XG4vLyAgICAgdGhpcy5zZXRMaWtlKCk7XG4vLyAgIH1cbi8vICAgdGhpcy5zZXREaXNsaWtlKCk7XG4vLyB9XG5cblxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbi8vIGNsYXNzIEJ1dHRvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICBzdGF0ZSA9IHtcbi8vICAgICBsaWtlOiAyMyxcbi8vICAgICBkaXNsaWtlOiAzLFxuLy8gICAgIGxpa2VBY3RpdmU6IGZhbHNlLFxuLy8gICAgIGRpc2xpa2VBY3RpdmU6IGZhbHNlXG4vLyAgIH07XG4vL1xuICAvLyBzZXREaXNsaWtlKCkge1xuICAvLyAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgZGlzbGlrZUFjdGl2ZTogIXRoaXMuc3RhdGUuZGlzbGlrZUFjdGl2ZSxcbiAgLy8gICAgIGRpc2xpa2U6IHRoaXMuc3RhdGUuZGlzbGlrZUFjdGl2ZVxuICAvLyAgICAgICA/IHRoaXMuc3RhdGUuZGlzbGlrZSAtIDFcbiAgLy8gICAgICAgOiB0aGlzLnN0YXRlLmRpc2xpa2UgKyAxXG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy8gc2V0TGlrZSgpIHtcbiAgLy8gICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgIGxpa2VBY3RpdmU6ICF0aGlzLnN0YXRlLmxpa2VBY3RpdmUsXG4gIC8vICAgICBsaWtlOiB0aGlzLnN0YXRlLmxpa2VBY3RpdmUgPyB0aGlzLnN0YXRlLmxpa2UgLSAxIDogdGhpcy5zdGF0ZS5saWtlICsgMVxuICAvLyAgIH0pO1xuICAvLyB9XG4gIC8vXG4gIC8vIGhhbmRsZUxpa2UoKSB7XG4gIC8vICAgaWYgKHRoaXMuc3RhdGUuZGlzbGlrZUFjdGl2ZSkge1xuICAvLyAgICAgdGhpcy5zZXRMaWtlKCk7XG4gIC8vICAgICB0aGlzLnNldERpc2xpa2UoKTtcbiAgLy8gICB9XG4gIC8vICAgdGhpcy5zZXRMaWtlKCk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gaGFuZGxlRGlzbGlrZSgpIHtcbiAgLy8gICBpZiAodGhpcy5zdGF0ZS5saWtlQWN0aXZlKSB7XG4gIC8vICAgICB0aGlzLnNldERpc2xpa2UoKTtcbiAgLy8gICAgIHRoaXMuc2V0TGlrZSgpO1xuICAvLyAgIH1cbiAgLy8gICB0aGlzLnNldERpc2xpa2UoKTtcbiAgLy8gfVxuLy9cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8PlxuLy8gICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVMaWtlKCl9XG4vLyAgICAgICAgICAgY2xhc3NOYW1lPXtjKHsgW1wiYWN0aXZlXCJdOiB0aGlzLnN0YXRlLmxpa2VBY3RpdmUgfSl9XG4vLyAgICAgICAgID5cbi8vICAgICAgICAgICB7dGhpcy5zdGF0ZS5saWtlfVxuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgIGNsYXNzTmFtZT17Yyh7IFtcImFjdGl2ZVwiXTogdGhpcy5zdGF0ZS5kaXNsaWtlQWN0aXZlIH0pfVxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGlzbGlrZSgpfVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzbGlrZX1cbi8vICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICA8Lz5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gZ2V0QnV0dG9ucygpIHtcbi8vICAgcmV0dXJuIDxCdXR0b25zIC8+O1xuLy8gfVxuLy9cbi8vIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuLy8gcmVuZGVyKDxnZXRCdXR0b25zIC8+LCByb290RWxlbWVudCk7XG5cblxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGNsYXNzIExpa2VCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICBzdXBlcigpO1xuLy8gICAgIHRoaXMuc3RhdGUgPSB7XG4vLyAgICAgICBsaWtlZDogZmFsc2Vcbi8vICAgICB9O1xuLy8gICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4vLyAgIH1cbi8vXG4vLyAgIGhhbmRsZUNsaWNrKCkge1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgbGlrZWQ6ICF0aGlzLnN0YXRlLmxpa2VkXG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBjb25zdCB0ZXh0ID0gdGhpcy5zdGF0ZS5saWtlZCA/ICdsaWtlZCcgOiAnaGF2ZW5cXCd0IGxpa2VkJztcbi8vICAgICBjb25zdCBsYWJlbCA9IHRoaXMuc3RhdGUubGlrZWQgPyAnVW5saWtlJyA6ICdMaWtlJ1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbUNvbnRhaW5lclwiPlxuLy8gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuLy8gICAgICAgICAgIHtsYWJlbH08L2J1dHRvbj5cbi8vICAgICAgICAgPHA+XG4vLyAgICAgICAgICAgeW91IHt0ZXh0fSB0aGlzLiBDbGljayB0byB0b2dnbGUuXG4vLyAgICAgICAgIDwvcD5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH1cbi8vIGV4cG9ydCBMaWtlQnV0dG9uXG5cbi8vIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgPExpa2VCdXR0b24gLz4sXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcbi8vIClcbiJdLCJzb3VyY2VSb290IjoiIn0=