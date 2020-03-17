const { createStore } = require('../index');

const initialState = {
  counter: 0
};

const reducer = (action, state) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

console.log('before: ', store.getState()); // 0
console.log(store.dispatch({ type: 'INCREMENT' }));
console.log('after: ', store.getState()); // 1
