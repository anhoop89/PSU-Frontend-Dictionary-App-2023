import React, { useState, useEffect} from "react";
import WebsterAPI from "../api/WebsterAPI";
import TranslateBar from "../components/TranslateBar";
import AOS from 'aos';
import "aos/dist/aos.css";


const TranslatePage = () => {
  const [getWord, setWord] = useState("");
  const [translation, setTranslation] = useState(null);
  const [searching, setSearching] = useState(false);
  const [translateFrom, setTranslateFrom] = useState("en");
  const [translateTo, setTranslateTo] = useState("es");
  
  useEffect(() => {
    AOS.init();
  }, []);

  const translate = async () => {
    setSearching(true);
    try {
      const fetchData = await WebsterAPI(getWord);
      console.log(fetchData);

      let translation = "Translation not found";

      // check if we fetched the word data from API successfully.
      if (fetchData && Array.isArray(fetchData) && fetchData.length > 0) {
        const wordData = fetchData[0];
        // if successfully found a data, display short definition from the API data.
        if (translateFrom === "en" && wordData.meta.lang === "en") {
          translation = wordData.shortdef[0];
        } else if (translateFrom === "es" && wordData.meta.lang === "es") {
          translation = wordData.shortdef[0];
        } else {
          // checking if the user picked an option to translate eng to sp, but entered an Eng word.
          translation = `Warning: You entered a ${
            translateFrom === "en" ? "Spanish" : "English"
          } word`;
        }
      } else if (fetchData && Array.isArray(fetchData) && fetchData.length === 0) {
        translation = `No found for "${getWord}" translation`;
      }

      setTranslation(translation);
    } catch (error) {
      console.error(error);
      setTranslation("ERROR: Can't translate this time!");
    } finally {
      setSearching(false);
    }
  };

  return (
    <section className="Define-Section text-light mx-auto mt-5" style={{ maxWidth: "768px", backgroundColor: "var(--bs-darker)" }}>
    <div className="container">
      <h1 className="Define-H1 text-center m-auto pb-4">
        Let's explore and translate a word!
      </h1>
      <div className="row">
        <div className="col" data-aos="fade-up-right">
          <div className="input-group mb-3">
            <TranslateBar
              translateFrom={translateFrom}
              translateTo={translateTo}
              setTranslateFrom={setTranslateFrom}
              setTranslateTo={setTranslateTo}
              getWord={getWord}
              setWord={setWord}
              translate={translate}
              searching={searching}
            />
          </div>
        </div>
        <div className="col" data-aos="fade-left">
          <div
            className="card-body mt-3 rounded"
            style={{
              borderTop: "1px solid var(--secondary)",
              borderRight: "1px solid var(--secondary)",
              borderBottom: "1px solid var(--secondary)",
              borderLeft: "1px solid var(--secondary)",
              backgroundColor: "var(--bs-dark)",
              width: "100%",
              height: "70%",
            }}
          >
            <h3 className="text-center text-light border-bottom pb-3 mb-3 rounded-3">Result</h3>
            {translation && <p>{translation}</p>}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default TranslatePage;
