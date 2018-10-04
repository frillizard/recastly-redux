import Redux from 'redux';

let defaultState = null;

var currentVideoReducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO': 
    return action.video;
  default: 
    return state;
  }
};

export default currentVideoReducer;
