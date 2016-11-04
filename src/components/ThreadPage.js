import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import * as ThreadActions from '../actions/ThreadActions';

class ThreadPage extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
    this.addQuote = this.addQuote.bind(this);
    this.autoGrow = this.autoGrow.bind(this);
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

  addQuote(id) {
    const { message } = this.refs;
    if(message.value.length){
      message.value += `\n>>${id} `;
    } else {
      message.value += `>>${id} `;
    }
  }

  autoGrow(e) {
    e.target.style.height = "5px";
    e.target.style.height = (e.target.scrollHeight)+"px";
}

  parseText(text) {
    text = text.replace(/\n/g,'\n ');
    return text.split(' ').map(word => {
      const cleanWord = word.replace(/\n/g, '');
      if (cleanWord[0] === '>' && cleanWord[1] === '>') {
        return <a href={'#' + cleanWord.substr(2)}>{word}</a>;
      }
      return word + ' ' ;
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
          <textarea onKeyUp={this.autoGrow} type="text" placeholder='Add Message' ref='message' />
          <button className='btn btn-default btn-sm'>Create Message</button>
        </form>
        <hr />

        {messages.map(message => (
          <div id={message._id} key={message._id} className="threadContainer">
            <div>
              <span className='ano'>Anonymous</span>&nbsp;&nbsp;
              {moment(message.timestamp).format('MM/DD/YYYY, h:mm:ss a')}&nbsp;
              <a onClick={() => this.addQuote(message._id)}>No.{message._id}</a>
            </div>
            <div >
              <img
                className='threadImage'
                src={message.image}
                style={message.image.length ? {} :{display: "none"} }/>
              <p>{this.parseText(message.message)}</p>
            </div>
          </div>
        ))}

        <div id={thread._id} className="threadContainer">
          <div >
            <span className='ano'>Anonymous</span>&nbsp;&nbsp;
            {moment(thread.timestamp).format('MM/DD/YYYY, h:mm:ss a')}&nbsp;
            <a onClick={() => this.addQuote(thread._id)}>No.{thread._id}</a>
          </div>
          <div >
            <img className='threadImage' src={thread.image}/>
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
