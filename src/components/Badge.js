import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
import Gravatar from "react-gravatar"

class Badges extends React.Component {
componentDidMount(){
  // console.log(this.props.badgeId);
}

  render() {
    return (
      <div className="badge container-fluid">
        <div className="badge_header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="badge_section-name">
          <Gravatar size={800} default='monsterid' email={this.props.email} className="badge_avatar" />
          <h1 className='fullname'>
            {this.props.firstName} <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="badge_section-info ">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.email}</div>
          <br /> 
          <div>@{this.props.twitter}</div>
        </div>
        <div className="badge_footer">#platziconf</div>
      </div>
    );
  }
}

export default Badges;
