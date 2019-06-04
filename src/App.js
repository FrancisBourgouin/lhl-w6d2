import React, { Component } from 'react';
import './App.css';
import QuoteList from './QuoteList';
import AddQuote from './AddQuote';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Movie Quotes</h1>
        <QuoteList />
        <AddQuote />
      </div>
    );
  }
}

export default App;
