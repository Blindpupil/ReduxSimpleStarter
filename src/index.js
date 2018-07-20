import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import API_KEY from './config/keys';

class App extends Component {
  constructor(props) {
    super(props);

    YTSearch({key: API_KEY, term: 'surfboard'}, (videos) =>
      console.log(videos)
    );
  }

  render() {
    return (
      <div className="container">
        <SearchBar/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
