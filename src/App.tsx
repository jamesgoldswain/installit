import * as React from 'react';
import './App.css';

import WelcomeComponent from './Components/Welcome'

export default class App extends React.Component {

  public render() {

    return (
      <div className="App">
       
        <header className="App-header">
          <h1>Install It</h1>
        </header>
       
        <WelcomeComponent />

      </div>
    );
  }
}
