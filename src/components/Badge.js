import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badges extends React.Component {
  render() {
    return (
      <div className="badge container-fluid">
        <div className="badge_header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="badge_section-name">
          <img
            className="badge_avatar"
            src={this.props.avatarURL}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="badge_section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.twitter}</div>
        </div>
        <div className="badge_footer">#platziconf</div>
      </div>
    );
  }
}

export default Badges;
