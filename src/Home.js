import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          Username:
        </div>
        <input />
        <div>
          Password:
        </div>
        <input />
        <div>
          <button>
            Login
          </button>
        </div>
        <button> Create New User </button>
      </div>
    );
  }
}

export default Home;