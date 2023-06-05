import React from "react";

const TranslateBar = ({
  translateFrom,
  setTranslateFrom,
  setTranslateTo,
  getWord,
  setWord,
  translate,
  searching,
  prevWord,
}) => {
  const TranslateFromOption = (e) => {
    const selectedFrom = e.target.value;
    const selectedTo = selectedFrom === "en" ? "es" : "en";
    setTranslateFrom(selectedFrom);
    setTranslateTo(selectedTo);
  };
  const pressEnterTranslate = () => {
    // Don't perform translation if it's the same word
    // and already succesfully return a good result
    if (getWord === prevWord) {
      return; 
    }
    // Call the translate function passed as prop
    translate();
  };

  return (
    <div className="my-3">
      <div className="input-group mb-3">
        <label
          className="input-group-text fw-bold"
          htmlFor="translateFromOption"
          style={{ width: "220px" }}
        >
          Translate from:
        </label>
        <select
          className="form-select rounded"
          id="translateFromOption"
          value={translateFrom}
          onChange={TranslateFromOption}
          style={{ width: "100px", padding: "5.5px", cursor: "pointer" }}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      <div className="input-group mb-3">
        <div
          className="input-group-text fw-bold"
          htmlFor="translateToOption"
          style={{ width: "220px" }}
        >
          Translate to:
        </div>
        <div
          id="translateToOption"
          className="bg-light text-dark rounded border border-dark fw-bold"
          style={{ width: "100px", padding: "5.5px" }}
        >
          {translateFrom === "es" ? <span>English</span> : null}
          {translateFrom === "en" ? <span>Spanish</span> : null}
        </div>
      </div>

      <div className="input-group mb-3">
        <label htmlFor="wordInput" className="sr-only">Enter Word:</label>
        <input
          id="wordInput"
          type="text"
          className="form-control rounded"
          placeholder="Enter word"
          value={getWord}
          onChange={(e) => setWord(e.target.value)}
          style={{ width: "220px" }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              pressEnterTranslate();
            }
          }}
        />
        <button
  className="btn btn-primary rounded border border-dark"
  onClick={translate}
  style={{
    width: "100px",
    height: "45px",
    font: "20px",
    color: "#ffffff",
    background: "#0070ba",
  }}
>
  <strong>Translate</strong>
</button>

      </div>
      {searching && <p>Searching...</p>}
    </div>
  );
};

export default TranslateBar;
