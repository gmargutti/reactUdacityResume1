import React from 'react'
import User from './User'

const UsersList = props => {
    return (
        <div className="usersList">
            {props.usersList.map(user => (
                <User UserName={user.UserName} GamesPlayed={user.GamesPlayed} key={user.UserName} showGamesPlayed={props.showGamesPlayed} />
            ))}
        </div>
    )
}

export default UsersList