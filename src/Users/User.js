import React from 'react'

const User = props => {
    return(
        <p>{props.UserName} played {props.showGamesPlayed ? props.GamesPlayed : 0} games</p>
    )
}

export default User