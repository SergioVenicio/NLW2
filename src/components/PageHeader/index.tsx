import React from "react";

import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

import "./style.css";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
  title,
  children,
}) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <Link to="/">
          <img src={logoImg} alt="Proffy" />
        </Link>
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
