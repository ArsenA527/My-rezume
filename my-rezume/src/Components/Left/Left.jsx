import React from 'react';
import Contact from './Contact/Contact.jsx';
import styles from './Left.module.css';
import Me from './Me/Me.jsx';

const Left = () => {
  return (
    <div className={styles.left}>
      <Me />
      <Contact />
    </div>
  )
}

export default Left;
