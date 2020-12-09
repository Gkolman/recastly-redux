import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  return function(dispatch) {
    console.log('dispatch - > ', dispatch);
    searchYouTube({
      'key': YOUTUBE_API_KEY,
      'q': q,
      'max': 5
    }, (data) => console.log('data -> ', data));
    // TODO:  Write an asynchronous action to handle a video search!
  };
};
export default handleVideoSearch;
