import React from "react";
import axios from "axios";
import {
  writeUsersToStore,
  addUserToStore
} from "./redux/actions/writeUsersToStore";
import { connect } from "react-redux";
import "../assets/style.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: null,
      data: null
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        //zapisi vo redux
        this.props.writeUsersToStore(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  saveUser = id => {
    const newUser = {
      id: id,
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value
    };
    this.props.addUserToStore(newUser);
  };

  addUser = () => {
    this.setState({
      showModal: (
        <div className="my-modal">
          <div className="form-container">
            <div className="text-container">ADD NEW USER</div>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="name"
            />
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="username"
            />
            <input
              id="email"
              type="text"
              className="form-control"
              placeholder="email"
            />
            <input
              id="address"
              type="text"
              className="form-control"
              placeholder="address"
            />
            <button
              id="save"
              onClick={() => this.saveUser()}
              className="btn btn-success"
            >
              SAVE
            </button>
            <button
              id="close"
              onClick={() => this.setState({ showModal: null })}
              className="btn btn-secondary"
            >
              close
            </button>
          </div>
        </div>
      )
    });
  };

  editUser = user => {
    this.setState({
      showModal: (
        <div className="my-modal">
          <div className="form-container">
            <div className="text-container">EDIT USER</div>
            <input
              id="name"
              type="text"
              className="form-control"
              defaultValue={user.name}
            />
            <input
              id="username"
              type="text"
              className="form-control"
              defaultValue={user.username}
            />
            <input
              id="email"
              type="text"
              className="form-control"
              defaultValue={user.email}
            />
            <input
              id="address"
              type="text"
              className="form-control"
              defaultValue={user.address.street + " " + user.address.suite}
            />
            <button
              id="save"
              onClick={() => this.saveUser(user.id)}
              className="btn btn-success"
            >
              SAVE
            </button>
            <button
              id="close"
              onClick={() => this.setState({ showModal: null })}
              className="btn btn-secondary"
            >
              close
            </button>
          </div>
        </div>
      )
    });
  };

  render() {
    let header = null;
    let usersList = null;
    if (this.props.users) {
      /* header = this.props.users.map((user)=>{
            return <td></td>
        })*/

      usersList = this.props.users.map(user => {
        return (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{`${user.address.street} ${user.address.suite}`}</td>
            <td>
              <button
                className="btn btn-secondary"
                id="edit"
                onClick={() => this.editUser(user)}
              >
                Edit
              </button>
            </td>
          </tr>
        );
      });
    }
    return (
      <React.Fragment>
        <table className="table">
          {this.state.showModal}
          <thead>
            <tr>
              <th>
                <button
                  className="btn btn-success"
                  id="add"
                  onClick={this.addUser}
                >
                  Add user
                </button>
              </th>
            </tr>
          </thead>
          <tbody>{usersList}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.usersTableReducer.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    writeUsersToStore: data => dispatch(writeUsersToStore(data)),
    addUserToStore: data => dispatch(addUserToStore(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
