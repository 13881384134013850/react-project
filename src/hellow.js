import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

class Hellow extends React.Component {
    render() {
        return (
            <h1 className='title'>{this.props.title}</h1>
        )
    }
}

export default Hellow