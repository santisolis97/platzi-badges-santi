import React from "react";

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
    console.log("Button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form was submited");
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          
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

          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save!
          </button>
        </form>
      </div>
    );
  }
}
export default BadgeForm;
