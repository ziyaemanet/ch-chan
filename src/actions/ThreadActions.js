import axios from 'axios';


export function addThread(thread) {
console.log('thread:', thread);
  return {
    type: 'ADD_THREAD',
    payload: axios.post('/api/threads', thread),
  };
}

export function getThreads() {
  return {
    type: 'GET_THREADS',
    payload: axios.get('/api/threads'),
              // .then(res => {
              //   console.log(' TEST:',res.data)
              // }),
  };
}

export function getMessages(id) {
  return {
    type: 'GET_MESSAGES',
    payload: axios.get(`/api/threads/${id}`),
  };
}

export function addMessage(id, message) {
  return {
    type: 'ADD_MESSAGE',
    payload: axios.post(`/api/threads/${id}`, message),
  };
}

export function sortName() {
  return {
    type: 'BY_NAME',
  };
}

export function sortAdded() {
  return {
    type: 'BY_ADDED',
  };
}
