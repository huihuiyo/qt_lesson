// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import homeReducer from '../pages/home/store/reducer';

// fromJS({home: ..., detail: ...})
const reducer = combineReducers({
  home: homeReducer
});
const store = createStore(reducer, applyMiddleware(thunk));
// 1. common js -> node 、 module.export

// 2. es module
// default export   // (1). 默认导出
// import .. from './index.js'

// name export   // (2). 命名导出
// export const xxx
// export { xxx, xxx }
// import { xxx } from './index.js'

// import *   // 不论默认导出还是命名导出

export default store;