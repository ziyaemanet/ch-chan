export default function (state = [], action) {
  const { type, payload } = action;
  switch (type) {

    case 'ADD_THREAD_FULFILLED':
      return payload.data;

    case 'GET_THREADS_FULFILLED':
      return payload.data;

    default:
      return state;
  }
}
