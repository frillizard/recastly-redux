import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
  return () => { 
    searchYouTube({YOUTUBE_API_KEY, q}, (data) => {
      changeVideoList(data);
      changeVideo(data[0]);
    });
  };
};

export default handleVideoSearch;
