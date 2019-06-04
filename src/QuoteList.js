import React from 'react';
import Quote from './Quote';

const QuoteList = ({ quotes }) => {
  // create an array of quote components

  const quoteComponents = quotes.map(quoteObj => (
    <Quote
      key={quoteObj._id}
      id={quoteObj._id}
      content={quoteObj.quote}
      comments={quoteObj.comments}
    />
  ));

  return (
    <div className="accordion" id="quote-list">
      {quoteComponents}
    </div>
  );
};

export default QuoteList;
