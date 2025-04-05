import React from 'react';
import ReactDOM from 'react-dom/client';
import Hellow from './hellow';
import Timer from './timer';

class App extends React.Component {
    render() {
        return (
            <div className='main'>
                <Hellow />
                <Timer />
            </div>
        )
    }
}

export default App