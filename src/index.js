import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyA94Kexu7rSxvx2OaT4NkzLALiMW5Pac3A";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedVideo : null,
      videos:[]
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo : videos[0]  
      });
    });
  }

    render() {
      return(
        <div>
          <SearchBar />
          <VideoDetail  video={this.state.selectedVideo}/>
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));
