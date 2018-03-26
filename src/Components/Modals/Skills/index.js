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
    name: 'POSTGRES',
    percent: 90,
  },
  {
    stateName: 'rethink',
    name: 'RETHINK DB',
    percent: 80,
  },
  {
    stateName: 'rn',
    name: 'REACT NATIVE',
    percent: 75,
  },
  {
    stateName: 'rjs',
    name: 'REACT JS',
    percent: 75,
  },
  {
    stateName: 'html',
    name: 'HTML & CSS',
    percent: 70,
  },
  {
    stateName: 'cpp',
    name: 'C++',
    percent: 60,
  },
  {
    stateName: 'linux',
    name: 'LINUX ARCH/KALI/UBUNTU',
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
      rn: 0,
      rjs: 0,
      html: 0,
      cpp: 0,
      linux: 0,
      bash: 0,
    };
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.increase(0);
  }

  /**
   * Function which controls logic of increasing skills bar until full
   *
   * @param {Number} i The skills array value
   */
  async increase(i) {
    let j = i;

    // return when we reach the end of the array
    if (j > skills.length - 1) {
      return;
    }

    const newState = {};
    const percent = this.state[skills[j].stateName] + 3;
    newState[skills[j].stateName] = percent;

    await this.setState(newState);

    // once percentage bar is full move onto next skill
    if (this.state[skills[i].stateName] + 3 >= skills[i].percent) {
      j += 1;
    }

    setTimeout(() => this.increase(j), 1);
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.section}>SKILLS:</div>
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
      </div>
    );
  }
}
