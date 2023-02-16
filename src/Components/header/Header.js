import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Evgeny</em>
            </strong><br
            />a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating</p>
          </div>
          <a href="https://transparent-aspen-664.notion.site/Malko-Yevgeniy-CV-426f01d8e06a40df822cf1acecf0e69e" className="btn" target="blank">
            Open CV
          </a>
        </div>
      </header>
    </div>
  );
}
