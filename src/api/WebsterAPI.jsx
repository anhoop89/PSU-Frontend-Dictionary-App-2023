import axios from "axios";
// for some reason, it doesn't recognize the key through .env file sometimes
const apiKey = process.env.REACT_APP_Spanish_Key;
// testing this key worked
// const apiKey = "877a0bd4-cb72-4741-8265-41e318755512";
const url = "https://www.dictionaryapi.com/api/v3/references/spanish/json/";

const WebsterAPI = async (word) => {
  try {
    console.log("the word:   " + word);
    const response = await axios.get(`${url}${word}?key=${apiKey}`);
    console.log("the resp:   " + response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default WebsterAPI;
