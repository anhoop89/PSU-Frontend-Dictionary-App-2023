//https://getbootstrap.com/docs/4.0/utilities/text/
// validate email: https://www.w3resource.com/javascript/form/email-validation.php
import { useState } from "react";
import "../CSS/contactform.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setSuggestion("");
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || suggestion.trim() === "") {
      alert("Please fill in the form before sending message!");
      return;
    }

    const emailfilter =/^\w+[+.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
    const checkEmailForm = emailfilter.test(email);
    if (!checkEmailForm) {
      alert("Please enter a valid email");
      return;
    }
    
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Suggestion:", suggestion);
    handleResetForm();
  };

  return (
    <div
      className="bg-light rounded mx-auto p-3 mt-5 w-50"
      style={{ maxWidth: "600px" }}
    >
      <form className="formCustom mx-auto shadow rounded px-3 pt-3 pb-3 mb-3">
        <h1
          className="mb-4 text-center text-sm-start"
          style={{ fontWeight: "bold" }}
        >
          Contact Form
        </h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label font-weight-bold">
            Name:
          </label>
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
          <label htmlFor="email" className="form-label font-weight-bold">
            Email:
          </label>
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
          <label htmlFor="message" className="form-label font-weight-bold">
            Message:
          </label>
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
            className="btn btn-primary btn-lg p-2 me-2 w-50 mr-1"
            onClick={handleSubmitForm}
            style={{ fontWeight: "bold" }}
          >
            Send
          </button>

          <button
            className="btn bg-secondary btn-lg p-2 text-white w-50"
            onClick={handleResetForm}
            style={{ fontWeight: "bold" }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
