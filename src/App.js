import React, {useState} from 'react';
import './App.css';
import {Form,Button, Segment} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
  
function App () {

const [pokemon, setPokemon] = useState(null);

const fetchPokemon = () => {

  const getpokemonurl = id =>`https://pokeapi.co/api/v2/pokemon/${id}`
  const pokemonPromises = []

for (let i=1; i<= 150; i++) {
  pokemonPromises.push(fetch(getpokemonurl(i)).then(response => response.json()))
  }

  Promise.all(pokemonPromises)
    .then(pokemons => {
      const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)

        accumulator += 
        `
        <li class="card ${types[0]}">
          <img class="card-image"  alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
          <h2 class="card-tittle">${pokemon.id}. ${pokemon.name}</h2>
          <p class="card-subtitle">${pokemon.types.map(typeInfo => typeInfo.type.name).join(' | ')}</p>
        </li>
        `
        return accumulator
      }, '')

      const ul = document.querySelector('[data-js="pokedex"]')

      ul.innerHTML = lisPokemons
    })}

    const enviar = async (event) => {
      const id = event.target.value 
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => {
        return res.json()
        }
    
      
      )
    setPokemon(response)
    
    }
    

    fetchPokemon();
  

  return (

  <div>
        {console.log(pokemon)}
  <div className="navbar"><b>Pokedex PokeAPI</b></div>
  <div className="Pesquisa">
  <Form>
    <Form.Group>
      <Form.Input placeholder='Nome de usuário' name='Pokemon' onChange={enviar} />
      <Form.Button content='Search'/>
    </Form.Group>
    </Form>
  </div>
  <div>
    <Segment inverted>
      <Button inverted>Normal</Button>
      <Button inverted color='red'>
        Fogo
      </Button>
      <Button inverted color='orange'>
        Inseto
      </Button>
      <Button inverted color='yellow'>
        Eletrico
      </Button>
      <Button inverted color='olive'>
        Voador
      </Button>
      <Button inverted color='green'>
        Grama
      </Button>
      <Button inverted color='teal'>
        Dragão
      </Button>
      <Button inverted color='blue'>
        Água
      </Button>
      <Button inverted color='blue'>
        Gelo
      </Button>
      <Button inverted color='violet'>
        Psíquico
      </Button>
      <Button inverted color='violet'>
        Fantasma
      </Button>
      <Button inverted color='purple'>
        Venenoso
      </Button>
      <Button inverted color='pink'>
        Fada
      </Button>
      <Button inverted color='brown'>
        Terra
      </Button>
      <Button inverted color='grey'>
        Ferro
      </Button>
      <Button inverted color='black'>
        Trevas
      </Button>
    </Segment>
    </div>
  <ul data-js="pokedex" class="pokedex"></ul>
  </div>
  )
  };
export default App;

