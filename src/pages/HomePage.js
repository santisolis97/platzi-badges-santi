import React from "react";
import { Link } from "react-router-dom";
import PlatziConfLogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";
import "./styles/HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid total">
        <div className="row fila align-items-center">
          <div className="col-5 text-center ">
            <img className="platziconflogo" src={PlatziConfLogo} alt="" />
            <br />
            <br />
            <h1 className="texto">PRINT YOUR BADGES</h1>
            <h5 className="texto">The easiest way to manage your conference</h5>
            <Link className="btn btn-primary" to="/badges/new">
              Start now
            </Link>
          </div>
          <div className="col-7 text-center">
            <div className="float-right">
              <img className="astronauts" src={astronauts} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
