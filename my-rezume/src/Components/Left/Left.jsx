import React from 'react';
import styles from './Left.module.css';

const Left = () => {
  return (
    <div className={styles.left}>
      <div className={styles.me}>
        <div className={styles.me__photo}>
        <img src="https://sun9-82.userapi.com/impg/KH2Y5r9_OykBHygiq_8MKLG1RXz7-PHl3tIbGQ/w2cNyG8HWTg.jpg?size=1197x1600&quality=96&sign=5e3a4cbd937acd067bb30cc7d7251814&type=album" alt="My-photo" />
        </div>
        <div className={styles.me__desc}>
          <h1 className={styles.me__fullname}>Арсен Мелконян</h1>
          <h3 className={styles.my__proffesion}>Веб-разработчик</h3>
        </div>
      </div>

      {/* <div className={contact}> 
        <div className={address}></div>
        <div className={dateOfBirth}></div>
        <div className={phone}></div>
        <div className={e__mail}></div>
        <div className={website}></div>
      </div> */}
    </div>
  )
}

export default Left;
