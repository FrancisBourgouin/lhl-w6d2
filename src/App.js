import React, { Component } from 'react';
import './App.css';
import QuoteList from './QuoteList';
import AddQuote from './AddQuote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quotes: [] };
  }

  addNewQuote = quoteContent => {
    // create a post request to the database

    const newQuote = {
      quote: quoteContent,
    };

    fetch('/quotes', {
      method: 'POST',
      body: JSON.stringify(newQuote),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      // the db is going to return a full quote object
      // Add the new quote obj to the state
      .then(quote => this.setState({ quotes: [quote, ...this.state.quotes] }));
  };

  componentDidMount() {
    // fetch request to get the data from db

    fetch('/quotes')
      .then(result => result.json())
      // we need update the state
      .then(quoteArr => this.setState({ quotes: quoteArr }))
      .catch(error => console.log('Error:', error))
      .finally(() => console.log('fetch quotes request completed.'));
  }

  render() {
    return (
      <div className="container">
        <h1>Movie Quotes</h1>
        <QuoteList quotes={this.state.quotes} />
        <AddQuote addNewQuote={this.addNewQuote} />
      </div>
    );
  }
}

export default App;
