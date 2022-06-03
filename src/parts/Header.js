import React from "react";
import Button from "../components/Button/Button";
import LogoTxt from "./LogoTxt";

const Header = props => {
  const isLinkActive = path => {
    return props.location.pathname === path ? "active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <LogoTxt />
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item${isLinkActive("/")}`}>
              <Button className="nav-link" type="link" href="/">
                Home
              </Button>
            </li>
            <li className={`nav-item${isLinkActive("/browse-by")}`}>
              <Button className="nav-link" type="link" href="/browse-by">
                Browse by
              </Button>
            </li>
            <li className={`nav-item${isLinkActive("/stories")}`}>
              <Button className="nav-link" type="link" href="/stories">
                Stories
              </Button>
            </li>
            <li className={`nav-item${isLinkActive("/agents")}`}>
              <Button className="nav-link" type="link" href="/agents">
                Agents
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
