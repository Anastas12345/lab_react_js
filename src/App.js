import React from 'react';
import './index.scss';

function App() {
  const [count, setCount] = React.useState(0);
  const onClickPlus = () => {
    setCount(count + 1);
  }
  const onClickMinus = () => {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <div>
        <h2>Score:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">-</button>
        <button onClick={onClickPlus} className="plus">+</button>
      </div>
    </div>
  );
}

export default App;