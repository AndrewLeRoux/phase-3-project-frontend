import React from "react";
import Activity from "./Activity";

function Activites({activities, user, onAddFavorite}){


    return(
        <div>
            {activities.map((activity) =>{ return <Activity user = {user} key = {activity.name} activity = {activity} onAddFavorite={onAddFavorite}/>})}
        </div>
    )
}

export default Activites