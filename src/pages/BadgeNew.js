import React from "react";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm.js";
import api from "../api";
import PageLoading from "../components/PageLoading";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";

class BadgeNew extends React.Component {
  approved = 100;
  state = {
    loading: false,
    bar: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };
  handleChange = (e) => {
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false, bar: true });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <div className="container-new">
        <div className="BadgeNew_hero">
          <img
            src={header}
            alt="Logo"
            className="img-fluid BadgeNew_hero-img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                twitter={this.state.form.twitter || "Twitter"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                email={this.state.form.email || "Email"}
              />
            </div>
            <div className="col-md-6 col-12">
              <h1>New Attendant</h1>
              <div className="asdf">
                <Link to="/badges" className="btn btn-primary">
                  See badges
                </Link>
              </div>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValue={this.state.form}
                bar={this.state.bar}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
