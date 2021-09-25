import React, { Component } from 'react';
import styles from './Profile.module.css';

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Профиль",
      text: "Начинающий Front-End разработчик. Занимаюсь разработкой сайтов в течение 1 года. Есть цель: развитие и построение карьеры в данной сфере."
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Profile;
