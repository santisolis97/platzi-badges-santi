import React from "react";
import Modals from "./Modals"
import confLogo from "../images/badge-header.svg";
import "./styles/BadgeToEdit.css";
import Gravatar from "react-gravatar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import api from "../api";

class BadgeToEdits extends React.Component {
  openModals() {
    
  }
  fetchData = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.remove(this.props.badgeId);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    // const badge = this.state.data;

    return (
      <div className="BadgeToEdit container-fluid">
        <div className="BadgeToEdit_header">
          <img
            className="logoconf"
            src={confLogo}
            alt="Logo de la conferencia"
          />
          <Link to={`/badges/${this.props.badgeId}/edit`}>
            <img
              className="lapiz"
              alt="lapiz"
              src="https://img.icons8.com/fluent/48/000000/edit.png"
            />
          </Link>
          <Button variant="Link" className="lapiz" onClick={this.openModals}>
            <img
              className="lapiz"
              alt="basura"
              src="https://img.icons8.com/color/48/000000/delete.png"
            />
          </Button> 
           <Modals>Lorem</Modals>
          
        </div>
        <div className="BadgeToEdit_section-name">
          <Gravatar
            size={800}
            default="monsterid"
            email={this.props.email}
            className="BadgeToEdit_avatar"
          />
          <h1 className="fullname">
            {this.props.firstName} <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="BadgeToEdit_section-info ">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.email}</div>
          <br />
          <div>@{this.props.twitter}</div>
        </div>
        <div className="BadgeToEdit_footer">#platziconf</div>
      </div>
    );
  }
}

export default BadgeToEdits;
