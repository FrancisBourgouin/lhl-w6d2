import React from 'react';

const AddQuote = ({ addNewQuote }) => {
  const handleSubmit = event => {
    event.preventDefault();

    // extracting the value from the input box
    const inputQuote = event.target.elements.quote;

    // Send the value to the App component
    addNewQuote(inputQuote.value);
  };

  return (
    <div className="container">
      <h1>Add a New Quote</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ width: '20em' }}>
          <div className="form-group">
            <input
              style={{ width: '100%' }}
              type="text"
              name="quote"
              id="quote"
              placeholder="Please enter your quote"
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default AddQuote;
