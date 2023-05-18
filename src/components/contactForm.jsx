//https://getbootstrap.com/docs/4.0/utilities/text/
import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setSuggestion('');
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Suggestion:', suggestion);
    handleResetForm();
  };

  return (
    <div className="bg-light rounded mx-auto p-3 mt-5 w-50">
      <form className="formCustom mx-auto shadow rounded px-3 pt-3 pb-3 mb-3">
        <h1 className="contactFont mb-4" style={{ fontWeight: 'bold' }}>
          {' '}
          Contact / Feedback form
        </h1>
        <div className="mb-3">
          <label className="form-label font-weight-bold">Name:</label>
          <input
            className="form-control shadow-sm"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(addName) => setName(addName.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label font-weight-bold">Email:</label>
          <div className="input-group">
            <input
              className="form-control shadow-sm"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(addEmail) => setEmail(addEmail.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label font-weight-bold">Message:</label>
          <textarea
            className="form-control shadow-sm"
            id="message"
            rows={6}
            placeholder="Enter your message"
            value={suggestion}
            onChange={(addSuggestion) =>
              setSuggestion(addSuggestion.target.value)
            }
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary btn-lg me-1 w-50"
            onClick={handleSubmitForm}
          >
            Send
          </button>

          <button
            className="btn bg-secondary btn-lg ms-2 text-white w-50"
            onClick={handleResetForm}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
