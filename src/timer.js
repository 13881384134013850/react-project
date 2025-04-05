import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

let intervalTimer;

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            hours: 1,
            minutes: 0,
            seconds: 3,
        }
    }

    timer() {
        this.setState({
            seconds: this.state.seconds - 1
        })

        if (this.state.seconds < 1 && this.state.minutes > 0) {
            this.setState({
                minutes: this.state.minutes - 1,
                seconds: 60
            })
        }

        if (this.state.seconds < 1 && this.state.minutes < 1 && this.state.hours > 0) {
            this.setState({
                hours: this.state.hours - 1,
                minutes: 60
            })
        }

        console.log(this.state.seconds)

        if (this.state.seconds == 0 && this.state.minutes == 0 && this.state.hours == 0) {
            clearInterval(intervalTimer)
        }
    }

    componentDidMount() {
        intervalTimer = setInterval(() => this.timer(), 1000)
    }

    render() {
        return (
            <h2 className='timer'>
                hours : {this.state.hours} <br /><br />
                minutes : {this.state.minutes} <br /><br />
                seconds : {this.state.seconds} <br />
            </h2>
        )
    }
}

export default Timer