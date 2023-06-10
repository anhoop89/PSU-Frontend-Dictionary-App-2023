import React, { useState, useEffect, useCallback } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import SearchBar from "../components/SearchBar";
import ThesaurusAPI from "../api/ThesaurusAPI";
import ThesaurusData from "../components/thesaurus/ThesaurusData";
import ThesaurusJson from "../components/thesaurus/ThesaurusJson";

const ThesaurusPage = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await ThesaurusAPI(search);
      setData(data);
    } catch (error) {
      console.error("Error fetching data from ThesaurusAPI", error);
    }
    setIsLoading(false);
  }, [search]);

  useEffect(() => {
    if (search) {
      fetchData();
    }
  }, [search, fetchData]);

  const handleSearch = () => {
    setSearch(word);
  };

  return (
    <section
      className="Define-Section text-light mx-auto mt-5"
      style={{ maxWidth: "768px", backgroundColor: "var(--bs-darker)" }}
    >
      <h1 className="Define-H1 text-center m-auto pb-4">Thesaurus </h1>
      <h2
        className="Define-H1 text-center m-auto pb-4"
        style={{ color: "#CCCCCC", fontSize: "26.5px" }}
      >
        See a words antonyms and synonyms!
      </h2>
      <SearchBar
        value={word}
        onChange={(e) => setWord(e.target.value.trim())}
        onSearch={handleSearch}
      />

      {isLoading ? (
        <LoadingAnimation />
      ) : data && data.meta ? (
        <ThesaurusData data={data} />
      ) : (
        <ThesaurusJson word={search} />
      )}
    </section>
  );
};

export default ThesaurusPage;
