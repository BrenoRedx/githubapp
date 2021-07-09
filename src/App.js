import React from 'react';
//import axios from 'axios';
//import { render } from '@testing-library/react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import FormExampleForm from './Search.js';

/*const api = {
  baseUrl : "https://api.github.com",
  user: prompt("Digite o nome do usuário no github")
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
    .get(api.baseUrl+"/users/"+api.user+"/repos") 
    .then((res) => {
      console.log("Infos da API" , res.name);
      this.setState({githubData: res.name});
    })
  }

render() {
  const { githubData } = this.state;
*/
function App () {


  return (
    <div>
    <div className="navbar">Barra de pesquisa</div>
    <div className="Pesquisa"><FormExampleForm /></div>
    </div>
  )
}  
export default App;
