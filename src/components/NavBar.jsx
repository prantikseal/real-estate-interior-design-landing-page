import "./NavBar.scss";
import { useState } from "react";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <div
        className={`navLinksContainerMobile ${showLinks ? "showLinks" : ""}`}
      >
        <button className="closeBtn" onClick={() => setShowLinks(!showLinks)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="#000"
            />
          </svg>
        </button>
        <ul className="navLinksMobile">
          <li className="navLinkMobile">
            <a href="/">Design Gallery</a>
          </li>
          <li className="navLinkMobile">
            <a href="/">Design Trends</a>
          </li>
          <li className="navLinkMobile">
            <a href="/">
              Design Guide{" "}
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Polygon 1"
                  d="M4.5 4.14307L0.602887 0.285923L8.39711 0.285923L4.5 4.14307Z"
                />
              </svg>
            </a>
          </li>
          <li className="navLinkMobile">
            <a href="/">
              Cities{" "}
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Polygon 1"
                  d="M4.5 4.14307L0.602887 0.285923L8.39711 0.285923L4.5 4.14307Z"
                />
              </svg>
            </a>
          </li>
          <li className="navLinkMobile">
            <a href="/">Partner With Us</a>
          </li>
          <li className="navLinkMobile">
            <a href="/">Academy</a>
          </li>
          <li className="navLinkMobileCta">
            <a href="/">Get Free Quote</a>
          </li>
        </ul>
      </div>
      <div className="navBar">
        <a href="/" className="logo">
          <img src="./INTERIOR KARO LOGO.png" alt="" />
        </a>
        <ul className="navLinks">
          <li className="navLink">
            <a href="/">Design Gallery</a>
          </li>
          <li className="navLink">
            <a href="/">Design Trends</a>
          </li>
          <li className="navLink">
            <a href="/">
              Design Guide{" "}
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Polygon 1"
                  d="M4.5 4.14307L0.602887 0.285923L8.39711 0.285923L4.5 4.14307Z"
                />
              </svg>
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li className="navLink">
            <a href="/">
              Cities{" "}
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Polygon 1"
                  d="M4.5 4.14307L0.602887 0.285923L8.39711 0.285923L4.5 4.14307Z"
                />
              </svg>
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li className="navLink">
            <a href="/">Partner With Us</a>
          </li>
          <li className="navLink">
            <a href="/">Academy</a>
          </li>
          <li className="navLinkCta">
            <a href="/">Get Free Quote</a>
          </li>
          <li className="navLinkProfile">
            <a href="/">
              <img src="./PROFILE.png" alt="" />
            </a>
          </li>
          <button
            className="hamburger"
            onClick={() => setShowLinks(!showLinks)}
          >
            <svg
              height="32px"
              id="Layer_1"
              style={{ enableBackground: "new 0 0 32 32" }}
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 
                s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 
                S29.104,22,28,22z"
              />
            </svg>
          </button>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
