import React from 'react';
import styles from './Left.module.css';
import Me from './Me/Me.jsx';

const Left = () => {
  return (
    <div className={styles.left}>
      <Me />
      <div className="contact">
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
