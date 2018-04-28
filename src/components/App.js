import React, { Component } from 'react';
// import logo from './logo.svg';
import {CompaniesComponent} from './companies/companies'
import '../App.css';

class App extends Component {
  render() {
      return(<div>
                <CompaniesComponent/>
            </div>
            );
  }
}

export default App;
