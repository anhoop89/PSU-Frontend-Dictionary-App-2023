import WordsAPI from '../api/WordsAPI';

export default function DefinePage() {
  return (
    <>
      <WordsAPI />
      <div>
        <p
          className="text-light mx-auto mt-5"
          style={{ maxWidth: '768px', backgroundColor: 'var(--bs-darker)' }}
        >
          For now Im just throwing each different thing on it's own page. This
          is the 'define' page. Later, if/when we decide to organize things
          differently, we can just throw a bunch of different components like
          word definition, thesaurus, etc in the Home page and delete the Navbar
          links to the pages that are no longer needed.
        </p>
      </div>
    </>
  );
}
