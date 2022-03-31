import React from "react";

function Activity({activity, user, onAddFavorite, favorites}){


    function handleClick(){
        if (favorites.find(favorite => favorite.activity_id == activity.id && favorite.user_id == user.id)) {
            alert("already in favorites")
         }
        else {
            fetch("http://localhost:9292/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                activity_id: activity.id,
                user_id: user.id
            }),
        })
        .then((r) => r.json())
        .then((newFavorite) => onAddFavorite(newFavorite));
        }
        
    }

    return(
        <div className="card">
            <p>{activity.name}</p>
            <p>{activity.activity_type}</p>
            <button onClick={handleClick}>add to favorites</button>
        </div>
        
    )
}

export default Activity