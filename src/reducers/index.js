import {combineReducers} from 'redux';

import Articles from './articalsReducer';

const rootReducer = combineReducers({
  Articles,
});

export default rootReducer;
