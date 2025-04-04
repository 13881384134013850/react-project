import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'))

const tick = () => {
  const elm = (
    <div>
      <h1>سلام دوستان</h1>
      <h2>
        it is {new Date().toLocaleTimeString()}
      </h2>
    </div>
  )
  root.render(elm)
}

setInterval(tick, 1000)