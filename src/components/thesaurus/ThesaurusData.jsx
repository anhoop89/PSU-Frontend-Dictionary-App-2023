import React, { useState } from "react";
import NavTabs from "./ThesaurusTabs";
import TabButton from "./TabButtonData";

const ThesaurusData = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Synonyms");

  return (
    <section className="rounded mt-4">
      <div
        className="card-header p-3"
        style={{ backgroundColor: "var(--bs-dark)" }}
      >
        <h2 className="text-capitalize mb-3" style={{ fontSize: "3rem" }}>
          {data.meta.id} <i style={{ fontSize: "1rem" }}>"{data.fl}".</i>
        </h2>
        <b className="mt-4">Definition:</b>
        <p className="cap-first">{data.shortdef[0]}</p>
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
        <TabButton activeTab={activeTab} data={data} />
      </div>
    </section>
  );
};

export default ThesaurusData;
