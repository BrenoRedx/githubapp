import React, { Component } from 'react';
import axios from 'axios';
//import { render } from '@testing-library/react';

const api = {
  baseUrl : "https://api.github.com",
  client_id : "Iv1.72b2c1dd023adf3b",
  client_secret : "4d9e85a5359dcd4a9757023d8a2870e1262ea7a1" 
};

class App extends Component {  
  constructor() {
    super();
    this.state = {
    githubData : []
    };
  }

componentDidMount() {
  axios
    .get(api.baseUrl+"/search/repositories?q=language:Java&sort=stars&page=1&"+api.client_id+"&"+api.client_secret)
    .then((res) => {
      console.log("Infos da API" + res);
      this.setState({githubData: res.data.items});
    })
  }
render() {
  return <div className="App"></div>
  }
}
export default App;