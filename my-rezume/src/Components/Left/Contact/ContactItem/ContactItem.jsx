import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = (props) => {
  return (
    <div className={styles.item}>
      <h3 className={styles.subtitle}>{props.subtitle}</h3>
      <p>{props.link}</p>
    </div>
  )
}

export default ContactItem;
