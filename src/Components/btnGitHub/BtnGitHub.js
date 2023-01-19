import React from "react";
import gitHubIcon from "./gitHub-black.svg";

export default function BtnGitHub({ link }) {
  return (
    <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
      <img src={gitHubIcon} alt="gitHubIcon" />
      GitHub Pages
    </a>
  );
}
