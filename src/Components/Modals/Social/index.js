import React from 'react';

const styles = {
  text: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
};
export default class SocialModal extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={styles.text}>
        <a
          style={{ 'text-decoration': 'none' }}
          href="https://github.com/orthogon4lorthodont1st"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span style={styles.text}>GIT</span>
        </a>
      </div>
    );
  }
}
