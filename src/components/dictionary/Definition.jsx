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
          <h3 className="mt-2 pl-3">
            <i>{def.partOfSpeech}</i>
          </h3>
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
  );
}
