import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addThread, getThreads } from '../actions/ThreadActions';

class InputForm extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const { picUrl, threadTitle, firstMessage } = this.refs;
    let threadPackage = {
      // name: threadTitle.value,
      image: picUrl.value,
      firstMessage: firstMessage.value,
    }
    this.props.createThread(threadPackage);
  }

  render (){
    return (
      <form onSubmit={this.submitForm} >
        {/* <input type="text" placeholder='Enter Title' ref='threadTitle' /> */}
        <input type="text" placeholder='Add Picture url' ref='picUrl' />
        <textarea type="text" placeholder='First Message' ref='firstMessage' />
        <button className='btn btn-default btn-sm'>Create Thread</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createThread(threadPackage) {
    dispatch(addThread(threadPackage));
  },

  getThreads() {
    dispatch(getThreads());
  },

});

export default connect(null, mapDispatchToProps)(InputForm);
