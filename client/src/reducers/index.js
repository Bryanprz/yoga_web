import { combineReducers } from 'redux';

const selectedKlassReducer = (selectedKlass = null, action) => {
  if (action.type === 'KLASS_SELECTED') {
    return action.payload;
  }

  return selectedKlass;
};

const currentUserReducer = (user = null, action) => {
  if (action.type === 'AUTHORIZE_USER') {
    return action.payload;
  }

  return user;
};

export default combineReducers({
  selectedKlass: selectedKlassReducer,
  currentUser: currentUserReducer
});
