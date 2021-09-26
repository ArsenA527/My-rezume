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
      <div className={st.item}>
        <h2 className={st.title}>{this.state.title}</h2>

        <EducationItem title="2007-2018 – ГОУ СОШ №618" text="учился в классе с углубленным изучением физики и математики" />
        <EducationItem title="2018–н.в. - Национальный Исследовательский Университет Московский институт электронной техники" text="Факультет Управление в технических системах студент 4 курса" />
        <EducationItem title="2014-2017 - ЦКО и ДО " text="Облучался в Центре Компьютерного обучения и дополнительного образования" />
      </div>
    );
  }
}

export default Education;
