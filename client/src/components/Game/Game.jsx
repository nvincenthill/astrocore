import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    console.log(this.canvas);
  }

  render() {
    return (
      <canvas
        ref={this.canvas}
        width={window.innerWidth - 16}
        height={window.innerHeight - 16}
        className="gameboard"
      />
    );
  }
}

export default Game;
