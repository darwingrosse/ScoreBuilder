const React = require('react')
const LineItem = require('./LineItem')

const TrackItem = React.createClass({
  render () {
    const obj = this.props.obj
    return (
      <tr>
        <td>
          Track {this.props.num}: <b>{obj.name}</b> <br /><br />
          Mood: {obj.mood} <br />
          Source: {obj.source} <br />
          Filter: {obj.filter} <br />
          Modulation: {obj.modulation} <br />
          Slope: {obj.slope} <br />
          Resonance: {obj.resonance} <br />
          Chords: {obj.chords} <br />
          Sequence: {obj.sequence}
        </td>
        <td style={{letterSpacing: 2 + 'px'}}>
          <br /><br />
          {obj.lines.map(function (object, i) {
            return <LineItem obj={object} key={i} />
          })}
        </td>
      </tr>
    )
  }
})

module.exports = TrackItem

/*
<td>
  <samp>
    {obj.lines.map(function (object, i) {
      return object + <br />
    })}
  </samp>
</td>
*/
