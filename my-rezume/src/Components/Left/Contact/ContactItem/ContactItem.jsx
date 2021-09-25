import React from 'react'

const ContactItem = (props) => {
  return (
    <div>
      <h3>{props.subtitle}</h3>
      <p>{props.link}</p>
    </div>
  )
}

export default ContactItem;
