import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Movie Quotes</h1>

        <div className="accordion" id="quote-list">
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#d9424e04-9df6-4b76-86cc-9069ca8ee4bb"
                  aria-expanded="false"
                  aria-controls="collapseTwo">
                  Why so serious?
                </button>
              </h5>

              <span>
                <form
                  method="get"
                  action="/quotes/d9424e04-9df6-4b76-86cc-9069ca8ee4bb">
                  <input
                    type="submit"
                    className="btn btn-secondary btn-sm"
                    value="Edit"
                  />
                </form>

                <form
                  method="post"
                  action="/quotes/d9424e04-9df6-4b76-86cc-9069ca8ee4bb?_method=DELETE">
                  <input
                    type="submit"
                    className="btn btn-secondary btn-sm"
                    value="Delete"
                  />
                </form>
              </span>
            </div>
            <div
              id="d9424e04-9df6-4b76-86cc-9069ca8ee4bb"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#quote-list"
              aria-expanded="false"
              style={{ height: '0px' }}>
              <div className="card-body">
                <h4>Comments</h4>

                <ul className="list-group">
                  <li className="list-group-item">
                    So awesome comment!
                    <span>
                      <form
                        method="get"
                        action="/comments/70fcf8bd-6cb0-42f3-9887-77aa9db4f0ac/update">
                        <input
                          type="submit"
                          className="btn btn-secondary btn-sm"
                          value="Edit"
                        />
                      </form>

                      <form
                        method="post"
                        action="/comments/70fcf8bd-6cb0-42f3-9887-77aa9db4f0ac?_method=DELETE">
                        <input
                          type="submit"
                          className="btn btn-secondary btn-sm"
                          value="Delete"
                        />
                      </form>
                    </span>
                  </li>
                </ul>

                <a
                  href="/quotes/d9424e04-9df6-4b76-86cc-9069ca8ee4bb/comments/new"
                  className="btn btn-info">
                  Add Comment
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="/quotes/new" className="btn btn-primary">
          Add Quote
        </a>
      </div>
    );
  }
}

export default App;
