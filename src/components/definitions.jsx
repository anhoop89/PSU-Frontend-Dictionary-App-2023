import { useState } from 'react';

export default function Definitions({ data }) {
  const [isHovering, setIsHovering] = useState(-1);

  return (
    <div>
      <h1
        className="card-header rounded text-center text-capitalize my-4"
        style={{ backgroundColor: 'var(--bs-dark)' }}
      >
        {data.word}
      </h1>
      {data.definitions.map((definition, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'var(--bs-dark)',
          }}
          className="rounded"
        >
          <div
            className={`${
              isHovering === index
                ? 'card-body p-3 rounded'
                : 'card-body p-3 rounded border border-dark'
            }`}
            onMouseEnter={() => setIsHovering(index)}
            onMouseLeave={() => setIsHovering(-1)}
            style={
              isHovering === index
                ? {
                    backgroundColor: '#191919',
                  }
                : { backgroundColor: 'var(--bs-dark)' }
            }
          >
            <p className="font-weight-bold font">
              <span className="mr-2">{index + 1}.</span>
              <i>{definition.partOfSpeech.toString()}: </i>
            </p>
            <p className="cap-first">{definition.definition.toString()}.</p>
          </div>
        </div>
      ))}
    </div>
  );
}
