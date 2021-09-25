import React, { Component } from 'react';
import styles from './Contact.module.css';
import ContactItem from './ContactItem/ContactItem.jsx';


class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: "Контакты"
    }
  }
  

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>

        <ContactItem subtitle="Дата рождения" link="28.07.2000"/>
        <ContactItem subtitle="Телефон" link="89295944898"/>
        <ContactItem subtitle="E-mail" link="arsen.avetisyan.2000@mail.ru"/>
      
      </div>
    );
  }
}

export default Contact;