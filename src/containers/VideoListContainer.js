import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapStatetoProps = state => {
  return {
    videos: state.videoList
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    handleVideoListEntryTitleClick: () => {
      dispatch(changeVideo);
    }
  };
};

var VideoListContainer = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(VideoList);

export default VideoListContainer;
