// ThesaurusJson synonym and antonym tabs
import React from "react";

const ThesaurusTabs = ({ activeTab, data }) => {
  const flexContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "start",
  };

  const flexItem = {
    flex: "0 0 auto",
    margin: "10px",
  };

  switch (activeTab) {
    case "Synonyms":
      return (
        data.synonyms && (
          <div style={flexContainer}>
            {data.synonyms.map((synonym, i) => (
              <p style={flexItem} key={i}>
                {synonym}
              </p>
            ))}
          </div>
        )
      );
    case "Antonyms":
      return (
        data.typeOf && (
          <div style={flexContainer}>
            {data.typeOf.map((antonym, i) => (
              <p style={flexItem} key={i}>
                {antonym}
              </p>
            ))}
          </div>
        )
      );
    default:
      return null;
  }
};

export default ThesaurusTabs;
