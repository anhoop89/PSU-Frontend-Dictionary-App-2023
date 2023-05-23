import React from "react";

const NavTabs = ({ activeTab, setActiveTab }) => (
  <ul
    className="nav nav-tabs border-secondary"
    style={{ backgroundColor: "var(--secondary)" }}
  >
    <li
      className="nav-item"
      aria-current="page"
      style={{ backgroundColor: "var(--bs-dark)" }}
    >
      <button
        style={{
          backgroundColor: "var(--bs-dark)",
          borderBottom: activeTab === "Synonyms" ? "none" : undefined,
        }}
        className={`nav-link border-secondary text-light ${
          activeTab === "Synonyms" ? "active" : "false"
        }`}
        onClick={() => setActiveTab("Synonyms")}
      >
        Synonyms
      </button>
    </li>
    <li
      className="nav-item"
      aria-current="page"
      style={{ backgroundColor: "var(--bs-dark)" }}
    >
      <button
        style={{
          backgroundColor: "var(--bs-dark)",
          borderBottom: activeTab === "Antonyms" ? "none" : undefined,
        }}
        className={`nav-link border-secondary text-light ${
          activeTab === "Antonyms" ? "active" : "false"
        }`}
        onClick={() => setActiveTab("Antonyms")}
      >
        Antonyms
      </button>
    </li>
  </ul>
);

export default NavTabs;
