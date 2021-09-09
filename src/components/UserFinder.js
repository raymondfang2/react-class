import {Fragment, Component} from 'react';

import Users from './Users';
import classes from './UserFinder.module.css'
import UsersContext from "../context/users-context";

// const DUMMY_USERS = [
//     { id: "u1", name: "Max" },
//     { id: "u2", name: "Manuel" },
//     { id: "u3", name: "Julie" },
// ];


class UserFinder extends Component {
    static contextType = UsersContext;

   state = {    searchTerm: '',
                filteredUsers: this.context.users
            };
   //It seems context is not ready in constructor==> change to above!!!
   //  constructor() {
   //      super();
   //      this.state = {
   //          searchTerm: '',
   //          filteredUsers: this.context.users
   //      };
   //  }

    searchChangeHandler = (event) => {
        this.setState({
            searchTerm: event.target.value,
            filteredUsers: this.context.users.filter((user) => user.name.includes(event.target.value))
        })
    }


    render() {
        return (
            <div className={classes.finder}>
                <input className={classes.finder} type='search' onChange={this.searchChangeHandler.bind(this)} />
                <Users users={this.state.filteredUsers} />
            </div>
        );
    }
}

export default UserFinder;