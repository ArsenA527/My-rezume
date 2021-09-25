import React from 'react';
import Contact from './Contact/Contact.jsx';
import styles from './Left.module.css';
import Me from './Me/Me.jsx';

const Left = () => {
  return (
    <div className={styles.left}>

      <div className={styles.left__wrapper}>
        <Me />

        <Contact />
      </div>
    </div>
  )
}

export default Left;
