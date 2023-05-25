import React from "react";

const TabButton = ({ activeTab, data }) => {
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
        data.meta.syns &&
        data.meta.syns.map((synonymsArray, index) => (
          <div style={flexContainer} key={index}>
            {synonymsArray.map((synonym, i) => (
              <p style={flexItem} key={i}>
                {synonym}
              </p>
            ))}
          </div>
        ))
      );
    case "Antonyms":
      return (
        data.meta.ants &&
        data.meta.ants.map((antonymsArray, index) => (
          <div style={flexContainer} key={index}>
            {antonymsArray.map((antonym, i) => (
              <p style={flexItem} key={i}>
                {antonym}
              </p>
            ))}
          </div>
        ))
      );
    default:
      return null;
  }
};

export default TabButton;
