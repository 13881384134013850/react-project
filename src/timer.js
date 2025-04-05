import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

let intervalTimer;

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            time: 10
        }
    }

    interval() {
        this.setState({
            time: this.state.time - 1
        })
    }

    componentDidMount() {
        intervalTimer = setInterval(() => this.interval(), 1000)
    }

    componentDidUpdate() {
        if (this.state.time == 0) {
            this.stop()
        }
    }

    start() {
        this.stop()
        intervalTimer = setInterval(() => this.interval(), 1000)
    }

    stop() {
        clearInterval(intervalTimer)
    }

    render() {
        return (
            <>
                <h2 className='timer'>
                    it is {this.state.time}
                </h2>
                <button onClick={() => this.start()}>start</button>
                <button onClick={() => this.stop()}>stop</button>
                <button onClick={this.props.handleChangeTitle}>change title</button>
            </>
        )
    }
}

export default Timer