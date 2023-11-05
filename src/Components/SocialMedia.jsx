import React from "react";

import LinkedIn from "./../Images/SocialMedia/linkedin.png";
import github from "./../Images/SocialMedia/github.png";
import instagram from "./../Images/SocialMedia/instagram.png";
import twitter from "./../Images/SocialMedia/twitter.png";

const StringAlt =
  "Red Social de Jaime Bosch | Desarrollo | Automatizaciones | Innovación | Soluciones Tecnológicas";
const SocialMedia = () => {
  return (
    <div className="social-content">
      <p>Mis redes sociales</p>
      <div className="social-content_media">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jaime-bosch-0810461a0/"
        >
          <img
            src={LinkedIn}
            title={"LinkedIn " + StringAlt}
            alt={"LinkedIn " + StringAlt}
          />
        </a>
        <a target="_blank" href="https://www.instagram.com/jaimeboschdev/">
          <img
            src={instagram}
            title={"Instagram " + StringAlt}
            alt={"Instagram " + StringAlt}
          />
        </a>
        <a target="_blank" href="https://github.com/JaimeBoschDev">
          <img
            src={github}
            title={"Github " + StringAlt}
            alt={"Github " + StringAlt}
          />
        </a>
        <a target="_blank" href="https://twitter.com/Bombosch_7">
          <img src={twitter} title={"X " + StringAlt} alt={"X " + StringAlt} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
