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
    fetch('http://wcg-api.byrkje.land/challenges/8183').then(response => response.json())
    .then((parsedResponse) => {
      this.setState({
        scores: parsedResponse.teamChallenge.scoreboard.map(item => parseInt(item.score, 10)),
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <BarChart data={this.state.scores} />;
      </div>);
  }

}

export default ChallengeContainer;
