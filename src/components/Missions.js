import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionsCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <div className="missions-title">
          <Title headline="Missões" />
        </div>
        <div className="missions-title-info">
          {missions.map((mission) => (
            <MissionsCard
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
              key={ mission.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
