import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      countries: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/countries`)
    .then((response) => {
      return response.json()
    })
    .then((countries) => {
      this.setState({ countries: countries })
    })
  }

  render() {
    const countryList = this.state.countries.map((country, i) => {
      return <li key={i}>{country.name}</li>
    })
    return (
      <div className="App">
         <h1>Country List</h1>
         <ul>
           {countryList}
         </ul>
      </div>
    );
  }
}

export default App;
