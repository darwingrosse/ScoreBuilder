const React = require('react')

const CompGenButton = React.createClass({
  render () {
    return (
      <button type='button' className='btn btn-primary pull-right' onClick={this.props.func} >
        Generate New
      </button>
    )
  }
})

module.exports = CompGenButton
