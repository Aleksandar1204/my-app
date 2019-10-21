import React from "react";
import { connect } from "react-redux";

class Alert extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.username}
        <br />
        {this.props.users.password}
        <br />
        {this.props.users.phonenumber}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer
  };
}

export default connect(mapStateToProps)(Alert);
