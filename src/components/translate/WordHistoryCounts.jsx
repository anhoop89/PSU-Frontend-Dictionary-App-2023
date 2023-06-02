/*
Get the words from the cookies. Divides them into 2 groups: English | Spanish
Display the words with the name and frequency 
*/
import React, { useState } from "react";
import "../../CSS/translate.css";

import VisualizeGraphs from "./VisualizeGraphs";
const WordHistoryCounts = ({ getSortedWords }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div
      className="card mt-4 custom-border "
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
    >
      <div>
        <div
          className="custom-tab card-body d-flex align-items-center 
         justify-content-between border-bottom 
         pb-3 rounded-3"
        >
          <h3 className=" card-title text-light">
            Translation History - Counts
          </h3>
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
          <div className="card-body">
            {getSortedWords.length > 0 ? (
              <>
                {getSortedWords.some((word) => word.word.includes("-en")) ? (
                  <div>
                    <h4 className="pt-2 pb-2">English Words</h4>
                    <ul className="list-group">
                      {getSortedWords.map((word, index) => {
                        if (word.word.includes("-en")) {
                          return (
                            <li
                              className="custom-border list-group-item d-flex 
                              justify-content-between align-items-center bg-dark"
                              style={{
                                height: "70%",
                              }}
                              key={index}
                            >
                              {word.word.slice(0, -3)}
                              <span className="badge bg-primary rounded-pill">
                                {word.frequency}
                              </span>
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  </div>
                ) : null}

                {getSortedWords.some((word) => word.word.includes("-es")) ? (
                  <div className="pt-3">
                    <h4 className="pt-3 pb-2">Spanish Words</h4>
                    <ul className="list-group">
                      {getSortedWords.map((word, index) => {
                        if (word.word.includes("-es")) {
                          return (
                            <li
                              className="custom-border list-group-item d-flex 
                              justify-content-between align-items-center bg-dark"
                              style={{
                                height: "70%",
                              }}
                              key={index}
                            >
                              {word.word.slice(0, -3)}
                              <span className="badge bg-primary rounded-pill">
                                {word.frequency}
                              </span>
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  </div>
                ) : null}
              </>
            ) : (
              <p className="text-center">No words found</p>
            )}
          </div>
        )}
      </div>
    </div>

    <VisualizeGraphs/>
    </>
  );
};

export default WordHistoryCounts;
