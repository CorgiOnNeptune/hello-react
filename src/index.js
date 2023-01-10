import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.reset}>
      <span>{props.text}</span>
    </button>
  );
};

const Application = () => {
  const [name, setName] = useState('');

  const reset = () => {
    setName('');
  };

  return (
    <main>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
      <Button text="Reset" reset={reset} />
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById('root'));
