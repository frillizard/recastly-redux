import Redux from 'redux';

var sampleData = [];

var videoListReducer = (state = sampleData, action) => {
  switch (action.type) {
  case ('CHANGE_VIDEO_LIST'):
    return action.videos;
  default: 
    return state;
  }
};

export default videoListReducer;
