import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddUser extends Component {
    state = {
        FirstName: '',
        LastName: '',
        UserName: '',
        GamesPlayed: 0,
        Error: ''
    }
    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    isDisabled = () => {
        return !(this.state.FirstName && this.state.LastName && this.state.UserName)
    }
    alreadyExists = () => {
        return this.props.usersList.filter(user => user.UserName === this.state.UserName).length > 0
    }
    onSubmit = event => {
        if(!this.alreadyExists()) {
            event.preventDefault()
            this.state.GamesPlayed = Math.floor((Math.random() * 100) + 1)
            this.props.addNewUser(this.state)
            this.setState({
                FirstName: '',
                LastName: '',
                UserName: '',
                GamesPlayed: 0,
                Error: ''
            })
        }
        else {
            event.preventDefault()
            this.setState({Error: 'User is already registered!'})
        }
    }
    render() {
        return(
            <form id="AddUser" onSubmit={this.onSubmit}>
                <input type="text" value={this.state.FirstName} placeholder="First Name" name="FirstName" onChange={this.onChange} />
                <input type="text" value={this.state.LastName} placeholder="Last Name" name="LastName" onChange={this.onChange} />
                <input type="text" value={this.state.UserName} placeholder="User Name" name="UserName" onChange={this.onChange} />
                <button type="submit" disabled={this.isDisabled()}>Add User</button>
                <div id="error" style={{display: 'block', color: 'red', fontWeight: 'bold'}}>
                    <p name="Error">{this.state.Error}</p>
                </div>
            </form>
        )
    }
}

AddUser.propTypes = {
    addNewUser: PropTypes.func,
    usersList: PropTypes.array
}

export default AddUser