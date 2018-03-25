import React from 'react';
import { Column, Row } from 'simple-flexbox';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import Profile from '../Modals/Profile';
import './stylesheet.css';

const modalComponents = {
  Profile: <Profile />,
};

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

  handleOpen(title) {
    this.setState({
      open: true,
      title,
    });
    this.showDialog();
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  showDialog() {
    return (
      <Dialog
        open={this.state.open}
        onRequestClose={() => this.handleClose()}
        autoScrollBodyContent={true}
        overlayStyle={{ opacity: 0.4 }}
      >
        {modalComponents[this.state.title]}
      </Dialog>
    );
  }

  render() {
    return (
      <Column style={styles.container}>
        {tiles.map(tile => (
          <Row key={tile.key} style={styles.row} vertical="center">
            <div style={{ paddingRight: 2.5 }} className="ImageBox">
              <img className="image" alt={1} src={tile.c1src} />
              <div className="middle">
                <RaisedButton
                  overlayStyle={{ backgroundColor: '#808080' }}
                  labelColor="#fff"
                  labelStyle={{
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                  }}
                  label={tile.c1name}
                  onClick={() => this.handleOpen(tile.c1name)}
                />
                {this.showDialog()}
              </div>
            </div>

            <div style={{ paddingLeft: 2.5 }} className="ImageBox">
              <img className="image" alt={1} src={tile.c2src} />
              <div className="middle">
                <RaisedButton
                  overlayStyle={{ backgroundColor: '#808080' }}
                  labelColor="#fff"
                  labelStyle={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}
                  label={tile.c2name}
                  onClick={() => this.handleOpen(tile.c2name)}
                />
                {this.showDialog()}
              </div>
            </div>
          </Row>
        ))}
      </Column>
    );
  }
}
