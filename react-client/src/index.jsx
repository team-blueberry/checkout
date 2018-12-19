import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Starter from './components/starter.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      filter: ''
    }

    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.deletePokemon = this.deletePokemon.bind(this);
    this.onChange = this.onChange.bind(this);
    this.filterByType = this.filterByType.bind(this);
    this.createPokemon = this.createPokemon.bind(this);
  }


  getAllPokemon() {
    axios.get('/api/pokemon')
    .then(res => {
      console.log('got data from db');
      const data = res.data;
      console.log('data', data);
      this.setState({pokemon: data});
      console.log(this.state);
    })
    .catch(err=> {
      console.log('error with getting pokemon');
      console.log(err);
    })
  }

  deletePokemon(event) {
    console.log('running func');
    axios.post('/api/pokemon/delete', {number : event.target.id})
    .then( res => {
      console.log('deleted!!');
      this.getAllPokemon();
    })
    .catch (err => {
      console.log('error deleting');
    })
  }
  deleteAll() {
    var conformation = prompt('Are you sure you want to delete all the pokemon (y/n)');
    if (conformation === 'Y' || conformation === 'y') {
      axios.get('/api/pokemon/deleteAll')
      .then( res => {
        console.log('all deleted');
        this.getAllPokemon();
      })
      .catch( err => {
        console.log('deleting all');
      })
    }
  }

  filterByType() {
    if (this.state.filter === '') {
      this.getAllPokemon();
    }
    else {
      const filtered = this.state.pokemon.filter(p => p.types.includes(this.state.filter));
      console.log('filtered = ', filtered);
      this.setState({pokemon: filtered});
    }
  }

    createPokemon() {
      var name = prompt('Choose name');
      var type = prompt('Choose type(s), seperate by space');
      var imageUrl = prompt('enter image');
      type = type.split(' ');
      axios.post('/api/pokemon/createPokemon', {name: name, type: type, imageUrl: imageUrl})
      .then( data => {
        console.log('created');
        this.getAllPokemon();
      })
      .catch( err => {
        console.log('error creating db.');
      })
    }

    componentDidMount() {
      this.getAllPokemon();
    }

  onChange(event) {
    this.setState({filter:event.target.value});
  }

  render() {
    return(
      <ul>
      <button type="button" onClick={this.deleteAll}>Delete All</button><br/>
      <form>
      Filter :
      <input value={this.state.filter} onChange={this.onChange}></input>
      <button type="button" onClick={this.filterByType}>Submit</button>
      </form>
      <button type="button" onClick={this.createPokemon}>Add Pokemon</button>
        {this.state.pokemon.map(pokemon => {
          return (
            <div>
              <li>{pokemon.name} ---- {pokemon.types}</li>
              <img src={pokemon.imageUrl}  height='80' width='80'/>
              <button type="button" id={pokemon.number} onClick={this.deletePokemon}>Remove</button>
            </div>
          )
        })}
      </ul>
    )
  }

}
ReactDOM.render(<App />, document.getElementById('app'));
