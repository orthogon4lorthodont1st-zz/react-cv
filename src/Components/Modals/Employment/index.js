import React from 'react';
import '../animate.css';
import Content from './content';

const space = '\u00A0 \u00A0 \u00A0';

const styles = {
  projectsContainer: {
    paddingBottom: 40,
  },
  employer: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#de935f',
  },
  period: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#de935f',
  },
  projectSections: {
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: '#81a2be',
  },
  projectName: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#81a2be',
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: '#de935f',
  },
};

const data = [
  {
    employer: 'SAVEABLE LIMITED',
    period: 'JUNE 2017 - PRESENT ',
    projects: [
      {
        name: 'OINKY',
        tech: 'NODE.JS, \u00A0 RETHINKDB, \u00A0 AWS',
        role:
          'DESIGN AND IMPLEMENT SAVING ALGORITHM & ASSIST WITH CODE MAINTENANCE',
        description: Content.oinky,
      },
      {
        name: 'APOLLO',
        role: 'ASSIST WITH BUILD OF API & APP FOR BLOCKCHAIN WALLET SERVICES',
        tech: 'NODE.JS, \u00A0 REACT NATIVE, \u00A0 POSTGRESQL, \u00A0 HEROKU',
        description: Content.apollo,
      },
    ],
  },
];

export default class ProfileModal extends React.Component {
  pause() {
    setTimeout(() => {}, 1500);
    this.setState({
      key: this.state.key + 1,
    });
  }

  renderOinky() {
    return data.map(contents => (
      <div>
        <div style={styles.employer}>
          {contents.employer}
          {space}
          <span className="animated fadeInDownBig" style={styles.period}>
            {contents.period}
          </span>
        </div>
        <hr />

        {contents.projects.map(project => (
          <div style={styles.projectsContainer}>
            <div style={styles.projectName} className="animated bounceInRight">
              {project.name}
            </div>
            <div
              className="animated bounceInRight"
              style={styles.projectSections}
            >
              <u style={{ fontWeight: 'bold', paddingRight: 12 }}>TECH</u>{' '}
              {project.tech}
            </div>
            <div
              className="animated bounceInLeft"
              style={styles.projectSections}
            >
              <u style={{ fontWeight: 'bold', paddingRight: 12 }}>ROLE</u>{' '}
              {project.role}
            </div>
            <div style={styles.text} className="animated bounceInLeft">
              {project.description}
            </div>
          </div>
        ))}
      </div>
    ));
  }

  render() {
    return this.renderOinky();
  }
}
