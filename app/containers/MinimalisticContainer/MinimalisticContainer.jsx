import React from 'react';

class MinimalisticContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      scores: [0, 0],
      timeRemainingSeconds: 0,
    };
    this.fetchPoints();
  }

  fetchPoints() {
    // Fetch Abakus' points
    fetch('https://wcg-api.byrkje.land/challenges/8183').then(response => response.json())
    .then((parsedResponse) => {
      if (parsedResponse.unavailable) {
        this.setState({
          unavailable: true,
          timeRemainingSeconds: parseInt(parsedResponse.unavailable.timeRemainingSeconds, 10),
        });
        return;
      }

      const teams = parsedResponse.teamChallenge.scoreboard;
      const abakusScore = parseInt(teams.filter(t => t.teamId === '2TXCT2Z972')[0].score, 10);
      const onlineScore = parseInt(teams.filter(t => t.teamId === '3KWRNGFL72')[0].score, 10);
      this.setState({
        scores: [abakusScore, onlineScore],
        unavailable: false,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const sum = this.state.scores[0] + this.state.scores[1];

    if (sum === 0 || this.state.unavailable) {
      const minutes = Math.floor(this.state.timeRemainingSeconds / 60);
      const seconds = this.state.timeRemainingSeconds - (minutes * 60);
      const timeRemaining = `${minutes} min ${seconds} s`;

      return (
        <div className="score-div score-div-error">
          <div className="center-div">
            <h1>
              {this.state.unavailable
                ? `World Community Grid er utilgjengelig i resterende ${timeRemaining}.`
                : 'Mottok ingen poeng.' }
            </h1>
          </div>
        </div>);
    }

    const abakusWidth = Math.round((100 * this.state.scores[0]) / sum);
    const onlineWidth = 100 - abakusWidth;

    const abakusStyle = {
      left: 0,
      backgroundColor: '#b1281c',
      width: `${abakusWidth}%`,
    };

    const onlineStyle = {
      backgroundColor: '#004b80',
      width: `${onlineWidth}%`,
      float: 'right',
      right: 0,
    };

    return (
      <div>
        <div className="score-div" style={abakusStyle}>
          <div className="center-div">
            <h1>{abakusWidth}%</h1>
          </div>
        </div>
        <div className="score-div" style={onlineStyle}>
          <div className="center-div">
            <h1>{onlineWidth}%</h1>
          </div>
        </div>
      </div>);
  }

}

export default MinimalisticContainer;
