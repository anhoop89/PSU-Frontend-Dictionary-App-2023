import React, { useState } from 'react';
import ThesaurusAPI from '../api/ThesaurusAPI';
import SearchBar from '../components/SearchBar';
import TabButton from '../components/TabButtom';
import NavTabs from '../components/NavTabs';

const ThesaurusPage = () => {
  const [word, setWord] = useState('');
  const [data, setData] = useState(null);
  const [searchedWord, setSearchedWord] = useState('');
  const [activeTab, setActiveTab] = useState('Synonyms');
  const [searchAttempt, setSearchAttempt] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await ThesaurusAPI(word);
    setIsLoading(false);
    setSearchAttempt(true);
    setSearchedWord(word);
    setData(data);
    setWord('');
  };

  return (
    <section
      className="Define-Section text-light mx-auto mt-5"
      style={{ maxWidth: '768px', backgroundColor: 'var(--bs-darker)' }}
    >
      <h1 className="Define-H1 text-center m-auto pb-4">Thesaurus API Page</h1>
      <SearchBar
        value={word}
        onChange={(e) => setWord(e.target.value.trim())}
        onSearch={fetchData}
      />

      {isLoading && <h2>Loading...</h2>}
      {!isLoading && data && data.meta && data.fl && data.shortdef ? (
        <div className="rounded mt-4">
          <div
            className="card-header p-3"
            style={{ backgroundColor: 'var(--bs-dark)' }}
          >
            <h2 className="text-capitalize mb-3" style={{ fontSize: '3rem' }}>
              {data.meta.id} <i style={{ fontSize: '1rem' }}>"{data.fl}".</i>
            </h2>
            <b className="mt-4">Definition:</b>
            <p className="cap-first">{data.shortdef[0]}</p>
          </div>
          <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div
            className="card-body rounded-bottom p-3"
            style={{
              borderTop: 'none',
              borderRight: '1px solid var(--secondary)',
              borderBottom: '1px solid var(--secondary)',
              borderLeft: '1px solid var(--secondary)',
              backgroundColor: 'var(--bs-dark)',
            }}
          >
            <TabButton activeTab={activeTab} data={data} />
          </div>
        </div>
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

export default ThesaurusPage;
