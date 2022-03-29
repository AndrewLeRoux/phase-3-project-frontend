import React from "react";

function Profile({user}){

    return(
        <div>
            <p>{user.name}</p>
            <p>{user.preferences}</p>
        </div>
        
    )
}

export default Profile