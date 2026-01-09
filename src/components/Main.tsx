import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileImg from '../assets/images/profile.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Shakefire" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/generallshakefire/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Kabir Muhammad Hassan</h1>
          <p>Software Engineer | Artificial Intelligence & Machine Learning Enthusiast</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Shakefire" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/generallshakefire/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
