import Translate from '../api/translate';
export default function TranslatePage() {
  return (
    <div className="bg-light rounded mx-auto p-3 mt-5 w-50">
      <h1 className="">This is the translation page!</h1>
      <br></br>
      <div>
        <Translate/>
      </div>
    </div>
  );
}
