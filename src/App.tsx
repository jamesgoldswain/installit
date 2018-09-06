import * as React from 'react';
import './App.css';

import MenuComponent from './Components/Menu'
import WelcomeComponent from './Components/Welcome'

class App extends React.Component {

  public selectOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    // tslint:disable-next-line:no-console
    console.log(event.target.value)
  }

  public render() {
    const options: string[] = [ 'One', 'Two' ]
  
    return (
      <div className="App">
        
        <header className="App-header">
          <WelcomeComponent />
        </header>
       
        <MenuComponent options={options} onSelectedItem={this.selectOption} />
      </div>
    );
  }
}

export default App;
