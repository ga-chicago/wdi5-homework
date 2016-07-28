var React     = require('react');
var ReactDOM  = require('react-dom');
var request   = require('superagent');


var Router = React.createClass({
  getInitialState: function() {
    return {
      registered: false,
      currentWhale: null
    };
  },
  registration: function(whale) {
    var self = this,
        state = this.state;

    request.post('/whales/')
      .type('form')
      .send({
        length: whale.length,
        weight: whale.weight,
        name: whale.name
      })
      .end(function(err, response) {
        if (err) {
          console.log(err);
          alert('ERROR');
        } else {
          response = JSON.parse(response.text);
          state.registered  = true;
          state.currentWhale = response.id

          console.log(response);

          self.setState(state);
        }
      });
  location.reload();
  },
  render: function() {
    return (
      <div className="container">
        <RegisterForm register={this.registration} />
      </div>
    );
  }
});

var RegisterForm = React.createClass({
  getInitialState: function() {
    return {
      length: '',
      weight: '',
      name: ''
    }
  },
  updateLength: function(e) {
    var state = this.state;
    state.length = e.target.value;

    this.setState(state);
    console.log(this.state);
  },
  updateWeight: function(e) {
    var state = this.state;
    state.weight = e.target.value;

    this.setState(state);
    console.log(this.state);
  },
  updateName: function(e) {
    var state = this.state;
    state.name = e.target.value;

    this.setState(state);
    console.log(this.state);
  },
  register: function(e) {
    e.preventDefault();
    var whale = this.state;
    this.props.register(whale);
  },
  render: function() {
    return (
      <form action="#" method="post">
        <input type="text" name="length" placeholder="length" onChange={this.updateLength} />
        <br />
        <input type="text" name="weight" placeholder="weight" onChange={this.updateWeight} />
        <br />
        <input type="text" name="name" placeholder="Name" onChange={this.updateName} />
        <br />
        <button onClick={this.register}>Add whale</button>
      </form>
    );
  }
});

var WhaleView = React.createClass({
  componentDidMount: function() {
    var self  = this,
        state = this.state;

    request.get('/whales/' + this.props.whaleid)
      .end(function(err, response) {
        if (err) {
          alert('ERROR');
          console.log(err);
        } else {
          response = JSON.parse(response.text)
          
          state.length = response.length;
          state.weight = response.weight;
          state.name = response.name;

          self.setState(state);
        }
      });
  },
  getInitialState: function() {
    return {
      length: null,
      weight: null,
      name: null
    }
  },
  render: function() {
    return (
      <div className="whaleinfo">
        <ul>
          <li>Length: {this.state.length}</li>
          <li>Weight: {this.state.weight}</li>
          <li>Name: {this.state.name}</li>
        </ul>
      </div>
    );
  }
})

ReactDOM.render(<Router />, document.getElementById('react-app'));
