import React, { useState } from "react";
import WordsAPI from "../api/WordsAPI";
import SearchBar from "../components/SearchBar";

const WordsPage = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [searchedWord, setSearchedWord] = useState("");
  const [searchAttempt, setSearchAttempt] = useState(false);

  const fetchData = async () => {
    const data = await WordsAPI(word);
    setSearchAttempt(true);
    setSearchedWord(word);
    setData(data);
    setWord("");
  };

  return (
    <section
      className="Define-Section text-light mx-auto mt-5"
      style={{ maxWidth: "768px", backgroundColor: "var(--bs-darker)" }}
    >
      <h1 className="Define-H1 text-center m-auto pb-4">
        Start Exploring and Searching for Words in the Dictionary
      </h1>
      <SearchBar
        value={word}
        onChange={(e) => setWord(e.target.value.trim())}
        onSearch={fetchData}
      />
      {data && data.definitions && data.definitions.length > 0 ? (
        <div
          className="rounded my-4"
          style={{ backgroundColor: "var(--bs-dark)" }}
        >
          <h1 className="card-header text-capitalize p-3">{data.word}</h1>
          <div className="card-body p-3">
            <p className="fst-italic">
              <b>Part of Speech: </b>
              <i>"{data.definitions[0].partOfSpeech.toString()}"</i>
            </p>
            <b>Definition:</b>
            <p className="cap-first">
              {data.definitions[0].definition.toString()}.
            </p>
          </div>
        </div>
      ) : (
        searchAttempt && (
          <div className="text-center mx-auto mt-4">
            <i className="alert alert-warning">
              <b className="text-dark" style={{ fontStyle: "normal" }}>
                Sorry, No results found for: "{searchedWord}"
              </b>
            </i>
          </div>
        )
      )}
    </section>
  );
};

export default WordsPage;
