import React from 'react';
import { Column, Row } from 'simple-flexbox';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import './ImageBox.css';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'stretch',
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
    key: 0,
    c1src: 'images/profile.png',
    c1name: 'Profile',
    c2src: 'images/skills.png',
    c2name: 'Skills',
  },
  {
    key: 1,
    c1src: 'images/work.png',
    c1name: 'Employment',
    c2src: 'images/education.png',
    c2name: 'Education',
  },

  {
    key: 2,
    c1src: 'images/social.png',
    c1name: 'Social',
    c2src: 'images/memes.png',
    c2name: 'Memes',
  },
];

export default class Grid extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      title: '',
    };
  }

  async onMouseEnterHandler(title) {
    await this.setState({
      title,
    });
    console.log('title', title);
  }

  handleOopen() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  showModal() {
    return (
      <Dialog
        title={this.state.title}
        open={this.state.open}
        onRequestClose={this.handleClose}
      />
    );
  }

  render() {
    return (
      <Column style={styles.container}>
        {tiles.map(tile => (
          <Row key={tile.key} style={styles.row} vertical="center">
            <div
              onMouseEnter={() => this.onMouseEnterHandler(tile.c1name)}
              style={{ paddingRight: 2.5 }}
              className="ImageBox"
            >
              <img className="image" alt={1} src={tile.c1src} />
              <div className="middle">
                <RaisedButton
                  buttonStyle={{
                    backgroundColor: '#37474F',
                  }}
                  label={tile.c1name}
                  labelColor="#fff"
                  onClick={() => this.showModal(tile.title)}
                />
              </div>
            </div>

            <div
              onMouseEnter={() => this.onMouseEnterHandler(tile.c2name)}
              style={{ paddingLeft: 2.5 }}
              className="ImageBox"
            >
              <img className="image" alt={1} src={tile.c2src} />
              <div className="middle">
                <RaisedButton
                  buttonStyle={{
                    backgroundColor: '#37474F',
                  }}
                  label={tile.c2name}
                  labelColor="#fff"
                  onClick={() => this.showModal()}
                />
              </div>
            </div>
          </Row>
        ))}
      </Column>
    );
  }
}
