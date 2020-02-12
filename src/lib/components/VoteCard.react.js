import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./styles.css";

// import { IconButton, Colors } from 'react-native-paper';
import { IconButton } from '@material-ui/core';
import StarsIcon from '@material-ui/icons/Stars';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
// CONTINUE FROM HERE TOMORROW:
// https://dash.plot.ly/react-for-python-developers



// =========================================================

class VoteCard extends Component {

  // When we initialize, we build logic into the like and dislike classes
  constructor(props) {
    super(props);
      this.state = {
        value:"",
        content:"",
        activeVote:null,
        voteHistory:{
          superlike:0, // counts as positive vote but is a seperate entity
          like:0,
          dislike:0,
          trackVotes:[]
        }
      }
      this.updateValue = this.updateValue.bind(this);
      this.handleVote = this.handleVote.bind(this);
      this.updateVote = this.updateVote.bind(this);
      this.handleSuperLike = this.handleSuperLike.bind(this);
  }

  updateValue(e){
    e.preventDefault()
    this.props.setProps({value:e.target.value})
    // The shorter way to do it...
    // e => this.props.setProps({value: e.target.value}
  }

  updateVote(currVoteHist, voteName) {
    // Previous vote
    const allVotes = currVoteHist.trackVotes
    var actVote = this.props.activeVote; // instantiate the item

    if (allVotes.length<2) {
      // If first vote, vote is curr
      actVote = voteName
    }
    else{
      const prevVote = allVotes[allVotes.length-2]

      if(voteName===prevVote){
        /*
        If vote (click) is same as previous (click):
          – if vote is the same as activeVote we set vote to null
          – if vote is diff from activeVote we set vote to curr
        */
        if(actVote===voteName){
          actVote = null;
        }
        else{
          actVote = voteName
        }
      }
      else{
        // If vote is diff from previous, vote is curr
        actVote = voteName
      }
    }

    // Set the values
    this.props.setProps({activeVote:actVote})
  }


  // Next handler
  handleVote(e){
    e.preventDefault()
    // if (!e.target.name){e=e.target.parentElement}
    // var voteName = e.target.getAttribute("aria-label")
    // if(!voteName){voteName = e.target.getAttribute("label")}
    // if(!voteName){voteName = e.target.name}
    // Update the state with proper values
    const voteName = e.target.getAttribute("votename");
    const currVoteHist = this.state.voteHistory;
    currVoteHist[voteName]+=1
    currVoteHist.trackVotes.push(voteName)

    // Update props
    this.props.setProps({voteHistory:currVoteHist})

    // Call the next function
    this.updateVote(currVoteHist,voteName)
  }

  handleSuperLike(e){
    const currVoteHist = this.state.voteHistory;
    currVoteHist['superlike'] += 1;
    currVoteHist.trackVotes.push('superlike');
    this.props.setProps({voteHistory:currVoteHist})
    this.updateVote(currVoteHist, 'superlike');
  }

  starsClick = (e) => {
    if (e.target.parentElement.id === 'superlike-iconbutton-id') {
      alert('hello');
    }
  }

  wrappedStarsIcon() {
        return (
        <div onClick={this.starsClick}>
        <StarsIcon votename="superlike" onClick={this.starsClick}/>
        </>
        )

  }

    render() {
        const {id, label, setProps,voteHistory, activeVote, value, content, metadata} = this.props;

        // Set the values of each button
        const classNameChoices = {
          "superlike":false,
          "like":false,
          "dislike":false,
        };
        classNameChoices[activeVote] =true;

        return (
            <div id={id}
            className={`vote-card`}
            activevote={`${activeVote}`}
            metadata={""}
            >
                <div className="votecard-content"
                >
                {content}
                </div>


                <>
                <IconButton
                    aria-label="superlike"
                    votename="superlike"
                    isactive = {`${classNameChoices.superlike}`}
                    onClick={this.handleSuperLike}
                    component="span"
                    id='superlike-iconbutton-id'
                    >
                </IconButton>
                {this.wrappedStarsIcon()}
                </>

                <IconButton
                    aria-label="like"
                    votename="like"
                    isactive = {`${classNameChoices.like}`}
                    onClick={this.handleVote}
                    component="span"
                    >
                    <ThumbUpAltOutlinedIcon votename="like"/>
                </IconButton>

                <IconButton
                    aria-label="dislike"
                    votename="dislike"
                    isactive = {`${classNameChoices.dislike}`}
                    onClick={this.handleVote}
                    component="span"
                    >
                    <ThumbDownAltOutlinedIcon votename="dislike"/>
                </IconButton>

                <div>
                    <button
                      name="superlike"
                      type="button"
                      className= {`vote-superlike`}
                      isactive = {`${classNameChoices.superlike}`}
                      onClick={this.handleVote}
                    >
                      "SUPERLIKE"
                    </button>

                    <button
                      name="like"
                      type="button"
                      className= {`vote-like`}
                      isactive = {`${classNameChoices.like}`}
                      onClick={this.handleVote}
                    >
                      "LIKE"
                    </button>
                    <button
                      name="dislike"
                      type="button"
                      className= {`vote-dislike`}
                      isactive = {`${classNameChoices.dislike}`}
                      onClick={this.handleVote}
                    >
                      "DISLIKE"
                    </button>
                </div>

              <p>Current Vote: {activeVote}</p>

            </div>

        );
    }
}


VoteCard.defaultProps = {
    value:"",
    content:"keyword suggestion",
    metadata:"{'type':'keyword'}",
    label:"default-label",
    activeVote:null,
    voteHistory:{
      superlike:0, // counts as positive vote but is a seperate entity
      like:0,
      dislike:0,
      trackVotes:[]
    },

}


VoteCard.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  label: PropTypes.string.isRequired,

  /**
   * The value displayed in the input.
   */
  value: PropTypes.string,

  /**
   * The value displayed in the votecard
   */
  content: PropTypes.string,

  /**
   * Metadata about the item in the votecard
   */
  metadata: PropTypes.string, // A jsonified dict

  /**
   * The current vote of the object
   */
  activeVote: PropTypes.oneOf([null,'superlike','like', 'dislike']),
  /**
   * The history of the object
   */
  voteHistory: PropTypes.object,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func,

};


// Export the item
export default VoteCard;
