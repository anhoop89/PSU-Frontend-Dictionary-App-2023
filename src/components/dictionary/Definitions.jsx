import Definition from '../dictionary/Definition';
import { useState } from 'react';

export default function Definitions({ data }) {
  const min = 5; // Number of definitions to display when 'collapsed'
  const max = 100; // Number of definitions to display when 'expanded'

  const [defsVisible, setDefsVisible] = useState(min);

  const defs = data.results;

  // Sort the definitions by their 'part of speech'
  defs.sort((a, b) => a.partOfSpeech > b.partOfSpeech);

  // Assign a 'title' flag to the first of each type of definition. This flag will
  // be used to determine where to display the partsOfSpeech section titles of the
  // definition list output.
  for (let i = 0; i < defs.length; i += 1) {
    if (i === 0) {
      defs[i].isTitle = true;
    } else if (defs[i].partOfSpeech === defs[i - 1].partOfSpeech) {
      defs[i].isTitle = false;
    } else {
      defs[i].isTitle = true;
    }
  }

  return (
    <div className="py-4">
      <h1
        className="card-header rounded text-capitalize mt-2"
        style={{ backgroundColor: 'var(--bs-darker)', fontSize: '3rem' }}
      >
        {data.word}
      </h1>
      <div className="rounded border border-secondary">
        {defs.map(
          (def, index) =>
            index < defsVisible && <Definition def={def} key={index} />,
        )}
      </div>
      {
        // only show button if results list is longer than min
        defs.length > min ? (
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-secondary m-4"
              onClick={() => {
                defsVisible === min ? setDefsVisible(max) : setDefsVisible(min);
              }}
            >
              {`${defsVisible === min ? 'Show All' : 'Show Less'}`}
            </button>
          </div>
        ) : (
          <></>
        )
      }
    </div>
  );
}
