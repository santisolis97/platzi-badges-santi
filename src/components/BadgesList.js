import React from "react";

import "./styles/BadgesList.css";
import { Link } from "react-router-dom";

import Gravatar from "react-gravatar";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.reverse().map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <Link to={`/badges/${badge.id}/edit`}>
                <Gravatar
                  email={badge.email}
                  className="BadgesListItem__avatar"
                />
              </Link>
              <div>
                <Link className='text-reset text-decoration-none' to={`/badges/${badge.id}/edit`}>
                  <div className="name">
                    <strong>
                      {badge.firstName} {badge.lastName}
                    </strong>
                  </div>
                </Link>
                <div className="Twitter__name">
                  <span className="Twitter__logo"></span>@
                  <a href={`https://twitter.com/${badge.twitter}`}>
                    {" "}
                    {badge.twitter}{" "}
                  </a>
                </div>
                <div>{badge.jobTitle}</div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
