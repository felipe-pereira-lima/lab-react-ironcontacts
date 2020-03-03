import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Celebrity from './Component/Celebrity';

class App extends Component {
  constructor() {
    super();
    this.state = {
      celebrities: contacts.slice(0, 5)
    };
    this.addName = this.addName.bind(this);
  }

  addName() {
    const name = contacts[Math.floor(Math.random() * contacts.length)];

    this.setState({
      celebrities: [...this.state.celebrities, name]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addName}>Add Random Contact</button>
        {console.log('oi')}
        <table>
          <thead>
            <tr>
              <th>picture</th>
              <th>name</th>
              <th>popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.celebrities.map(val => {
              return <Celebrity info={val} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
