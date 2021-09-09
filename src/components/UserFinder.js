import {Fragment, Component} from 'react';

import Users from './Users';
import classes from './UserFinder.module.css'

const DUMMY_USERS = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manuel" },
    { id: "u3", name: "Julie" },
];


class UserFinder extends Component {

    constructor() {
        super();
        this.state = {
            searchTerm: '',
            filteredUsers: DUMMY_USERS
        };
    }

    searchChangeHandler = (event) => {
        this.setState({
            searchTerm: event.target.value,
            filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(event.target.value))
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