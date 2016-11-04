import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ThreadActions from '../actions/ThreadActions';

class ThreadPage extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    const { getMessages, params } = this.props;
    getMessages(params.id);
  }

  submitForm(e) {
    e.preventDefault();
    const { addMessage, params } = this.props;
    const { message, picUrl } = this.refs;

    addMessage(params.id, {
      image: picUrl.value,
      message: message.value,
    });
  }

  render (){
    console.log('ThreadPgagethis:', this);
    const { thread } = this.props;
    let messages;
    if (thread.messages) {
      messages = [...thread.messages].reverse();
    } else {
      messages = [];
    }
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder='Add Picture url' ref='picUrl' />
          <textarea type="text" placeholder='Add Message' ref='message' />
          <button className='btn btn-default btn-sm'>Create Message</button>
        </form>
        <hr />

        {messages.map(message => (
          <div key={message._id} className="threadContainer">
            <div>
              <span className='ano'>Anonymous</span>&nbsp;{message.timestamp}
            </div>
            <div >
              <img className='threadImage' src={message.image} style={{"max-height":"300px"}}/>
              <p>{message.message}</p>
            </div>
          </div>
        ))}

        <div className="threadContainer">
          <div >
            <span className='ano'>Anonymous</span>&nbsp;{thread.timestamp}
          </div>
          <div >
            <img className='threadImage' src={thread.image} style={{"max-height":"300px"}}/>
            <p>{thread.firstMessage}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    thread: state.thread,
  }),
  dispatch => ({
    getMessages(id) {
      dispatch(ThreadActions.getMessages(id));
    },
    addMessage(id, message) {
      console.log('message:', message);
      dispatch(ThreadActions.addMessage(id, message));
    },
  })
)(ThreadPage);
