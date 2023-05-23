import React, { useState } from "react";
import axios from "axios";


const apiKey = process.env.REACT_APP_Spanish_Key;
const url = "https://www.dictionaryapi.com/api/v3/references/spanish/json/";


const TranslateWords = () => {
  // users enter a word to translate
  const [getWord, setWord] = useState("");
  const [translation, setTranslation] = useState(null);
  const [Searching, setSearching] = useState(false);

  const translate = async () => {
    setSearching(true);
    try {
      // fetch data from the API 
      const response = await axios.get(`${url}${getWord}?key=${apiKey}`);
      const dataAPI = response.data;
      // Check if the translation data exists
      if (Array.isArray(dataAPI) && dataAPI.length > 0) {
        const translation = {
          word: getWord,
          meaning: getConversion(dataAPI[0]),
          audio: getAudio(dataAPI[0]),
        };
        setTranslation(translation);
      } else {
        setTimeout(() => {
          setTranslation("Translation not found");
        }, 5000);
      }
    } catch (error) {
      console.log("Error translating:", error);
      setTranslation("Translation not found");
    }
    setSearching(false);
  };

  // Technically this func finds the meaning of the searched word in an opposite lang. 
  const getConversion = (searching) => {
    if (searching.shortdef && searching.shortdef.length > 0) {
      const shortDefinition = searching.shortdef[0];
      return shortDefinition;
    }
    return " *** Meaning not found *** ";
  };

  // find the audio for prounuciation if avaibale. 
  const getAudio = (searching) => {
    if (searching.hwi.prs[0].sound && searching.hwi.prs[0].sound.audio) {
      const audioKey = searching.hwi.prs[0].sound.audio;
      return `https://media.merriam-webster.com/audio/prons/en/us/mp3/${audioKey.charAt(
        0
      )}/${audioKey}.mp3`;
    }
    return null;
  };


  return (
    <div>

      <div className="input-group d-flex justify-content-center py-2">

        <input
          className="form-control"
          type="text"
          value={getWord}
          onChange={(e) => setWord(e.target.value)}
          style={{
            borderRadius: '.25rem 0 0 .25rem',
            maxWidth: '720px',
            height: '40px',
          }}
        />
        <button className="btn btn-danger"
          aria-label="Translate-button"
          style={{
            borderRadius: '0 .25rem .25rem 0',
            width: '100px',
            height: '40px',
          }} onClick={translate}>Translate</button>
          
      </div>

      {Searching && <p>Checking the word . . .</p>}


      {translation && typeof translation === "object" && (
        <div>
          <p className="py-3 border-bottom">
            <span className="font-weight-bold">Word:</span> 
            {translation.word}
          </p>
          <p className="py-2 font-weight-bold">Meaning:</p>
          <pre className="border-bottom pb-3">{translation.meaning}</pre>
          {translation.audio && (
            <audio controls>
              <source src={translation.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      )}

      {translation === "Translation not found"
        && <p>We could not found any translation for this word!</p>}
    </div>
  );
};

export default TranslateWords;