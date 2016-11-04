export default function (state = {}, action) {
  const { type, payload } = action;
  switch (type) {

    case 'GET_MESSAGES_FULFILLED':
      return payload.data;

    case 'ADD_MESSAGE_FULFILLED':
      return payload.data;

    default:
      return state;
  }
}
