const { createStore } = require('../index');
const { thunkMiddleware } = require('../thunk');

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
store.applyMiddleware(thunkMiddleware);

const asyncIncrementActionCreator = () => {
  return function(dispatch) {
    setTimeout(() => dispatch({ type: 'INCREMENT' }), 2000);
  };
};

console.log('before: ', store.getState()); // 0
store.dispatch(asyncIncrementActionCreator());
setTimeout(() => console.log('after: ', store.getState()), 2000); // 1
