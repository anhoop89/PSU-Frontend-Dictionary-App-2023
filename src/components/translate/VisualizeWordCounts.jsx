/*
Get the words from the cookies. Divides them into 2 groups: English | Spanish
Display the words with the name and frequency 
*/
import React, { useState } from "react";
import "../../CSS/translate.css";
const VisualizeWordCounts = ({ getSortedWords }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="card mt-4 custom-border"
    >
      <div className="card-body">
        <div className="mx-auto text-center mb-3 border-bottom pb-3 rounded-3">
          <h3 className=" card-title text-light">
            Translation history - Counts
          </h3>
          {isOpen ? (
            <i
              className="fa fa-chevron-circle-down"
              onClick={toggleDropdown}
              style={{
                fontSize: 36,
                cursor: "pointer",
                color: "red",
                
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
          <div>
            {getSortedWords.length > 0 ? (
              <>
                {getSortedWords.some((word) => word.word.includes("-en")) ? (
                  <div>
                    <h3 className="text-center">English Words</h3>
                    <ul className="list-group">
                      {getSortedWords.map((word, index) => {
                        if (word.word.includes("-en")) {
                          return (
                            <li
                              className="custom-border list-group-item d-flex justify-content-between align-items-center bg-dark"
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
                    <h3 className="text-center">Spanish Words</h3>
                    <ul className="list-group">
                      {getSortedWords.map((word, index) => {
                        if (word.word.includes("-es")) {
                          return (
                            <li
                              className="custom-border list-group-item d-flex justify-content-between align-items-center bg-dark"
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
  );
};

export default VisualizeWordCounts;
