import React from "react";

const NoResultsMessage = ({ searchedWord }) => {
  return (
    <div className="text-center mx-auto mt-4">
      <i className="alert alert-warning">
        <b className="text-dark" style={{ fontStyle: "normal" }}>
          Sorry, No results found for: "{searchedWord}"
        </b>
      </i>
    </div>
  );
};

export default NoResultsMessage;
