import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      products: [
        {
          id: 1,
          url: 'blah',
          name: 'blue',
          price: 1
        },
        {
          id: 2,
          url: 'bla',
          name: 'blu',
          price: 2
        },
        {
          id: 3,
          url: 'bl',
          name: 'ba',
          price: 3
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="dashboard-form">
          <Dashboard
          products={this.state.products} />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
