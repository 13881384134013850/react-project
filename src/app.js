import React, { useId, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Hellow from './hellow';
import Timer from './timer';

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             title: 'به سایت کدیاد خوش امدید'
//         }
//     }

//     handleChangeTitle = () => [
//         this.setState({
//             title: 'به سایت سبزلرن خوش امدید'
//         })
//     ]

//     render() {
//         return (
//             <div className='main'>
//                 <Hellow title={this.state.title} />
//                 <Timer handleChangeTitle={this.handleChangeTitle} />
//             </div>
//         )
//     }
// }

// هوک ها همان مواردی هستند که به ما کمک می کنند بجای استفاده از کلاس ها برای ساخت کامپوننت های ری اکتی از فانکشن ها استفاده می کنیم

const App = () => {
    const [title, setTitle] = useState('به سایت کدیاد خوش امدید');

    const handleChangeTitle = () => {
        setTitle('به سایت سبزلرن خوش امدید')
    }

    return (
        <div className="main">
            <Hellow title={title} />
            <Timer handleChangeTitle={handleChangeTitle} />
        </div>
    )
}

export default App