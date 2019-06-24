export const selectKlass = klass => {
  // Return an action
  return {
    type: 'KLASS_SELECTED',
    payload: klass
  };
};
