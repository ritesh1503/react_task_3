// src/ColorPicker.js
import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  return (
    <div className="color-picker">
      <button onClick={toggleColorList}>
        {selectedColor ? `Selected Color: ${selectedColor}` : 'Pick a color'}
      </button>
      {isColorListVisible && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li key={index} onClick={() => handleColorSelection(color)}>
              <div
                className="color-option"
                style={{ backgroundColor: color }}
              ></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ColorPicker;
