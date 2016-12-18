var React = require('react')
var ReactDOM = require('react-dom')

const CompositionBar = require('./CompositionBar')
const TrackListing = require('./TrackList')
const genScore = require('./ScoreCreate')

var score = genScore()

var AppComponent = React.createClass({
  getInitialState: function () {
    return {
      score: genScore()
    }
  },

  newScore: function () {
    this.setState({score: genScore()})
  },

  render: function () {
    return (
      <div>
        <br />
        <CompositionBar name={score.name} gen={this.newScore} />
        <TrackListing score={score} />
      </div>
    )
  }

})

ReactDOM.render(<AppComponent />, document.getElementById('app'))
