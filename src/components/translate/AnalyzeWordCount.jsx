/*
Analyze the frequency word count data from the cookies.
*/
import React, { useState } from "react";
import "../../CSS/translate.css";

import VisualizeGraphs from "./VisualizeGraphs";

import TranslationHistory from "./TranslationHistory";

const AnalyzeWordCount = ({ getSortedWords }) => {
  return (
    <>
    {/* translation history - counts */}
    {getSortedWords.length > 0 ? (          
      <TranslationHistory getSortedWords = {getSortedWords}/>
    ):null
    }
    {/* visulization - graphs */}
    {getSortedWords.length > 0 ? (          
      <VisualizeGraphs getSortedWords = {getSortedWords}/>
    ):null
    }
    </>
  );
};

export default AnalyzeWordCount;
