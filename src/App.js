import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';

export class App extends Component {
  constructor() {
    super()

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios
    .get('/api/inventory')
    .then((res) => {
      this.setState({
        products: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="dashboard-form">
          <div className="component-container">
            <Dashboard
            products={this.state.products} />
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
