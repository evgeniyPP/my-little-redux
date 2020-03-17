function thunkMiddleware(dispatch, action) {
  if (typeof action === 'object') {
    return action;
  }

  if (typeof action === 'function') {
    action(dispatch);
    return { type: 'THUNK_MIDDLEWARE' };
  }
}

module.exports = { thunkMiddleware };
