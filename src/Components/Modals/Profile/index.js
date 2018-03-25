import React from 'react';
import Typing from 'react-typing-animation';

const styles = {
  jsonStyle: {
    fontSize: 30,
  },
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#1d1f21',
  },
  numbers: {
    paddingRight: 15,
    color: '#969896',
    fontSize: 16,
  },
};

const space = '\u00A0 \u00A0 \u00A0';

export default class ProfileModal extends React.Component {
  constructor() {
    super();
    this.state = {
      key: 0,
    };
  }

  pause() {
    setTimeout(() => {}, 1500);
    this.setState({
      key: this.state.key + 1,
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <span style={styles.jsonStyle}>
          <Typing
            key={this.state.key.toString()}
            loop={true}
            speed={40}
            onFinishedTyping={() => this.pause()}
          >
            <span style={{ color: '#b294bb' }}>
              <span style={styles.numbers}>1</span> const
            </span>{' '}
            <span style={{ color: '#cc6666' }}>
              profile: {'{'} <br />
              <span style={styles.numbers}>2</span>
              {space}firstName: {"'"}Rafiq{"'"}, <br />
              <span style={styles.numbers}>3</span>
              {space}lastName: {"'"}Shahsawary{"'"}, <br />
              <span style={styles.numbers}>4</span>
              {space}email: {"'"}rafiq@hodl.vc{"'"}, <br />
              <span style={styles.numbers}>5</span>
              {space}age: 25, <br />
              <span style={styles.numbers}>6</span>
              {space}profession: {"'"}Software Engineer{"'"}
              <br />
              <span style={styles.numbers}>7</span>
              {'\u00A0'}
              {'};'}
            </span>
            <Typing.Delay ms={1000} />
          </Typing>
        </span>
      </div>
    );
  }
}
