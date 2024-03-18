import React from 'react';
import cv from './../img/icons/cv.png';
import foto from './../img/foto.jpg';

export default function Contacts() {
  return (
    <div>
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>
          <div className="foto__img">
            <img src={foto} alt="foto" />
          </div>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Minsk, Belarus</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+375444818077">+375 (44) 481-80-77</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p className="content-list-item">
                <a href="mailto:ginnymalko@gmail.com">ginnymalko@gmail.com</a>
              </p>
            </li>
            <a
              className="cv"
              href="https://transparent-aspen-664.notion.site/IT-CV-Evgeny-Malko-426f01d8e06a40df822cf1acecf0e69e"
              target="blank">
              <img src={cv} alt="CV" />
            </a>
          </ul>
        </div>
      </main>
    </div>
  );
}
