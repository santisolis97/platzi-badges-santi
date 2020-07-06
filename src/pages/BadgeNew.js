import React from "react";
import Navbar from "../components/Navbar";
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew_hero">
          <img src={header} alt="Logo" className="img-fluid"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge firstName="Richard" lastName="Kaufman" twitter="@sparragus" jobTitle="Frontend Engineer" avatarURL="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?d =identicon"/>  
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default BadgeNew;
