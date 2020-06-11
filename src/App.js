import React from "react";
import "./App.css";
import Employee from "./components/employee/employee";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="header__nav">
          <img
            className="header__nav__logo"
            src="https://saarthi.ai/assets/img/brand/apple-icon-152x152.png"
            alt="Logo"
          />
          <h5 className="header_nav_brand">Saarthi Assignment</h5>
        </nav>
      </header>
      <section className="content">
        <Employee />
      </section>
      <footer>
        <div>
          Assignment: attempted by{" "}
          <a
            href="https://www.linkedin.com/in/vigneshrsharma/"
            title="LinkedIn"
          >
            @Vignesh.R
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
