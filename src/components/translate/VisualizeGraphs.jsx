import React, { useState } from "react";
import DoughnutChartEN from "./DonutGraphEN";
import DoughnutChartES from "./DonutGraphES";

const VisualizeGraphs = ({ getSortedWords }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsOpenTwo(false); // close the ES graph
  };

  const toggleDropdownTwo = () => {
    setIsOpenTwo(!isOpenTwo);
    setIsOpen(false); // Close the EN graph
  };

  return (
    <div
      className="card mt-4 custom-border"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
    >
      <div>
        <div className="custom-tab card-body d-flex border-bottom pb-3 rounded-3">
          <h3 className="card-title text-light">Visualization - Graphs</h3>
          <div className="ml-auto p-2"> </div>
          {/* close/open tab */}
          {isOpen ? (
            <i
              className="fa fa-chevron-circle-down mr-3"
              onClick={toggleDropdown}
              style={{
                fontSize: 36,
                cursor: "pointer",
                color: "black",
              }}
            >EN</i>
          ) : (
            <i
              className="fa fa-chevron-circle-right mr-3"
              onClick={toggleDropdown}
              style={{
                fontSize: 36,
                cursor: "pointer",
              }}
            >EN</i>
          )}
          {/* close/open tab */}
          {isOpenTwo ? (
            <i
              className="fa fa-chevron-circle-down"
              onClick={toggleDropdownTwo}
              style={{
                fontSize: 36,
                cursor: "pointer",
                color: "black",
              }}
            >ES</i>
          ) : (
            <i
              className="fa fa-chevron-circle-right"
              onClick={toggleDropdownTwo}
              style={{
                fontSize: 36,
                cursor: "pointer",
              }}
            >ES</i>
          )}
        </div>

        {/* this handles the graph of the top EN translation words */}
        {isOpen && !isOpenTwo && (
          <div className="py-4 text-center">
            {getSortedWords.some((word) => word.word.includes("-en")) ? (
              <>
                <h4 className="pt-2 pb-2">Top 5 English Translation Words</h4>
                <DoughnutChartEN getSortedWords={getSortedWords} />
              </>
            ) : (
              <DoughnutChartEN getSortedWords={getSortedWords} />
            )}
          </div>
        )}

        {/* this handles the graph of the top ES translation words */}
        {!isOpen && isOpenTwo && (
          <div className="py-4 text-center">
            {getSortedWords.some((word) => word.word.includes("-en")) ? (
              <>
                <h4 className="pt-2 pb-2">Top 5 Spanish Translation Words</h4>
                <DoughnutChartES getSortedWords={getSortedWords} />
              </>
            ) : (
              <DoughnutChartES getSortedWords={getSortedWords} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualizeGraphs;
