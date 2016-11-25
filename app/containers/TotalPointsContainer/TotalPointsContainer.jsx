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
    const fetchAbakus = () => fetch('https://wcg-api.byrkje.land/teams/2TXCT2Z972').then(res => res.json());

    // Fetch Online's points
    const fetchOnline = () => fetch('https://wcg-api.byrkje.land/teams/3KWRNGFL72').then(res => res.json());

    Promise.all([fetchAbakus(), fetchOnline()])
      .then((responses) => {
        const abakus = responses.filter(r => r.teamStats.team.teamId === '2TXCT2Z972')[0];
        const online = responses.filter(r => r.teamStats.team.teamId === '3KWRNGFL72')[0];
        this.setState({
          abakusPoints: parseInt(abakus.teamStats.statisticsTotals.points, 10),
          onlinePoints: parseInt(online.teamStats.statisticsTotals.points, 10),
        });
      })
      .catch((err) => {
        console.error('Failed fetching points', err);
      });
  }

  render() {
    return (
      <div>
        <BarChart data={[this.state.abakusPoints, this.state.onlinePoints]} />
      </div>);
  }

}

export default TotalPointsContainer;
