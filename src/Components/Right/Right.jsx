import React from 'react';
import Achievements from './Achievements/Achievements.jsx';
import Education from './Education/Education.jsx';
import Profile from './Profile/Profile.jsx';
import styles from './Right.module.css';


const Right = () => {
  return (
    <div className={styles.right}>

    <Profile />
    <Achievements />
    <Education />

    </div>
  )
}

export default Right;
