import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    // اولین باری که یک کامپوننت رندر می شود اجرا می شود
    componentDidMount() { // فقط اولین بار که یک کامپوننت ساخته می شود فراخوانی می شود
        // console.log('componentDidMount')
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    // بعد از هر بار بروزرسانی کامپوننت (تغییر state یا props)، اجرا می‌شود
    componentDidUpdate() {
        // console.log('componentDidUpdate')
    }

    // قبل از حذف کامپوننت از DOM اجرا می‌شود.
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {

        // console.log('render')
        return (
            <h2 ref={this.myelm} className='timer' >
                it is {this.state.time}
            </ h2>
        )
    }
}

export default Timer