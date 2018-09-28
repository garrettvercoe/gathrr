import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import ArticleDisplay from './components/ArticleDisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleDisplay />
      </div>
    );
  }
}

export default App;
