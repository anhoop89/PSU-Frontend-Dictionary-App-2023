import React, { useState } from "react";
import ThesaurusAPI from "../api/ThesaurusAPI";
import SearchBar from "../components/SearchBar";
import TabButton from "../components/TabButtom";
import NavTabs from "../components/NavTabs";

const ThesaurusPage = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("Synonyms");

  const fetchData = async () => {
    const data = await ThesaurusAPI(word);
    setData(data);
  };

  return (
    <section
      className="Define-Section text-light mx-auto mt-5"
      style={{ maxWidth: "768px", backgroundColor: "var(--bs-darker)" }}
    >
      <h1 className="Define-H1 text-center m-auto pb-4">Thesaurus API Page</h1>
      <SearchBar
        value={word}
        onChange={(e) => setWord(e.target.value.trim())}
        onSearch={fetchData}
      />
      {data && (
        <div className="rounded mt-4">
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
        </div>
      )}
    </section>
  );
};

export default ThesaurusPage;
