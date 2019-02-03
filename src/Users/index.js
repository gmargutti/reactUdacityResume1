import React, { Component } from 'react'
import AddUser from './AddUser'
import UsersList from './UsersList'

class Users extends Component {
    state = {
        Users: [],
        showGamesPlayed: true
    }
    addNewUser = (value) => {
        this.setState(prevState => ({
            Users: [...prevState.Users, value]
        }))
    }
    btnGamesPlayed_OnClick = event => {
        this.setState(prevState => ({
            showGamesPlayed: !prevState.showGamesPlayed
        }))
    }
    render() {
        return(
            <div>
                <AddUser addNewUser={this.addNewUser} usersList={this.state.Users} />
                <h2>Users</h2>
                <button id="btnGamesPlayed" onClick={this.btnGamesPlayed_OnClick}>{this.state.showGamesPlayed ? "Hide" : "Show"} The Number of Games Played</button>
                <UsersList usersList={this.state.Users} showGamesPlayed={this.state.showGamesPlayed} />
           </div>
        )
    }
}

export default Users