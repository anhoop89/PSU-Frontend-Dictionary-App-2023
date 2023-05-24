import React, { useState, useEffect } from "react";
import WebsterAPI from "../api/WebsterAPI";

const TranslateWords = () => {
  const [getWord, setWord] = useState("");
  const [dataAPI, setDataAPI] = useState(null);
  const [translation, setTranslation] = useState(null);
  const [searching, setSearching] = useState(false);
  const [translateFrom, setTranslateFrom] = useState("en");
  const [translateTo, setTranslateTo] = useState("es");

  useEffect(() => {
    if (translateFrom === translateTo) {
      // If translateFrom and translateTo are the same, set translateTo to the opposite language
      if (translateFrom === "en") {
        setTranslateTo("es");
      } else if (translateFrom === "es") {
        setTranslateTo("en");
      }
    }
  }, [translateFrom, translateTo]);

  const translate = async () => {
    setSearching(true);
    try {
      const fetchData = async () => {
        const dataAPI = await WebsterAPI(getWord);
        console.log(dataAPI);
        setDataAPI(dataAPI);
      };

      let translation = "Translation not found";

      if (dataAPI && Array.isArray(dataAPI) && dataAPI.length > 0) {
        const wordData = dataAPI[0];

        if (translateFrom === "en" && wordData.meta.lang === "en") {
          translation = wordData.shortdef[0];
        } else if (translateFrom === "es" && wordData.meta.lang === "es") {
          translation = wordData.shortdef[0];
        } else {
          translation = `You entered a ${translateFrom === "en" ? "Spanish" : "English"} word`;
        }
      }

      setTranslation(translation);
    } catch (error) {
      console.error(error);
      setTranslation("An error occurred during translation");
    } finally {
      setSearching(false);
    }
  };

  return (
    <div>
      <div>
        <label>
          Translate from:
          <select
            value={translateFrom}
            onChange={(e) => setTranslateFrom(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Translate to:
          <select
            value={translateTo}
            onChange={(e) => setTranslateTo(e.target.value)}
          >
            <option value="es" disabled={translateFrom === "es"}>
              Spanish
            </option>
            <option value="en" disabled={translateFrom === "en"}>
              English
            </option>
          </select>
        </label>
      </div>
      <div>
        <input
          type="text"
          value={getWord}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={fetchData}>Translate</button>
      </div>
      {searching && <p>Searching...</p>}
      {translation && <p>{translation}</p>}
    </div>
  );
};

export default TranslateWords;
