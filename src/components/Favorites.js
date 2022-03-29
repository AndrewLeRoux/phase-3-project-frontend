import React from "react";
import Favorite from "./Favorite"

function Favorites({user, favorites, onDelete}){

    const favoritesList = favorites.filter((favorite) => favorite.user_id == user.id)

    return(
        <div>
            {favoritesList.map(favorite => {return <Favorite key = {favorite.id} favorite = {favorite} onDelete={onDelete}></Favorite>})}
        </div>
        
    )

}

export default Favorites