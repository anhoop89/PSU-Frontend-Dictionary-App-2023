import axios from "axios";

const ThesaurusAPI = async (word) => {
  const apiKey = process.env.REACT_APP_WebThesaurus_Key;
  const url = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/";
  try {
    const response = await axios.get(`${url}${word}?key=${apiKey.toString()}`);
    const data = response.data[0];
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default ThesaurusAPI;
