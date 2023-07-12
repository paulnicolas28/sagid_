import React, { useState, useEffect } from 'react';



const ColorChangingComponent = () => {
  const [color, setColor] = useState('#ff0000'); // Initial color

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random color within the desired range
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setColor(randomColor);
    }, 1000); // Change color every 1 second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div style={{ backgroundColor: color, width: '200px', height: '200px' }}>
      {/* Your component content */}
    </div>
  );
};

export default ColorChangingComponent;
