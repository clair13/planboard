import React, { Component } from 'react';
import './App.css';
import PlansContainer from './components/PlansContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Plan Board</h1>
        </div>
        <PlansContainer />
      </div>
    );
  }
}

export default App;
