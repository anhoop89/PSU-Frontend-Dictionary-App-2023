/*
Get the words from the cookies. Divides them into 2 groups: English | Spanish
Display the words with the name and frequency 
*/
import React from "react";

const VisualizeFrequency = ({ getSortedWords }) => {
  return (
    <div
      className="card mt-4"
      style={{
        borderTop: "1px solid var(--secondary)",
        borderRight: "1px solid var(--secondary)",
        borderBottom: "1px solid var(--secondary)",
        borderLeft: "1px solid var(--secondary)",
        backgroundColor: "var(--bs-dark)",
        width: "100%",
      }}
    >
      <div className="card-body">
        <h3 className="text-center card-title text-light border-bottom pb-3 mb-3 rounded-3">
          Words Frequency - History
        </h3>
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
                          className="list-group-item d-flex justify-content-between align-items-center bg-dark"
                          style={{
                            borderTop: "1px solid var(--secondary)",
                            borderRight: "1px solid var(--secondary)",
                            borderBottom: "1px solid var(--secondary)",
                            borderLeft: "1px solid var(--secondary)",
                            backgroundColor: "var(--bs-dark)",
                            width: "100%",
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
                          className="list-group-item d-flex justify-content-between align-items-center bg-dark"
                          style={{
                            borderTop: "1px solid var(--secondary)",
                            borderRight: "1px solid var(--secondary)",
                            borderBottom: "1px solid var(--secondary)",
                            borderLeft: "1px solid var(--secondary)",
                            backgroundColor: "var(--bs-dark)",
                            width: "100%",
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
    </div>
  );
};

export default VisualizeFrequency;
