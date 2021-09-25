import React, { Component } from 'react';
import st from '../Right.module.css';
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
        <h2 className={st.title}>{this.state.title}</h2>
        <AchievementsItem />
      </div>
    );
  }
}

export default Achievements;
