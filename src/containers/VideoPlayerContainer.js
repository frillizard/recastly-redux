import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStatetoProps = state => {
  return {
    video: state.currentVideo
  };
};

var VideoPlayerContainer = connect(
  mapStatetoProps
)(VideoPlayer);
export default VideoPlayerContainer;
