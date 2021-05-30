import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);

  const handleUpClick = () => {
    setUp(up + 1);
  };

  const handleDownClick = () => {
    setDown(down + 1);
  };
  return (
    <>
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src="assets/user01.png" />
            <p className="user-name">Neroxx</p>
          </div>
          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            value={up}
            onClick={handleUpClick}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {up}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            value={down}
            onClick={handleDownClick}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {down}
          </span>
        </div>
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
