/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import  {VoteCard}  from '../lib';

class App extends Component {

    // Allow the component to update its props
    constructor() {
        super();
        // If you want to set the state, do it here
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <h2>VoteCard</h2>
                <hr></hr>
                <VoteCard
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
