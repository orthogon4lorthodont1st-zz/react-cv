import React from 'react';
import { Column, Row } from 'simple-flexbox';

import './ImageBox.css';

const styles = {
  container: {
    display: 'flex',
    'align-items': 'stretch',
    paddingTop: 15,
    paddingBottom: 15,
  },
  row: {
    paddingTop: 5,
  },
  image: {
    'max-width': '100%',
    'max-height': '100%',
  },
};

const tiles = [
  {
    c1src: 'images/profile.png',
    c1name: 'Profile',
    c2src: 'images/skills.png',
    c2name: 'Skills',
  },
  {
    c1src: 'images/work.png',
    c1name: 'Employment History',
    c2src: 'images/education.png',
    c2name: 'Education History',
  },

  {
    c1src: 'images/social.png',
    c1name: 'Connect',
    c2src: 'images/memes.png',
    c2name: 'Memes',
  },
];

const Grid = () => (
  <Column style={styles.container}>
    <Row style={styles.row} vertical="center">
      <div style={{ paddingRight: 2.5 }} className="ImageBox">
        <img className="image" alt={1} src="images/profile.png" />
        <div className="middle">
          <div className="text">HELLO</div>
        </div>
      </div>

      <div style={{ paddingLeft: 2.5 }} className="ImageBox">
        <img className="image" alt={1} src="images/skills.png" />
        <div className="middle">
          <div />
        </div>
      </div>
    </Row>

    <Row style={styles.row} vertical="center">
      <div style={{ paddingRight: 2.5 }} className="ImageBox">
        <img className="image" alt={1} src="images/work.png" />
        <div className="middle">
          <div />
        </div>
      </div>
      <div style={{ paddingLeft: 2.5 }} className="ImageBox">
        <img className="image" alt={1} src="images/education.png" />
        <div className="middle">
          <div />
        </div>
      </div>
    </Row>

    <Row style={styles.row} vertical="center">
      <Column style={{ paddingRight: 2.5 }} className="ImageBox">
        <img className="image" alt={1} src="images/social.png" />
        <div className="middle">
          <div />
        </div>
      </Column>
      <Column style={{ paddingLeft: 2.5 }} className="ImageBox">
        <img className="image" alt={1} src="images/memes.png" />
        <div className="middle">
          <div />
        </div>
      </Column>
    </Row>
  </Column>
);

export default Grid;
