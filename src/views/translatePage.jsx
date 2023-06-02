/*
This is a main page for the translate tab. 
  It will be also storing the word which successfully translated to the cookies
  This way, even if they accidentally close the tab or browser, reopening the translate tab 
    will still display the words they have previously translated.

Supported components: translateBar, visualizeFrequency 
*/

import React, { useState, useEffect, useCallback } from "react";
import WebsterAPI from "../api/WebsterAPI";
import TranslateBar from "../components/translate/TranslateBar";
import AOS from "aos";
import "aos/dist/aos.css";
import Cookies from "js-cookie";
import VisualizeWordCounts from "../components/translate/VisualizeWordCounts";
import "../CSS/translate.css";

const TranslatePage = () => {
  const [getWord, setWord] = useState(""); // input
  const [translation, setTranslation] = useState(null);
  const [translateFrom, setTranslateFrom] = useState("en");
  const [translateTo, setTranslateTo] = useState("es");
  const [searching, setSearching] = useState(false);
  const [getTransResult, setTransResult] = useState(false); // check trans result
  const [getSortedWords, setSortedWords] = useState([]);
  const [prevWord, setPrevWord] = useState("");

  const sortedWordFrequency = useCallback(() => {
    const cookies = Cookies.get();
    console.log("Cookies:", cookies);
    const wordFrequencies = Object.entries(cookies)
      .filter(([key, value]) => {
        if (key === "undefined" || isNaN(Number(value))) {
          console.log("Invalid cookies");
          return false;
        } else {
          console.log("Valid cookies");
          return true;
        }
      })
      //storing the word and frequency in an object of the cookies.
      .map(([key, value]) => ({ word: key, frequency: Number(value) }))
      //sorting the words to dipslay from the top to bottom.
      .sort((a, b) => b.frequency - a.frequency);
    setSortedWords(wordFrequencies);
  }, []);

  // render the animation and word frequency
  useEffect(() => {
    AOS.init();
    sortedWordFrequency();
  }, [sortedWordFrequency]);

  const translate = async () => {
    if (getWord === prevWord && getTransResult) {
      return; // Don't perform translation if it's the same word
    }
    setSearching(true);
    try {
      const fetchData = await WebsterAPI(getWord);
      // console.log(fetchData);
      // default translation.
      let translation = "Translation not found";
      // default storing the words in cookies.
      let wordInCookies = null;
      // check the API data. If good, display the data and store them into cookies
      if (fetchData && Array.isArray(fetchData) && fetchData.length > 0) {
        const wordData = fetchData[0];
        if (translateFrom === "en" && wordData.meta.lang === "en") {
          // get an result of the translation.
          translation = wordData.shortdef[0];
          // add -en to get all the english words into a group
          wordInCookies = getWord.toLowerCase() + "-en";
          setTransResult(true);
        } else if (translateFrom === "es" && wordData.meta.lang === "es") {
          translation = wordData.shortdef[0];
          // add -es to get all the english words into a group
          wordInCookies = getWord.toLowerCase() + "-es";
          setTransResult(true);
        } else {
          translation = `Warning: You entered a ${
            translateFrom === "en" ? "Spanish" : "English"
          } word`;
          setTransResult(false);
        }

        // count frequency of a word storing in cookies
        if (wordInCookies !== null) {
          const wordFrequency = Cookies.get(wordInCookies);
          // this is totally a new frequency. it should be set to 1.
          // Later on it can be increasing 1 if repeating the translate
          const newFrequency = isNaN(Number(wordFrequency))
            ? 1
            : Number(wordFrequency) + 1;
          Cookies.set(wordInCookies, newFrequency);
        }
      } else if (
        fetchData &&
        Array.isArray(fetchData) &&
        fetchData.length === 0
      ) {
        translation = `No found for "${getWord}" translation`;
      }

      setTranslation(translation);
      sortedWordFrequency();
    } catch (error) {
      console.error(error);
      setTranslation("ERROR: Can't translate this time!");
      setTransResult(false);
    } finally {
      setSearching(false);
    }
    setPrevWord(getWord);
    console.log("checking getSortedWords " + getSortedWords);
  };

  return (
    <section
      className="Define-Section text-light mx-auto mt-5"
      style={{ maxWidth: "768px", backgroundColor: "var(--bs-darker)" }}
    >
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
                prevWord={prevWord}
              />
            </div>
          </div>
          <div className="col" data-aos="fade-left">
            <div
              className="custom-border card-body mt-3 rounded"
              style={{
                height: "70%",
              }}
            >
              <h3 className="text-center text-light border-bottom pb-3 mb-3 rounded-3">
                Result
              </h3>
              {translation && <p>{translation}</p>}
            </div>
          </div>
        </div>
        {/* visulization */}
        <div>
          <VisualizeWordCounts getSortedWords={getSortedWords} />
        </div>
      </div>
    </section>
  );
};

export default TranslatePage;
