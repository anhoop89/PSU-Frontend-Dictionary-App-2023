import React from "react";

const NavTabs = ({ activeTab, setActiveTab }) => (
  <ul
    role="tablist"
    className="nav nav-tabs border-secondary"
    style={{ backgroundColor: "var(--secondary)" }}
    aria-label="Navigation tabs"
  >
    <li className="nav-item" style={{ backgroundColor: "var(--bs-dark)" }}>
      <button
        role="tab"
        aria-selected={activeTab === "Synonyms"}
        tabIndex={activeTab === "Synonyms" ? 0 : -1}
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
    <li className="nav-item" style={{ backgroundColor: "var(--bs-dark)" }}>
      <button
        role="tab"
        aria-selected={activeTab === "Antonyms"}
        tabIndex={activeTab === "Antonyms" ? 0 : -1}
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
    <li className="nav-item" style={{ backgroundColor: "var(--bs-dark)" }}>
      <button
        role="tab"
        aria-selected={activeTab === "Rating"}
        tabIndex={activeTab === "Rating" ? 0 : -1}
        style={{
          backgroundColor: "var(--bs-dark)",
          borderBottom: activeTab === "Rating" ? "none" : undefined,
        }}
        className={`nav-link border-secondary text-light ${
          activeTab === "Rating" ? "active" : "false"
        }`}
        onClick={() => setActiveTab("Rating")}
      >
        Synonym Diversity Rating
      </button>
    </li>
  </ul>
);

export default NavTabs;
