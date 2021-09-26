import React from 'react'
import st from '../../Right.module.css';
import styles from './AchievementsItem.module.css';

const AchievementsItem = (props) => {
  return (
    <div className={st.item__item}>
      <h3 className={styles.heading}>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default AchievementsItem;
