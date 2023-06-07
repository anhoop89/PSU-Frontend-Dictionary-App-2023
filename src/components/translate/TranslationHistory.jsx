/*
Get the words from the cookies. Divides them into 2 groups: English | Spanish
Display the words with the name and frequency 
*/
import React, { useState } from "react";
import "../../CSS/translate.css";
import ProgressBar from "./ProgressBar";
import "react-circular-progressbar/dist/styles.css";

const TranslationHistory = ({ getSortedWords }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAllEN, setShowAllEN] = useState(false);
  const [showAllES, setShowAllES] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // show a list of english words
  const toggleShowAllEN = () => {
    setShowAllEN(!showAllEN);
  };
  // show a list of spanish words
  const toggleShowAllES = () => {
    setShowAllES(!showAllES);
  };
  // displaying words based on language
// displaying words based on language
const displayWords = (language, showAll) => {
  const words = getSortedWords
    .filter((word) => word.word.includes(`${language}`))
    .reverse(); // Reverse the array to display recent words on top

  if (!showAll) {
    // Display only 5 words when "Show All" button is off
    words.splice(5); 
  }

  return words.map((word, index) => (
    <li
      className={`custom-border list-group-item d-flex justify-content-between align-items-center bg-dark`}
      style={{
        height: "70%",
        // Make the most recent word obvious 
        fontWeight: index === 0 ? "bold" : "normal",
        fontSize: index === 0 ? "1.4em" : "inherit",
      }}
      key={index}
    >
      {/* remove -en or -es for a word */}
      {word.word.slice(0, -3)}

      <span
        className="badge bg-primary text-white rounded-pill fw-bold"
        style={{
          backgroundColor: "#0070ba",
          padding: "10px",
          fontSize: "20px",
        }}
      >
        {word.frequency}
      </span>
    </li>
  ));
};


  // count the total of unique EN translation words
  const countENWords = () => {
    const enWordsCount = getSortedWords.filter((word) =>
      word.word.includes("-en")
    ).length;
    return enWordsCount;
  };

  // count the total of unique ES translation words
  const countESWords = () => {
    const esWordsCount = getSortedWords.filter((word) =>
      word.word.includes("-es")
    ).length;
    return esWordsCount;
  };

  const enWordsCount = countENWords();
  const esWordsCount = countESWords();
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

            {/* <ProgressBar percentage={50} />; */}
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
            <>
              <div className="card-body">
                {getSortedWords.length > 0 ? (
                  <>
                    {getSortedWords.some((word) =>
                      word.word.includes("-en")
                    ) ? (
                      <>
                        <div className="row ">
                          <div className="col-md-6">
                            <h4 className="pt-2 pb-2">English Words</h4>
                            <ul className="list-group">
                              {displayWords("-en", showAllEN)}{" "}
                            </ul>
                            {/*  */}
                            {enWordsCount > 5 && (
                              <button
                                className="btn btn-secondary mt-2 mb-3 custom-button"
                                onClick={toggleShowAllEN}
                              >
                                {showAllEN ? "Show Less" : "Show All"}
                              </button>
                            )}
                          </div>
                          <div className="col-md-6 pt">
                            <h4 className="pt-2 pb-2">Progress</h4>
                            <ProgressBar count={enWordsCount} />
                          </div>
                        </div>
                        <div className=" border-bottom pb-3"> </div>
                      </>
                    ) : null}

                    {getSortedWords.some((word) =>
                      word.word.includes("-es")
                    ) ? (
                      <div className="row">
                        <div className="col-md-6">
                          <h4 className="pt-4 pb-2">Spanish Words</h4>
                          <ul className="list-group">
                            {displayWords("-es", showAllES)}{" "}
                          </ul>
                          {/*  */}
                          {esWordsCount > 5 && (
                            <button
                              className="btn btn-secondary mt-2 mb-3 custom-button"
                              onClick={toggleShowAllES}
                            >
                              {showAllES ? "Show Less" : "Show All"}
                            </button>
                          )}
                        </div>

                        <div className="col-md-6 pt">
                          <h4 className="pt-4 pb-2">Progress</h4>
                          <ProgressBar count={esWordsCount} />
                        </div>
                      </div>
                    ) : null}
                  </>
                ) : (
                  <p className="text-center">No words found</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TranslationHistory;
