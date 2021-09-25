import React, { Component } from 'react';
import AchievementsItem from './AchievementsItem/AchievementsItem';

class Achievements extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Достижения"
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <AchievementsItem />
      </div>
    );
  }
}

export default Achievements;
