var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index.js');
var Link = require('react-router').Link;

function puke(object) {
  return <pre> {JSON.stringify(object, null, '')} </pre>
}

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p> Loading! </p>
    : <div className="jumotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-6">
            <p className="lead">Player 1</p>
            {puke(props.playersInfo[0])}
          </div>
          <div className="col-sm-6">
            <p className="lead">Player 2</p>
            {puke(props.playersInfo[1])}
          </div>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}>
            <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle} >
              Initiate battle
            </button>
          </div>
          <div className="col-sm-12" style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>
                Reselect Player
              </button>
            </Link>

          </div>
        </div>
      </div>
  // return <p>His</p>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
