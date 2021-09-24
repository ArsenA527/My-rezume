import React, { Component } from 'react';
import styles from './Me.module.css';


class Me extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: "Арсен Мелконян",
      proffesion: "Веб-разработчик"
    }
  }
  
  render() {
    return (
      <div>
        <div className={styles.me__photo}>
        <img src="https://sun9-82.userapi.com/impg/KH2Y5r9_OykBHygiq_8MKLG1RXz7-PHl3tIbGQ/w2cNyG8HWTg.jpg?size=1197x1600&quality=96&sign=5e3a4cbd937acd067bb30cc7d7251814&type=album" alt="My-photo" />
        </div>
        <div className={styles.me__desc}>
          <h1 className={styles.me__fullname}>{this.state.name}</h1>
          <h3 className={styles.my__proffesion}>{this.state.proffesion}</h3>
        </div>
      </div>
    );
  }
}

export default Me;
