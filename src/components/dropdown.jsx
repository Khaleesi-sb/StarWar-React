import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const Dropdown = ({ options }) => {

console.log({options});

  const [hoveredItem, setHoveredItem] = useState(null);

  const renderPopulationIcons = (population) => {
    const zerosCount = (population.match(/0/g) || []).length; 
    const iconsCount = zerosCount > 0 ? zerosCount - 1 : 0;
    const icons = [];
    for (let i = 0; i < iconsCount; i++) {
      icons.push(<FaUser key={i} />);
    }
    return icons;
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        background: "#87CEEB",
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 10px",
        fontWeight: "bold"
      }}>
        <span style={{ width: "50%", display: "flex", justifyContent: "flex-start" }}>Name</span>
        <span style={{ width: "50%", display: "flex", justifyContent: "flex-start" }}>Population</span>
      </div>
      <ul style={{
          border: "2px solid #87CEEB",
          paddingInlineStart: 0,
          paddingTop: "50px", 
          width: "500px",
          paddingLeft: "8px",
          paddingRight: "8px"
      }}>
        {options.length > 0 ?
        (options.map(option => (
          <li 
            key={option.name} 
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              position: "relative", 
            }}
            onMouseEnter={() => setHoveredItem(option.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span style={{ width: "50%", textAlign: "left" }}>{option.name}</span>
            <span style={{ width: "50%", textAlign: "left" }}>
              {renderPopulationIcons(option.population)}
              {hoveredItem === option.name && (
                <span style={{ position: "absolute", top: "0", right: "0", background: option.population !== "unknown" ? "#DBF0FD" : "", padding: "4px" }}>
                  {option.population === "unknown" ? "" : option.population}
                </span>
              )}
            </span>
          </li>
        ))) : <p>No result found</p>}
      </ul>
    </div>
  );
};

export default Dropdown;
