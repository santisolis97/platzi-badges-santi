import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
class BadgeForm extends React.Component {
  state = {};
  //   handleChange = (e) => {
  //     // console.log({
  //     //   name: e.target.name,
  //     //   value: e.target.value,
  //     // });

  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  handleClick = (e) => {
    // document.getElementById("formulario").reset()
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("form was submited");
  //   console.log(this.state)
  // };

  render() {
    return (
      <div>

        <form id="formulario" onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              className="form-control"
              value={this.props.formValue.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              className="form-control"
              value={this.props.formValue.lastName}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="jobTitle"
              className="form-control"
              value={this.props.formValue.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              name="email"
              className="form-control"
              value={this.props.formValue.email}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="twitter"
              className="form-control"
              value={this.props.formValue.twitter}
            />
          </div>
          <br />

          {this.props.bar ? (
            <ProgressBar label="Success!" variant="success" now={100} />
          ) : (
            <ProgressBar variant="success" now={0} />
          )}
          <br />

          <div className="row">
            <div className="col">
              <button
                type="submit"
                onClick={this.handleClick}
                className="btn btn-primary"
              >
                Save!
              </button>
            </div>
            <div className="col">
              <Button
                onClick={this.handleClearClick}
                variant="outline-secondary"
              >
                Clear
              </Button>
            </div>
          </div>
          {this.props.error && (
            <p className="text-danger py-10 bold">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}
export default BadgeForm;
