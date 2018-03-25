import React from 'react';
import { Column, Row } from 'simple-flexbox';
import RaisedButton from 'material-ui/RaisedButton';
import './ImageBox.css';

const buttonStyle = {};

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
    c1name: 'Employment',
    c2src: 'images/education.png',
    c2name: 'Education',
  },

  {
    c1src: 'images/social.png',
    c1name: 'Social',
    c2src: 'images/memes.png',
    c2name: 'Memes',
  },
];

const Grid = () => (
  <Column style={styles.container}>
    {tiles.map(tile => {
      return (
        <Row style={styles.row} vertical="center">
          <div style={{ paddingRight: 2.5 }} className="ImageBox">
            <img className="image" alt={1} src={tile.c1src} />
            <div className="middle">
              <RaisedButton
                buttonStyle={{
                  backgroundColor: '#37474F',
                }}
                displayTouchRipple={true}
                label={tile.c1name}
                labelColor={'white'}
              />
            </div>
          </div>

          <div style={{ paddingLeft: 2.5 }} className="ImageBox">
            <img className="image" alt={1} src={tile.c2src} />
            <div className="middle">
              <RaisedButton
                buttonStyle={{
                  backgroundColor: '#37474F',
                }}
                displayTouchRipple={true}
                label={tile.c2name}
                labelColor={'white'}
              />
            </div>
          </div>
        </Row>
      );
    })}
  </Column>
);

export default Grid;
