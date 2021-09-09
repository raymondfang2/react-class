import React, { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";


class Users extends Component {

  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }

  toggleUsersHandle = () => {
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  };

  usersList =() => { return (
        <ul>
          {this.props.users.map((user) => (
              <User key={user.id} name={user.name}/>
          ))}
        </ul>);
  };


  render() {
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandle}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && this.usersList()}
      </div>
    );
  }
}

export default Users;
