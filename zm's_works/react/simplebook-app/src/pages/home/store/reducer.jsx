import { fromJS } from 'immutable';
const defaultState = fromJS({
  topicList: []
})

function homeReducer(state = defaultState, action) {
  switch(action.type) {
    case '':
      return '';
    default:
      return state
  }
}

export default homeReducer;