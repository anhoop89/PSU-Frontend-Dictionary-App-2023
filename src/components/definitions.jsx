import { useState } from 'react';

export default function Definitions({ data }) {
  const collapsed = 6; // Max number of definitions to display when 'collapsed'
  const expanded = 100; // Max number of definitions to display when 'expanded'

  const [isHovering, setIsHovering] = useState(-1);
  const [maxIndex, setMaxIndex] = useState(collapsed);

  const defs = data.definitions;

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
        className="card-header rounded text-center text-capitalize mt-4"
        style={{ backgroundColor: 'var(--bs-dark)' }}
      >
        {data.word}
      </h1>
      {defs.map(
        (def, index) =>
          index < maxIndex && (
            <>
              {def.isTitle && (
                <h3 className="mt-3 pl-3">
                  <i>{def.partOfSpeech}</i>
                </h3>
              )}
              <div key={index} className="rounded">
                <div
                  onMouseEnter={() => setIsHovering(index)}
                  onMouseLeave={() => setIsHovering(-1)}
                  className={`${
                    isHovering === index
                      ? 'card-body p-3 rounded'
                      : 'card-body p-3 rounded border border-dark'
                  }`}
                  style={
                    isHovering === index
                      ? { backgroundColor: 'var(--bs-darkest)' }
                      : { backgroundColor: 'var(--bs-dark)' }
                  }
                >
                  <div className="d-flex font-weight-bold font">
                    <div
                      className="mr-3"
                      style={{ fontSize: '1.20rem', minWidth: '30px' }}
                    >
                      {index + 1}.
                    </div>
                    <div
                      className="cap-first definition-text"
                      id="definition-text"
                    >
                      {def.definition.toString()}.
                    </div>
                  </div>
                </div>
              </div>
            </>
          ),
      )}
      {defs.length > collapsed ? (
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-secondary m-4"
            onClick={() => {
              maxIndex === collapsed
                ? setMaxIndex(expanded)
                : setMaxIndex(collapsed);
            }}
          >
            {`${maxIndex === collapsed ? 'Show All' : 'Collapse'}`}
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
