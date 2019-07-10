export const selectKlass = klass => {
  // Return an action
  return {
    type: 'KLASS_SELECTED',
    payload: klass
  };
};

export const authorizeUser = user => {
  return {
    type: 'AUTHORIZE_USER',
    payload: user
  }
};
