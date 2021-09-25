import React, { Component } from 'react';
import st from '../Right.module.css';
import styles from './Profile.module.css';

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Профиль",
      text: "Начинающий веб-разработчик. Занимаюсь разработкой сайтов более 1 года. Есть цель: развитие и построение карьеры в данной сфере. Проходил стажировку с командой AnyVoice"
    }
  }

  render() {
    return (
      <div>
        <h2 className={st.title}>{this.state.title}</h2>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Profile;
