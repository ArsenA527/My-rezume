import React, { Component } from 'react';
import st from '../Right.module.css';
import EducationItem from './EducationItem/EducationItem';

class Education extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Образование"
    }
  }

  render() {
    return (
      <div>
        <h2 className={st.title}>{this.state.title}</h2>

        <EducationItem />
      </div>
    );
  }
}

export default Education;
