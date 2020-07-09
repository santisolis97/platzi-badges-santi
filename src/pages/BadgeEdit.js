import React from "react";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeEdit.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm.js";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeEdit extends React.Component {
  approved = 100;
  state = {
    loading: true,
    bar: false,
    error: null,
    badgeId:"",
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      
    },
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data});
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = (e) => {
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
      
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false, bar: true,  });
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
        <div className="BadgeEdit_hero">
          <img
            src={header}
            alt="Logo"
            className="img-fluid BadgeEdit_hero-img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              {/* <h1>{this.state.form.badgeId}</h1> */}
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                twitter={this.state.form.twitter || "Twitter"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                email={this.state.form.email || "Email"}
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>

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

export default BadgeEdit;
