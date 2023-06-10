import React, { useState, useEffect } from "react";
import ThesaurusChart from "./ThesaurusChart";
import WordsAPI from "../../api/WordsAPI";

const TabButton = ({ activeTab, data }) => {
  const [isStats, setStats] = useState([null]);
  const [isSynExpanded, setSynExpanded] = useState(false);
  const [isAntExpanded, setAntExpanded] = useState(false);

  const flexContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "start",
  };

  const flexItem = {
    flex: "0 0 auto",
    margin: "10px",
  };

  const buttonContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let synonymStats = [];
        const fetchedWordStats = await WordsAPI(`${data.meta.id}/frequency`);
        if (data.meta.syns && data.meta.syns[0]) {
          synonymStats = await Promise.all(
            data.meta.syns[0].map((syn) => WordsAPI(`${syn}/frequency`))
          );
        }
        // Filter out null results and values less than 0.1
        const validStats = [fetchedWordStats, ...synonymStats].filter(
          (stat) => stat && stat.frequency
        );
        setStats(validStats);
      } catch (error) {
        console.error("Error fetching word stats from WordsAPI", error);
      }
    };
    fetchData();
  }, [data]);

  const ExpandButton = ({ isExpanded, setIsExpanded }) => (
    <div style={buttonContainer}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="btn btn-primary mt-2 mx-auto"
        aria-label="Expand-button"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );

  switch (activeTab) {
    case "Synonyms":
      return (
        <>
          {data.meta.syns &&
            data.meta.syns
              .slice(0, isSynExpanded ? data.meta.syns.length : 3)
              .map((synonymsArray, index) => (
                <div style={flexContainer} key={index}>
                  {synonymsArray.map((synonym, i) => (
                    <p style={flexItem} key={i}>
                      {synonym}
                    </p>
                  ))}
                </div>
              ))}
          {data.meta.syns && data.meta.syns.length > 3 && (
            <ExpandButton
              isExpanded={isSynExpanded}
              setIsExpanded={setSynExpanded}
            />
          )}
        </>
      );
    case "Antonyms":
      return (
        <>
          {data.meta.ants &&
            data.meta.ants
              .slice(0, isAntExpanded ? data.meta.ants.length : 3)
              .map((antonymsArray, index) => (
                <div style={flexContainer} key={index}>
                  {antonymsArray.map((antonym, i) => (
                    <p style={flexItem} key={i}>
                      {antonym}
                    </p>
                  ))}
                </div>
              ))}
          {data.meta.ants && data.meta.ants.length > 3 && (
            <ExpandButton
              isExpanded={isAntExpanded}
              setIsExpanded={setAntExpanded}
            />
          )}
        </>
      );
    case "Rating":
      return <>{isStats && <ThesaurusChart stats={isStats} />}</>;
    default:
      return null;
  }
};

export default TabButton;
