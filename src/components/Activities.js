import React, {useState} from "react";
import Activity from "./Activity";

function Activites({activities, user, onAddFavorite, favorites}){

    const [type, setType] = useState(null)

    const filteredList = activities.filter(activity => activity.activity_type == type)
    const activityList = activities.map((activity) =>{ return <Activity user = {user} key = {activity.name} activity = {activity} favorites ={favorites} onAddFavorite={onAddFavorite}/>})
    const filteredActivityList = filteredList.map((activity) =>{ return <Activity user = {user} key = {activity.name} activity = {activity} favorites ={favorites} onAddFavorite={onAddFavorite}/>})

    function handleClick(e){
        const value = e.target.value
        setType(value)
    }

    function handleAllClick(){
        setType(null)
    }

    return(
        <div>
            Filter by Activity:
            <br></br>
            <button onClick={handleAllClick} value ='all'>all</button>
            <button onClick={handleClick} value ='education'>education</button>
            <button onClick={handleClick} value ='recreational'>recreational</button>
            <button onClick={handleClick} value ='social'>social</button>
            <button onClick={handleClick} value ='diy'>diy</button>
            <button onClick={handleClick} value ='charity'>charity</button>
            <button onClick={handleClick} value ='cooking'>cooking</button>
            <button onClick={handleClick} value ='relaxation'>relaxation</button>
            <button onClick={handleClick} value ='music'>music</button>
            <button onClick={handleClick} value ='busywork'>busywork</button>
            {type? filteredActivityList : activityList}
        </div>
    )
}

export default Activites