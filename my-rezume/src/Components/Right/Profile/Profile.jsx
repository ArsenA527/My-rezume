import React, { Component } from 'react';
import st from '../Right.module.css';

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Профиль",
      text: "Я - начинающий веб-разработчик. Занимаюсь разработкой сайтов более 1 года. Обладаю базовыми и продвинутыми знаниями по HTML, CSS, JS и базовыми знаниями по PHP, MySQL,я адаптивной и кроссбраузерной верстки, табличной верстки, а также по фреймворкам React и Vue JS . Работал с языками программирования: Python, C/C++, C#"
    }
  }

  render() {
    return (
      <div className={st.item}>
        <h2 className={st.title}>{this.state.title}</h2>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Profile;
