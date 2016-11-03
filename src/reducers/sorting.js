export default function (state = 'added', action) {
  switch (action.type) {
    case 'BY_RATING':
      return 'rating';
    case 'BY_ADDED':
      return 'added';
    default:
      return state;
  }
}
