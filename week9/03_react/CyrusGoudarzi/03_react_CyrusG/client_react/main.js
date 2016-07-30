var React    = require('react');
var ReactDOM = require('react-dom');
var request  = require('superagent');

//Establish parent element that will choose which component to render
var Router = React.createClass({
  getInitialState: function() {
    return {
      existing: false,
      currentWhale: null
    }
  },
  existence: function(whale) {
    var self = this,
    state = this.state;

    request.post('/whales/')
    .type('form')
    .send({
      // type: whale.type,
      diet: whale.diet,
      image_url: whale.image_url
    })
    .end(function(err, response) {
      if (err) {
        alert('ERROR');
      } else {
        response = JSON.parse(response.text);
        state.existing = true;
        state.currentWhale = response.id

        self.setState(state);
      }
    })
  },
  render: function() {
    return (
        <div className="container" >
          {this.state.existing ? <WhaleView userid={this.state.currentWhale}/> : <WhaleForm exist={this.existence} />}
        </div>
      );
  }
});

//Create child component of form to create whales
var WhaleForm = React.createClass({
  getInitialState: function() {
    return {
      // type: '',
      diet: '',
      image_url: ''
    }
  },
  updateType: function(e) {
    var state = this.state;
    // state.type = e.target.value;

    this.setState(state);
    console.log(this.state)
  },
  updateDiet: function(e) {
    var state = this.state;
    state.diet = e.target.value;

    this.setState(state);
    console.log(this.state)
  },
  updateImage_URL: function(e) {
    var state = this.state;
    state.image_url = e.target.value;

    this.setState(state);
    console.log(this.state)
  },
  exist: function(e) {
    e.preventDefault();
    var whale = this.state;
    this.props.exist(whale);
  },
  render: function() {
    return(
        <form action='#' method="post">
          <input type="text" name="type" placeholder="Enter your type" onChange={this.updateType}/>
          <br />      
          <input type="text" name="diet" placeholder="Enter your diet" onChange={this.updateDiet}/>
          <br />
          <input type="text" name="image_url" placeholder="Enter a link to your photo" onChange={this.updateImage_URL}/>
          <br />
          <button onClick={this.exist}>Add your whale</button>
        </form>
      )
  }
});

var WhaleView = React.createClass({
  componentDidMount: function() {
    var self = this,
        state = this.state;

    request.get('/whales' + this.props.userid)
      .end(function(err, response) {
        if (err) {
          alert('ERROR');
          console.log(err);
        } else {
          response = JSON.parse(response.text)

          // state.type = response.type;
          state.diet = response.diet;
          state.image_url = response.image_url;

          self.setState(state);
        }
      })
  },
  getInitalState: function() {
    return {
      // type: null,
      diet: null,
      image_url: null
    }
  },
  render: function() {
    return (
        <div className="whaleinfo">
        <ul>
          <li>type: {this.state.type}</li>
          <li>diet: {this.state.diet}</li>
          <li>image_url: {this.state.image_url}</li>
        </ul>
        </div>
      );
  }
})

ReactDOM.render(<Router />, document.getElementById("react-app"))
