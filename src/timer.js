import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

let intervalTimer;

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    startInterval = () => {
        this.stopInterval()
        intervalTimer = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            })

            if (this.state.seconds == 60) {
                this.setState({
                    seconds: 0,
                    minutes: this.state.minutes + 1
                })
            }

            if (this.state.minutes == 60) {
                this.setState({
                    minutes: 0,
                    hours: this.state.hours + 1
                })
            }

        }, 1000)
    }

    stopInterval = () => {
        clearInterval(intervalTimer)
    }

    resetInterval = () => {
        this.stopInterval()
        this.setState({
            hours: 0,
            minutes: 0,
            seconds: 0
        })
    }

    render() {
        let h = this.state.hours
        let m = this.state.minutes
        let s = this.state.seconds

        return (
            <>
                <h2 className="timer">
                    {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}
                </h2>
                <div className='box_btn'>
                    <button className='btn btn-green' onClick={this.startInterval}>start</button>
                    <button className='btn btn-red' onClick={this.stopInterval}>stop</button>
                    <button className='btn btn-silver' onClick={this.resetInterval}>reset</button>
                    <button className='btn btn-silver' onClick={this.props.handleChangeTitle}>set title</button>
                </div>
            </>
        )
    }
}

export default Timer