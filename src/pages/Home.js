import React from "react";
import Header from "../Components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                HTML, CSS, SCSS/SASS, JavaScript, TypeScript(basics), ReactJS, NPM,
                BootStrap, jQurey, Gulp, GitHub, Linux 
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS (basics)</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
