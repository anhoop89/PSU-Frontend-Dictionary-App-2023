import React, { useState } from "react";
import NavTabs from "../NavTabs";
import ThesaurusTabs from "./ThesaurusTabs";
import NoResultsMessage from "../NoResultsMessage";
import dictionary from "../../data/dictionary.json";

const ThesaurusJson = ({ word }) => {
  const [activeTab, setActiveTab] = useState("Synonyms");
  const data = dictionary[word];

  if (!word) {
    return null;
  }

  if (!data) {
    return <NoResultsMessage searchedWord={word} />;
  }

  return (
    <div className="rounded mt-4">
      <div
        className="card-header p-3"
        style={{ backgroundColor: "var(--bs-dark)" }}
      >
        <h2 className="text-capitalize mb-3" style={{ fontSize: "3rem" }}>
          {word}{" "}
          <i style={{ fontSize: "1rem" }}>
            "{data.definitions[0].partOfSpeech}".
          </i>
        </h2>
        <b className="mt-4">Definition:</b>
        <p className="cap-first">{data.definitions[0].definition}</p>
      </div>
      <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div
        className="card-body rounded-bottom p-3"
        style={{
          borderTop: "none",
          borderRight: "1px solid var(--secondary)",
          borderBottom: "1px solid var(--secondary)",
          borderLeft: "1px solid var(--secondary)",
          backgroundColor: "var(--bs-dark)",
        }}
      >
        <ThesaurusTabs activeTab={activeTab} data={data.definitions[0]} />
      </div>
    </div>
  );
};

export default ThesaurusJson;
