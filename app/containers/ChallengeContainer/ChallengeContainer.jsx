import React from 'react';
import BarChart from '../../components/BarChart/BarChart';

class ChallengeContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      scores: [0, 0],
    };
    this.fetchPoints();
  }

  fetchPoints() {
    // Fetch Abakus' points
    fetch('https://wcg-api.byrkje.land/challenges/8183').then(response => response.json())
    .then((parsedResponse) => {
      const teams = parsedResponse.teamChallenge.scoreboard;
      const abakusScore = parseInt(teams.filter(t => t.teamId === '2TXCT2Z972')[0].score, 10);
      const onlineScore = parseInt(teams.filter(t => t.teamId === '3KWRNGFL72')[0].score, 10);
      this.setState({
        scores: [abakusScore, onlineScore],
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <BarChart data={this.state.scores} />
      </div>);
  }

}

export default ChallengeContainer;
