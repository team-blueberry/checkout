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
    };

    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.deletePokemon = this.deletePokemon.bind(this);
    this.onChange = this.onChange.bind(this);
    this.filterByType = this.filterByType.bind(this);
    this.createPokemon = this.createPokemon.bind(this);
  }

  getAllPokemon() {
    axios.get('/api/pokemon').then(res => {
      console.log('got data from db');
      const data = res.data;
      console.log('data', data);
      this.setState({ pokemon: data });
      console.log(this.state);
    }).catch(err => {
      console.log('error with getting pokemon');
      console.log(err);
    });
  }

  deletePokemon(event) {
    console.log('running func');
    axios.post('/api/pokemon/delete', { number: event.target.id }).then(res => {
      console.log('deleted!!');
      this.getAllPokemon();
    }).catch(err => {
      console.log('error deleting');
    });
  }
  deleteAll() {
    var conformation = prompt('Are you sure you want to delete all the pokemon (y/n)');
    if (conformation === 'Y' || conformation === 'y') {
      axios.get('/api/pokemon/deleteAll').then(res => {
        console.log('all deleted');
        this.getAllPokemon();
      }).catch(err => {
        console.log('deleting all');
      });
    }
  }

  filterByType() {
    if (this.state.filter === '') {
      this.getAllPokemon();
    } else {
      const filtered = this.state.pokemon.filter(p => p.types.includes(this.state.filter));
      console.log('filtered = ', filtered);
      this.setState({ pokemon: filtered });
    }
  }

  createPokemon() {
    var name = prompt('Choose name');
    var type = prompt('Choose type(s), seperate by space');
    var imageUrl = prompt('enter image');
    type = type.split(' ');
    axios.post('/api/pokemon/createPokemon', { name: name, type: type, imageUrl: imageUrl }).then(data => {
      console.log('created');
      this.getAllPokemon();
    }).catch(err => {
      console.log('error creating db.');
    });
  }

  componentDidMount() {
    this.getAllPokemon();
  }

  onChange(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    return React.createElement(
      'ul',
      null,
      React.createElement(
        'button',
        { type: 'button', onClick: this.deleteAll },
        'Delete All'
      ),
      React.createElement('br', null),
      React.createElement(
        'form',
        null,
        'Filter :',
        React.createElement('input', { value: this.state.filter, onChange: this.onChange }),
        React.createElement(
          'button',
          { type: 'button', onClick: this.filterByType },
          'Submit'
        )
      ),
      React.createElement(
        'button',
        { type: 'button', onClick: this.createPokemon },
        'Add Pokemon'
      ),
      this.state.pokemon.map(pokemon => {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'li',
            null,
            pokemon.name,
            ' ---- ',
            pokemon.types
          ),
          React.createElement('img', { src: pokemon.imageUrl, height: '80', width: '80' }),
          React.createElement(
            'button',
            { type: 'button', id: pokemon.number, onClick: this.deletePokemon },
            'Remove'
          )
        );
      })
    );
  }

}
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlYWN0LWNsaWVudC9zcmMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJheGlvcyIsIlN0YXJ0ZXIiLCIkIiwiQXBwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwicG9rZW1vbiIsImZpbHRlciIsImdldEFsbFBva2Vtb24iLCJiaW5kIiwiZGVsZXRlUG9rZW1vbiIsIm9uQ2hhbmdlIiwiZmlsdGVyQnlUeXBlIiwiY3JlYXRlUG9rZW1vbiIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInNldFN0YXRlIiwiY2F0Y2giLCJlcnIiLCJldmVudCIsInBvc3QiLCJudW1iZXIiLCJ0YXJnZXQiLCJpZCIsImRlbGV0ZUFsbCIsImNvbmZvcm1hdGlvbiIsInByb21wdCIsImZpbHRlcmVkIiwicCIsInR5cGVzIiwiaW5jbHVkZXMiLCJuYW1lIiwidHlwZSIsImltYWdlVXJsIiwic3BsaXQiLCJjb21wb25lbnREaWRNb3VudCIsInZhbHVlIiwicmVuZGVyIiwibWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsV0FBckI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7QUFDQSxPQUFPQyxDQUFQLE1BQWMsUUFBZDs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCTCxNQUFNTSxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVMsRUFERTtBQUVYQyxjQUFRO0FBRkcsS0FBYjs7QUFLQSxTQUFLQyxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FB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LE9BQWhCLEVBQXlCRSxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBTdGFydGVyIGZyb20gJy4vY29tcG9uZW50cy9zdGFydGVyLmpzeCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9rZW1vbjogW10sXG4gICAgICBmaWx0ZXI6ICcnXG4gICAgfVxuXG4gICAgdGhpcy5nZXRBbGxQb2tlbW9uID0gdGhpcy5nZXRBbGxQb2tlbW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZWxldGVQb2tlbW9uID0gdGhpcy5kZWxldGVQb2tlbW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckJ5VHlwZSA9IHRoaXMuZmlsdGVyQnlUeXBlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVQb2tlbW9uID0gdGhpcy5jcmVhdGVQb2tlbW9uLmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIGdldEFsbFBva2Vtb24oKSB7XG4gICAgYXhpb3MuZ2V0KCcvYXBpL3Bva2Vtb24nKVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZ290IGRhdGEgZnJvbSBkYicpO1xuICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Bva2Vtb246IGRhdGF9KTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycj0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciB3aXRoIGdldHRpbmcgcG9rZW1vbicpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlUG9rZW1vbihldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIGZ1bmMnKTtcbiAgICBheGlvcy5wb3N0KCcvYXBpL3Bva2Vtb24vZGVsZXRlJywge251bWJlciA6IGV2ZW50LnRhcmdldC5pZH0pXG4gICAgLnRoZW4oIHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZGVsZXRlZCEhJyk7XG4gICAgICB0aGlzLmdldEFsbFBva2Vtb24oKTtcbiAgICB9KVxuICAgIC5jYXRjaCAoZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBkZWxldGluZycpO1xuICAgIH0pXG4gIH1cbiAgZGVsZXRlQWxsKCkge1xuICAgIHZhciBjb25mb3JtYXRpb24gPSBwcm9tcHQoJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHRoZSBwb2tlbW9uICh5L24pJyk7XG4gICAgaWYgKGNvbmZvcm1hdGlvbiA9PT0gJ1knIHx8IGNvbmZvcm1hdGlvbiA9PT0gJ3knKSB7XG4gICAgICBheGlvcy5nZXQoJy9hcGkvcG9rZW1vbi9kZWxldGVBbGwnKVxuICAgICAgLnRoZW4oIHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGwgZGVsZXRlZCcpO1xuICAgICAgICB0aGlzLmdldEFsbFBva2Vtb24oKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGluZyBhbGwnKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZmlsdGVyQnlUeXBlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmZpbHRlciA9PT0gJycpIHtcbiAgICAgIHRoaXMuZ2V0QWxsUG9rZW1vbigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5zdGF0ZS5wb2tlbW9uLmZpbHRlcihwID0+IHAudHlwZXMuaW5jbHVkZXModGhpcy5zdGF0ZS5maWx0ZXIpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJlZCA9ICcsIGZpbHRlcmVkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Bva2Vtb246IGZpbHRlcmVkfSk7XG4gICAgfVxuICB9XG5cbiAgICBjcmVhdGVQb2tlbW9uKCkge1xuICAgICAgdmFyIG5hbWUgPSBwcm9tcHQoJ0Nob29zZSBuYW1lJyk7XG4gICAgICB2YXIgdHlwZSA9IHByb21wdCgnQ2hvb3NlIHR5cGUocyksIHNlcGVyYXRlIGJ5IHNwYWNlJyk7XG4gICAgICB2YXIgaW1hZ2VVcmwgPSBwcm9tcHQoJ2VudGVyIGltYWdlJyk7XG4gICAgICB0eXBlID0gdHlwZS5zcGxpdCgnICcpO1xuICAgICAgYXhpb3MucG9zdCgnL2FwaS9wb2tlbW9uL2NyZWF0ZVBva2Vtb24nLCB7bmFtZTogbmFtZSwgdHlwZTogdHlwZSwgaW1hZ2VVcmw6IGltYWdlVXJsfSlcbiAgICAgIC50aGVuKCBkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZWQnKTtcbiAgICAgICAgdGhpcy5nZXRBbGxQb2tlbW9uKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgY3JlYXRpbmcgZGIuJyk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5nZXRBbGxQb2tlbW9uKCk7XG4gICAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyOmV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDx1bD5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuZGVsZXRlQWxsfT5EZWxldGUgQWxsPC9idXR0b24+PGJyLz5cbiAgICAgIDxmb3JtPlxuICAgICAgRmlsdGVyIDpcbiAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJ9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfT48L2lucHV0PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5maWx0ZXJCeVR5cGV9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5jcmVhdGVQb2tlbW9ufT5BZGQgUG9rZW1vbjwvYnV0dG9uPlxuICAgICAgICB7dGhpcy5zdGF0ZS5wb2tlbW9uLm1hcChwb2tlbW9uID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxpPntwb2tlbW9uLm5hbWV9IC0tLS0ge3Bva2Vtb24udHlwZXN9PC9saT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Bva2Vtb24uaW1hZ2VVcmx9ICBoZWlnaHQ9JzgwJyB3aWR0aD0nODAnLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9e3Bva2Vtb24ubnVtYmVyfSBvbkNsaWNrPXt0aGlzLmRlbGV0ZVBva2Vtb259PlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgKVxuICB9XG5cbn1cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19