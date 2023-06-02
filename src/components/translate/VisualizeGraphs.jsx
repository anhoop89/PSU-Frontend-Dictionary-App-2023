import React, { useState } from "react";

const VisualizeGraphs = ({ getSortedWords }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="card mt-4 custom-border"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
    >
      <div>
        <div className="custom-tab card-body d-flex align-items-center justify-content-between border-bottom pb-3 rounded-3">
          <h3 className="card-title text-light">Visualization - Graphs</h3>
          {isOpen ? (
            <i
              className="fa fa-chevron-circle-down "
              onClick={toggleDropdown}
              style={{
                fontSize: 36,
                cursor: "pointer",
                color: "black",
              }}
            ></i>
          ) : (
            <i
              className="fa fa-chevron-circle-right"
              onClick={toggleDropdown}
              style={{
                fontSize: 36,
                cursor: "pointer",
              }}
            ></i>
          )}
        </div>

        {isOpen && (
          <div className="py-4 text-center">
            <p>...Still working on it...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualizeGraphs;
