import React, { useState } from 'react';
import './Overlay.css';

const Overlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div>
      <button onClick={toggleOverlay}>Toggle Overlay</button>
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <h1>Overlay Content</h1>
            <p>This is the content of the overlay.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overlay;
