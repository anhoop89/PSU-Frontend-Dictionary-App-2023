import React, { useState } from 'react';

function WordsAPI() {
  const apiKey = process.env.REACT_APP_Words_APIv1_key;
  const url = 'https://wordsapiv1.p.rapidapi.com/words/';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  };

  const [word, setWord] = useState('');
  const [data, setData] = useState(null);

  const fetchWord = async () => {
    try {
      const response = await fetch(`${url}${word}/definitions`, options);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section 
      className='WordsAPI-Section text-light mx-auto mt-5'
      style={{ maxWidth:'768px', backgroundColor:'var(--bs-darker)' }}
    >
      <h1 className='WordsAPI-H1 text-center m-auto pb-4'>
        Start Exploring and Searching for Words in the Dictionary
      </h1>

      <div className='input-group d-flex justify-content-center py-2'>
        <input
          className='form-control'
          type="text" value={ word }
          onChange={ (e) => setWord(e.target.value) }
          style={{ 
            borderRadius: '.25rem 0 0 .25rem',
            maxWidth: '720px', height: '40px' 
          }}
        /> 
        <button
          className='btn btn-danger'
          aria-label='Search-button' 
          onClick={ fetchWord }
          style={{ 
            borderRadius: '0 .25rem .25rem 0',
            width: '48px', height: '40px'
          }}
        > <svg 
            className="bi bi-search" 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
            ><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>

      { data && data.definitions.slice(0, 1).map((definition, index) => (
        <div
          key={ index }
          className='rounded my-4' 
          style={{ backgroundColor:'var(--bs-dark)' }}
        >
          <h1 className='card-header text-capitalize p-3'>{ word }</h1>
          <div className='card-body p-3'>
            <p className='fst-italic'>
              <b>Part of Speech:</b> 
              <i>"{ definition.partOfSpeech.toString() }"</i>
            </p>
            <b>Definition:</b> 
            <p className='cap-first'>{ definition.definition.toString() }.</p>
          </div>
        </div>
      ))} 
    </section>
  );
} 

export default WordsAPI;
