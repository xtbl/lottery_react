import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Title',
        ballAmount: 0
    }
    constructor(props) {
        super(props);
        this.state = { balls: [] };
        this.generateNumbers = this.generateNumbers.bind(this);
    }
    generateNumbers() {
        const numberOfBalls = this.props.ballAmount;
        const getRandom = () => (Math.floor(Math.random() * 100) + 1);
        const generatedNums = [...Array(numberOfBalls)].map(ballItem => getRandom());
        console.log(generatedNums);
        this.setState( {balls: generatedNums} );
    }
    render() {
        return (
            <div className="Lottery">
                <div className="Lottery-title"><h1>{this.props.title}</h1></div>
                <div className="Lottery-container">
                    {this.state.balls.map(ballItem => <Ball num={ballItem}/>)}
                </div>
                <div>
                    <button onClick={this.generateNumbers} className="Lottery-button">Generate</button>
                </div>
            </div>
         );
    }
}

export default Lottery;