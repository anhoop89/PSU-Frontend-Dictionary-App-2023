import { useState } from 'react';

export default function Definition({ def, index }) {
  const [hovering, setHovering] = useState(-1);
  return (
    <div key={index} className="rounded">
      {def.isTitle && (
        <div
          className="d-flex rounded "
          style={{ backgroundColor: 'var(--bs-dark)' }}
        >
          <h2
            className="mt-2 pl-3"
            style={{ fontWeight: 'normal', fontSize: '1.2rem' }}
          >
            <i>{def.partOfSpeech}</i>
          </h2>
        </div>
      )}
      <div
        onMouseEnter={() => setHovering(index)}
        onMouseLeave={() => setHovering(-1)}
        className="card-body p-3 rounded"
        style={
          hovering === index
            ? { backgroundColor: 'var(--bs-dark)' }
            : { backgroundColor: 'var(--bs-darker)' }
        }
      >
        <div className="d-flex font">
          <div
            className="mr-3"
            style={{
              fontSize: '1.2rem',
              minWidth: '30px',
              fontWeight: 'bold',
            }}
          >
            {index + 1}.
          </div>
          <div className="cap-first" style={{ fontSize: '1.2rem' }}>
            {def.definition.toString()}.
          </div>
        </div>
      </div>
    </div>
  );
}
