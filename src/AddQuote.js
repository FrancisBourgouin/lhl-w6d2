import React from 'react';

const AddQuote = props => {
  return (
    <div className="container">
      <h1>Add a New Quote</h1>

      <form method="post" action="/quotes">
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
