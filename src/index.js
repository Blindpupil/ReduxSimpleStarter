import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <SearchBar/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));

