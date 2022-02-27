import React from "react";
import "../../styles/footer.css";
import Email from "../../img/icon-email.svg";
import Github from "../../img/icon-github.svg";
import Linkedin from "../../img/icon-linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="f-items">
        <span>
          <div className="c-info-item">
            <a
              href="mailto:info@leticia.tnardi@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Email} alt="" className="c-icon"></img>
            </a>
          </div>
        </span>

        <span>
          <div className="c-info-item">
            <a href="github.com/leticianardi" target="_blank" rel="noreferrer">
              <img src={Github} alt="" className="c-icon"></img>
            </a>
          </div>
        </span>
        <span>
          <div className="c-info-item">
            <a
              href="https://www.linkedin.com/in/leticianardi/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="" className="c-icon"></img>
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
