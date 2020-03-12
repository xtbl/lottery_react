import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <h1><span className="ball">{this.props.num}</span></h1>
          );
    }
}

export default Ball;