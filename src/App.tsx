import * as React from 'react';
import './App.css';

import WelcomeComponent from './Components/Welcome';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <WelcomeComponent />
          <h1 className="App-title">Welcome to Electron/React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
