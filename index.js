export function createStore(reducer, initialState) {
  let _state;
  const _listeners = [];

  const _isObject = value => {
    if (typeof value === 'object' && value !== null) {
      return true;
    }
    return false;
  };

  const _setInitialState = () => {
    if (_isObject(initialState)) {
      _state = initialState;
    } else {
      throw new Error('Initial state is incorrect');
    }
  };

  const dispatch = action => {
    const newState = reducer(action);

    if (_isObject(newState)) {
      _state = newState;
    } else {
      throw new Error('Reducer returns incorrect value');
    }

    _listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    if (typeof listener === 'function') {
      _listeners.push(listener);
      return true;
    }
    return false;
  };

  const getState = () => {
    return _state;
  };

  _setInitialState();

  return {
    dispatch,
    subscribe,
    getState
  };
}
