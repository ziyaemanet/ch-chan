import React, { Component } from 'react';
import { connect } from 'react-redux';

class InputForm extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const { picUrl, threadTitle, firstMessage } = this.refs;
    let threadPackage = {
      name: threadTitle.value,
      image: picUrl.value,
      firstMessage: firstMessage.value,
    }
    // I consoled this out until we can hook it up for backend
    // this.props.createThread(threadPackage);
  }

  render (){
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" placeholder='Enter Title' ref='threadTitle' />
        <input type="text" placeholder='Add Picture url' ref='picUrl' />
        <textarea type="text" placeholder='First Message' ref='firstMessage' />
        <button className='btn btn-primary'>Create Thread</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createThread(threadPackage) {
    dispatch(createThread(threadPackage));
  },

});

export default connect(null, mapDispatchToProps)(InputForm);
