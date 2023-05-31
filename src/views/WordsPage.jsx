import React, { useState, useEffect } from 'react';
import WordsAPI from '../api/WordsAPI';
import SearchBar from '../components/SearchBar';
import Definitions from '../components/definitions';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

const WordsPage = () => {
  const options = {};
  const [word, setWord] = useState('');
  const [data, setData] = useState(null);
  const [searchedWord, setSearchedWord] = useState('');
  const [searchAttempt, setSearchAttempt] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [wordArray, setWordArray] = useState([]);
  const [freqArray, setFreqArray] = useState([]);
  const [barData, setBarData] = useState({});

  useEffect(() => {
    const freqs = freqArray;
    const wordNames = wordArray;
    setBarData({
      labels: wordArray,
      datasets: [
        {
          data: freqs,
          backgroundColors: backgroundColors,
          borderColors: borderColors,
          borderWidth: 2,
        },
      ],
    });
  }, [wordArray, freqArray]);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await WordsAPI(word);

    // console.log('data', data);
    // console.log('data.word', data.word);
    // console.log('data.frequency', data.frequency);
    // console.log('data.results', data.results);

    setIsLoading(false);
    setSearchAttempt(true);
    setSearchedWord(word);
    setData(data);
    if (data.results && data.frequency) {
      setWordArray((current) => [...current, data.word]);
      setFreqArray((current) => [...current, data.frequency]);
    }
    setWord('');
  };

  console.log('wordArray', wordArray);
  console.log('freqArray', freqArray);

  return (
    <section
      className="Define-Section text-light mx-auto mt-5"
      style={{ maxWidth: '768px', backgroundColor: 'var(--bs-darker)' }}
    >
      <h1 className="Define-H1 text-center m-auto pb-4">
        Start Exploring and Searching for Words in the Dictionary
      </h1>
      <SearchBar
        value={word}
        onChange={(e) => setWord(e.target.value.trim())}
        onSearch={fetchData}
      />
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && data && data.results && data.results.length > 0 ? (
        <>
          <Definitions data={data} />
          <Bar data={barData} options={options}></Bar>
        </>
      ) : (
        !isLoading &&
        searchAttempt && (
          <div className="text-center mx-auto mt-4">
            <i className="alert alert-warning">
              <b className="text-dark" style={{ fontStyle: 'normal' }}>
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
