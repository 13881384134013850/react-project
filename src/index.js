import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

// استیت ها همان مغییر ها هستند که با هر با تغییر مقادیر ان ها صفحه یک بار رفرش (رندر مجدد) می شود
// مقدری که در سایت ما قرار است به صورت داینامیک باشد داخل استیت قرار می دهیم