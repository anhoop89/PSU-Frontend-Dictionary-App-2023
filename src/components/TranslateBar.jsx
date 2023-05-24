import React from "react";

const TranslateBar = ({
  translateFrom,
  translateTo,
  setTranslateFrom,
  setTranslateTo,
  getWord,
  setWord,
  translate,
  searching,
}) => {
  const TranslateFromOption = (e) => {
    const selectedFrom = e.target.value;
    const selectedTo = selectedFrom === "en" ? "es" : "en";
    setTranslateFrom(selectedFrom);
    setTranslateTo(selectedTo);
  };

  return (
    <div className="my-3">
      <div className="input-group mb-3">
        <label className="input-group-text fw-bold" htmlFor="translateFromOption" style={{ width: "220px" }}>
          Translate from:
        </label>
        <select
          className="form-select"
          id="translateFromOption"
          value={translateFrom}
          onChange={TranslateFromOption}
          style={{ width: "90px" }}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text fw-bold" htmlFor="translateToOption" style={{ width: "220px" }}>
          Translate to:
        </label>
        <select
          className="form-select"
          id="translateToOption"
          value={translateTo}
          onChange={(e) => setTranslateTo(e.target.value)}
          style={{ width: "90px" }}
        >
          <option value="es" disabled={translateFrom === "es"}>
            Spanish
          </option>
          <option value="en" disabled={translateFrom === "en"}>
            English
          </option>
        </select>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter word"
          value={getWord}
          onChange={(e) => setWord(e.target.value)}
        />
        <button className="btn btn-primary" onClick={translate}>
          <span>Translate</span>
        </button>

      </div>

      {searching && <p>Searching...</p>}
    </div>
  );
};

export default TranslateBar;
