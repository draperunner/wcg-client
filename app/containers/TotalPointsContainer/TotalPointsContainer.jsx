import React from 'react';
import BarChart from '../../components/BarChart/BarChart';

class TotalPointsContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      abakusPoints: 0,
      onlinePoints: 0,
    };
    this.fetchPoints();
  }

  fetchPoints() {
    // Fetch Abakus' points
    fetch('http://wcg-api.byrkje.land/teams/2TXCT2Z972').then(response => response.json())
    .then((parsedResponse) => {
      this.setState({
        abakusPoints: parseInt(parsedResponse.teamStats.statisticsTotals.points, 10),
      });
    })
    .catch((err) => {
      console.log(err);
    });

    // Fetch Online's points
    fetch('http://wcg-api.byrkje.land/teams/3KWRNGFL72').then(response => response.json())
    .then((parsedResponse) => {
      this.setState({
        onlinePoints: parseInt(parsedResponse.teamStats.statisticsTotals.points, 10),
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <BarChart data={[this.state.abakusPoints, this.state.onlinePoints]} />;
      </div>);
  }

}

export default TotalPointsContainer;
