import React from 'react';
import Achievements from './Achievements/Achievements.jsx';
import Education from './Education/Education.jsx';
import Profile from './Profile/Profile.jsx';
import styles from './Right.module.css';


const Right = () => {
  return (
    <div className="right">

    <Profile />
    <Achievements />
    <Education />

      {/* <div className="profile">
        <p className="desc">
        Начинающий Front-End разработчик. Занимаюсь разработкой сайтов в течение 1 года. Есть цель:
        развитие и построение карьеры в данной сфере.
        </p>
      </div>
      <div className="achievements">


      </div>
      <div className="education">

        <div class="my_education">
          <h4>Национальный исследовательский университет «Московский институт электронной техники»</h4>
          <p>Направление: Управление в технических системах</p>
          <span>Сентябрь 2018 - н.в. <b>|</b> Россия</span>
        </div>

        <h3>Дополнительное Образование</h3>
        <div class="my_education">
          <h4>Центр Компьютерного обучения и дополнительного образования</h4>
          <span>Октябрь 2014 - Май 2017 <b>|</b> Россия</span>
        </div>
      </div> */}
    </div>
  )
}

export default Right;
