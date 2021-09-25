import React, { Component } from 'react';
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
        <h2>{this.state.title}</h2>

        <EducationItem />
      </div>
    );
  }
}

export default Education;
