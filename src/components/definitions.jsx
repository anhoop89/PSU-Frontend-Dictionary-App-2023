import { useState } from 'react';

export default function Definitions({ data }) {
  const min = 5; // Number of definitions to display when 'collapsed'
  const max = 100; // Number of definitions to display when 'expanded'

  const [hovering, setHovering] = useState(-1);
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
    <div className="p-4">
      <h1
        className="card-header rounded text-capitalize mt-2"
        style={{ backgroundColor: 'var(--bs-darker)', fontSize: '3rem' }}
      >
        {data.word}
      </h1>
      <div className="rounded border border-secondary">
        {defs.map(
          (def, index) =>
            index < defsVisible && (
              <div key={index} className="rounded">
                {def.isTitle && (
                  <div
                    className="d-flex rounded "
                    style={{ backgroundColor: 'var(--bs-dark)' }}
                  >
                    <h4 className="mt-2 pl-3">
                      <i>{def.partOfSpeech}</i>
                    </h4>
                  </div>
                )}
                <div
                  onMouseEnter={() => setHovering(index)}
                  onMouseLeave={() => setHovering(-1)}
                  className="card-body p-3 rounded border border-dark"
                  style={
                    hovering === index
                      ? { backgroundColor: 'var(--bs-dark)' }
                      : { backgroundColor: 'var(--bs-darker)' }
                  }
                >
                  <div className="d-flex font-weight-bold font">
                    <div
                      className="mr-3"
                      style={{ fontSize: '1.20rem', minWidth: '30px' }}
                    >
                      {index + 1}.
                    </div>
                    <div className="cap-first definition-text">
                      {def.definition.toString()}.
                    </div>
                  </div>
                </div>
              </div>
            ),
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
