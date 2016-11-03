export default function (state = [], action) {
  switch (action.type) {

    case 'WHATEVER':
      return [...state, action.payload];

    default:
      return state;
  }
}
