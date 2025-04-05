import React from 'react';
import ReactDOM from 'react-dom/client';
import Hellow from './hellow';
import Timer from './timer';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            title: 'به سایت کدیاد خوش امدید'
        }
    }

    handleChangeTitle = () => [
        this.setState({
            title: 'به سایت سبزلرن خوش امدید'
        })
    ]

    render() {
        return (
            <div className='main'>
                <Hellow title={this.state.title}/>
                <Timer handleChangeTitle={this.handleChangeTitle}/>
            </div>
        )
    }
}

export default App