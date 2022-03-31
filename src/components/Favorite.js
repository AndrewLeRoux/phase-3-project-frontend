import React from "react";

function Favorite({favorite, onDelete}){

    function handleClick(){
        fetch(`http://localhost:9292/favorites/${favorite.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedFavorite) => onDelete(deletedFavorite));
    }

    return(
        <div className="card">
            <p>{favorite.activity.name}</p>
            <p>{favorite.activity.activity_type}</p>
            <button onClick={handleClick}>remove from favorites</button>
        </div>
        
    )
}

export default Favorite