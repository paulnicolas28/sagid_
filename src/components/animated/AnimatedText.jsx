import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './animatedText.css';

const AnimatedText = ( {oldText, newText} ) => {
  const [showNewText, setShowNewText] = useState(false);

  const handleClick = () => {
    setShowNewText(true);
    showNewText && setShowNewText(false);

  };

  return (
    <div>
      <h1>Animation de Texte</h1>
      <div className="animation-container">
        <CSSTransition in={showNewText} timeout={500} classNames="fade">
          <div className="text-container">
            <span className="old-text">{oldText}</span>
          </div>
        </CSSTransition>
        <div className="arrow-container">
          <span className="arrow">&#8594;</span>
        </div>
        <CSSTransition in={showNewText} timeout={500} classNames="fade">
          <div className="text-container">
            <span className="new-text">{newText}</span>
          </div>
        </CSSTransition>
      </div>
      <button onClick={handleClick}>Transition</button>
    </div>
  );
};

export default AnimatedText;