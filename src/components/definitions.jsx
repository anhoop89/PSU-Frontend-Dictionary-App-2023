export default function Definitions({ data }) {
  return (
    <div>
      <h1 className="card-header text-capitalize p-3">{data.word}</h1>
      {data.definitions.map((definition, index) => (
        <div
          key={index}
          className="rounded my-1"
          style={{ backgroundColor: 'var(--bs-dark)' }}
        >
          <div className="card-body p-3">
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
