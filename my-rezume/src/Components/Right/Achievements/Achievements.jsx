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
      <div className={st.item}>
        <h2 className={st.title}>{this.state.title}</h2>
        <AchievementsItem title="Курсовая работа (программирование на языке C++) 2017 г." text="Получил грамоту за оригинальное решение и практическое применение на конференции по информатике"/>
        <AchievementsItem title="Конкурс от МИЭТ 2017 г." text="Получил грамоту за участие в инженерно-технических молодежных спортивных сорвенований «Робофутбол»"/>
      </div>
    );
  }
}

export default Achievements;
