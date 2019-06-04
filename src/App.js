import React, { Component } from 'react';
import './App.css';
import QuoteList from './QuoteList';
import AddQuote from './AddQuote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quotes: [] };
  }

  componentDidMount() {
    // fetch request to get the data from db

    fetch('http://localhost:8000/quotes')
      .then(result => result.json())
      .then(quoteArr => this.setState({ quotes: quoteArr }))
      .catch(error => console.log('Error:', error))
      .finally(() => console.log('fetch quotes request completed.'));

    // we need update the state
  }

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
