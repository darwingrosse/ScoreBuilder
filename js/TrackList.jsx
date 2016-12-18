const React = require('react')
const TrackItem = require('./TrackItem')

const TrackList = React.createClass({
  render () {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Track List</h3>
        </div>
        <div className='panel-body'>
          <table className='table table-bordered'>
            <tbody>
              {this.props.score.tracks.map(function (object, i) {
                return <TrackItem obj={object} num={i+1} key={i} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
})

module.exports = TrackList
