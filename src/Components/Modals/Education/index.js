import React from 'react';
import '../animate.css';
import Content from './content';

const space = '\u00A0 \u00A0 \u00A0';

const styles = {
  projectsContainer: {
    paddingBottom: 40,
  },
  title: {
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
    title: 'EDUCATION',
    period: 'ENGLAND, \u00A0 2010 - 2016',
    periods: [
      {
        display: 'READ',
        name: 'UNIVERSITY OF SHEFFIELD',
        read: 'THEORETICAL PHYSICS,\u00A0 MASTERS',
        result: 'CLASS ONE HONOURS',
        description: Content.uni,
      },
      {
        display: 'STUDIED',
        name: 'EALING,\u00A0 HAMMERSMITH AND WEST LONDON COLLEGE',
        read: 'MATHS PHYSICS AND MORE MATHS',
        result: 'A,\u00A0 A and one more A ',
        description: Content.college,
      },
    ],
  },
];

export default class EducationModal extends React.Component {
  pause() {
    setTimeout(() => {}, 1500);
    this.setState({
      key: this.state.key + 1,
    });
  }

  renderOinky() {
    return data.map(contents => (
      <div>
        <div style={styles.title}>
          {contents.title}
          {space}
          <span className="animated fadeInDownBig" style={styles.period}>
            {contents.period}
          </span>
        </div>
        <hr />

        {contents.periods.map(period => (
          <div style={styles.projectsContainer}>
            <div style={styles.projectName} className="animated fadeInDown">
              {period.name}
            </div>
            <div className="animated fadeInUp" style={styles.projectSections}>
              <u style={{ fontWeight: 'bold', paddingRight: 12 }}>
                {period.display}
              </u>{' '}
              {period.read}
            </div>
            <div className="animated fadeInDown" style={styles.projectSections}>
              <u style={{ fontWeight: 'bold', paddingRight: 12 }}>RESULT</u>{' '}
              {period.result}
            </div>
            <div style={styles.text} className="animated fadeInUp">
              {period.description}
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
