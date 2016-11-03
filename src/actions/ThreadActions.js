export function addThread(thread) {
  return {
    type: 'ADD_THREAD',
    payload: thread,
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
