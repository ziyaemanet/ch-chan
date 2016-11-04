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


  render () {
    let { threads } = this.props;
    return (
      <div className='galleryContainer'>
        {
          threads.map((thread) => {
            return (
              <div key={thread._id} onClick={() => browserHistory.push(`/thread/${thread._id}`)} className='card' >
                {/* <h2>{thread.name}</h2> */}
                <img className="galleryImage" src={thread.image} alt=""/>
                <br />
                <span className="replies">R: {thread.messages.length}</span>
                <p>{thread.firstMessage}</p>
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
