import axios from 'axios';

const WordsAPI = async (word) => {
  const apiKey = process.env.REACT_APP_Words_APIv1_key;
  const url = 'https://wordsapiv1.p.rapidapi.com/words/';
  try {
    const response = await axios.get(`${url}${word}`, {
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default WordsAPI;
