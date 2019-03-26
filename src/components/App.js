import React, { Component } from 'react';
import APIUnsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await APIUnsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({
      images: response.data.results
    });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.images.length > 0 && (
          <ImageList images={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
