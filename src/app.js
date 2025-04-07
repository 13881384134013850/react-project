import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Hellow from './hellow';
import Timer from './timer';
import { timerContext } from './timerContext';

const App = () => {
    const [title, setTitle] = useState('به سایت کدیاد خوش امدید');
    const [isLight, setIsLight] = useState(false);
    const [timeArry, setTimeArry] = useState(["00 : 03 : 14"])

    const handleSetIsLight = () => {
        setIsLight(!isLight)
    }

    useEffect(() => {
        // console.log('useEffect')
        return () => {
        }
    }, [isLight])
    // زمانی که می خواهیم این موارد دوباره از سرگرفته بشه اسم استیت های خود را لیست می کنیم 

    return (
        <timerContext.Provider value={{
            timeArry: timeArry,
            setTimeArry: setTimeArry,
            white: "white"
        }}>
            <div className="main" style={{ backgroundColor: isLight ? 'white' : 'black' }}>
                <Hellow title={title} />
                <Timer
                    isLight={isLight}
                    handleSetIsLight={handleSetIsLight}
                />
            </div>
        </timerContext.Provider>
    )
}

// هوک ها همان مواردی هستند که به ما کمک می کنند بجای استفاده از کلاس ها برای ساخت کامپوننت های ری اکتی از فانکشن ها استفاده می کنیم

export default App