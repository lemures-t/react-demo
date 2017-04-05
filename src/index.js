import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import YTsearch from 'youtube-api-search';

const API_KEY = "AIzaSyADzOXu-qtJ8Ca0LkF61L77uQlEQqll3cY";

const throttle = (fn, delay) => {
  var timer = null;
  return function(){
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(context, args);
    }, delay);
  };
};



/*import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';*/

/*import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));*/


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo:null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTsearch({key:API_KEY,term:term},(videos) => {
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      })
    })
  }

  render(){

    var videoSearch = throttle((term)=>{
      this.videoSearch(term)
    },500);

    console.log(videoSearch)

    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect = { (selectedVideo) => this.setState({selectedVideo}) } videos={this.state.videos}/>
      </div>
    )
  }

}


ReactDOM.render(<App />, document.querySelector('.container'));
