import React from 'react';
import { Line } from 'rc-progress';
import './stylesheet.css';

const styles = {
  container: {
    backgroundColor: '#1d1f21',
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  label: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#cc6666',
  },
  skills: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  section: {
    color: '#808080',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
  },
};

const skills = [
  {
    stateName: 'node',
    name: 'NODE.JS',
    percent: 90,
  },
  {
    stateName: 'pg',
    name: 'POSTGRESQL',
    percent: 90,
  },
  {
    stateName: 'rethink',
    name: 'RETHINKDB',
    percent: 80,
  },
  {
    stateName: 'react',
    name: 'REACT',
    percent: 75,
  },
  {
    stateName: 'html',
    name: 'HTML & CSS',
    percent: 70,
  },
];

const hobby = [
  {
    stateName: 'cpp',
    name: 'C++',
    percent: 60,
  },
  {
    stateName: 'linux',
    name: 'ARCH & KALI',
    percent: 50,
  },
  {
    stateName: 'bash',
    name: 'BASH',
    percent: 45,
  },
];

export default class SkillsModel extends React.Component {
  constructor() {
    super();
    this.state = {
      node: 0,
      pg: 0,
      rethink: 0,
      react: 0,
      html: 0,
      cpp: 0,
      linux: 0,
      bash: 0,
    };
    this.increasePro = this.increasePro.bind(this);
  }

  componentDidMount() {
    this.increasePro(0, skills);
    this.increasePro(0, hobby);
  }

  /**
   * Function which controls logic of increasing skills bar until full
   *
   * @param {Number} i The skills array value
   */

  async increasePro(i, skillList) {
    let j = i;

    // return when we reach the end of the array
    if (j > skillList.length - 1) {
      return;
    }

    const newState = {};
    const percent = this.state[skillList[j].stateName] + 3;
    newState[skillList[j].stateName] = percent;

    await this.setState(newState);

    // once percentage bar is full move onto next skill
    if (this.state[skillList[i].stateName] + 3 >= skillList[i].percent) {
      j += 1;
    }

    setTimeout(() => this.increasePro(j, skillList), 1);
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.section}>PROFESSIONAL:</div>
        {skills.map(skill => (
          <div style={styles.skills}>
            <span style={styles.label}>{skill.name}</span>
            <Line
              strokeColor="#b294bb"
              strokeWidth="1"
              trailColor="#ffffff"
              percent={this.state[skill.stateName]}
            />
          </div>
        ))}
        <div style={styles.section}>HOBBY:</div>
        {hobby.map(skill => (
          <div style={styles.skills}>
            <span style={styles.label}>{skill.name}</span>
            <Line
              strokeColor="#b294bb"
              strokeWidth="1"
              trailColor="#ffffff"
              percent={this.state[skill.stateName]}
            />
          </div>
        ))}
      </div>
    );
  }
}
