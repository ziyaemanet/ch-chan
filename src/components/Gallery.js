import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getThreads } from '../actions/ThreadActions';
import { browserHistory } from 'react-router';

class Gallery extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchThreads();
  }



  render (){
    console.log('this:', this);
    let { threads } = this.props;
    return (
      <div>
        {
          threads.map((thread) => {
            return (
              <div key={thread._id} onClick={() => browserHistory.push(`/thread/${thread._id}`)}>
                <h2>{thread.name}</h2>
                <img src={thread.image} alt=""/>
                <h4>{thread.firstMessage}</h4>
              </div>
            )
          })
        }
      </div>
    );
  }
}


export default connect(
  state => ({
    threads: state.threads,
  }),
  dispatch => ({
    fetchThreads() {
      dispatch(getThreads());
    },
  })
)(Gallery);
