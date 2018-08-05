import React from 'react';
import Game from '../Game';
// import FontAwesome from 'react-fontawesome';

class Applet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGamePlaying: false,
    };
  }

  render() {
    return (
      <div className="game">
        <Game />
      </div>
    );
  }
}

export default Applet;
