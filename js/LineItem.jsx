const React = require('react')

const LineItem = React.createClass({
  render () {
    const obj = this.props.obj
    return (
      <samp>
        {this.props.obj} <br />
      </samp>
    )
  }
})

module.exports = LineItem
