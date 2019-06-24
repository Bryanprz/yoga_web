import { combineReducers } from 'redux';

const selectedKlassReducer = (selectedKlass = null, action) => {
  if (action.type === 'KLASS_SELECTED') {
    return action.payload;
  }

  return selectedKlass;
};

export default combineReducers({
  selectedKlass: selectedKlassReducer
});
