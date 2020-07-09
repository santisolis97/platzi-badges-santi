import React from "react";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgePage.css";
import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeToEdits from "../components/BadgeToEdit";

class badgePage extends React.Component {
  state = {
    loading: true,
    bar: false,
    error: null,
    badgeId: "",
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
      this.setState({ loading: false, form: data, badgeId:this.props.match.params.badgeId });
      console.log(this.state.form);
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
    if (this.state.error){
      return <PageError error={this.state.error}/>
    }

    return (
      <div  className="container-new">
        <div className="badgePage_hero">
          <img
            src={header}
            alt="Logo"
            className="img-fluid badgePage_hero-img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <BadgeToEdits
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                twitter={this.state.form.twitter || "Twitter"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                email={this.state.form.email || "Email"}
                badgeId={this.state.badgeId}
              />
            <h1>{this.state.form.badgeId}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default badgePage;
