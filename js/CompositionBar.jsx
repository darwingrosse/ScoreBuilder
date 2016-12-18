const React = require('react')
const CompGenButton = require('./CompGenButton.jsx')

const CompositionBar = React.createClass({
  render () {
    return (
      <div className='well'>
        <div className='col-md-8'>
          <b>Composition Name:</b> {this.props.name} <br />
             <i>For more information, check out Tom's posting
             <a href="https://medium.com/music-thing-modular-notes/how-i-recorded-an-album-in-an-evening-with-a-lunchbox-modular-and-a-python-script-443ca08f34da"> on Medium.com</a></i>
        </div>
        <div className='col-md-4'>
          <CompGenButton func={this.props.gen} />
        </div>
        <br /><br />
      </div>
    )
  }
})

module.exports = CompositionBar

// <div className='row bg-info'>
