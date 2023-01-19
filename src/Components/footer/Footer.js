import React from "react";
import twitter from "./../../img/icons/twitter.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import telegram from "./../../img/icons/telegram.svg";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
            <li className="social__item">
                <a href="https://github.com/CaptainGinny">
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.linkedin.com/in/yauheni-malko-54a031257">
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://twitter.com/Captain__Ginny">
                  <img src={twitter} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://t.me/CaptainGinny">
                  <img src={telegram} alt="Telegram" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023 Frontend against war</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
