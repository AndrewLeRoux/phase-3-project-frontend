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

    const education = activity.activity_type == "education"
    const recreational = activity.activity_type == "recreational"
    const social = activity.activity_type == "social"
    const diy = activity.activity_type == "diy"
    const charity = activity.activity_type == "charity"
    const cooking = activity.activity_type == "cooking"
    const relaxation = activity.activity_type == "relaxation"
    const music = activity.activity_type == "music"
    const busywork = activity.activity_type == "busywork"
    

    return(
        <div className="cardContainer">
            <div className="card">
                <p className = "activityName">{activity.name}</p>
                <p>Activity Type: {activity.activity_type}</p>
                <button className = "activityButton" onClick={handleClick}>add to favorites</button>
            </div>
            <div className = "cardImg">
                {education? <img src ="https://www.habitatbroward.org/wp-content/uploads/2020/01/10-Benefits-Showing-Why-Education-Is-Important-to-Our-Society.jpg" alt="education" width = "200px" height = "150px"></img> : null}
                {recreational? <img src ="https://www.hhmglobal.com/wp-content/uploads/news/29784/Exersize-696x393.jpg" alt="recreational" width = "200px" height = "150px"></img> : null}
                {social? <img src ="https://publir.com/blog/wp-content/uploads/2021/09/Social_media.jpg" alt="social" width = "200px" height = "150px"></img> : null}
                {diy? <img src ="https://www.moneycrashers.com/wp-content/uploads/2018/11/diy-do-it-yourself-wooden-block-letters.jpg" alt="diy" width = "200px" height = "150px"></img> : null}
                {charity? <img src ="https://www.usnews.com/dims4/USNEWS/9b62b7c/2147483647/crop/2000x1313%2B0%2B4/resize/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fa9%2Fe8%2F046d240745f590f48c4d6067a9f5%2F200923-stock.jpg" alt="charity" width = "200px" height = "150px"></img> : null}
                {cooking? <img src ="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg" alt="cooking" width = "200px" height = "150px"></img> : null}
                {relaxation? <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sonne_Meer_und_M%C3%B6we.jpg/400px-Sonne_Meer_und_M%C3%B6we.jpg" alt="relaxation" width = "200px" height = "150px"></img> : null}
                {music? <img src ="https://media.istockphoto.com/vectors/music-note-icon-vector-illustration-vector-id1175435360?k=20&m=1175435360&s=612x612&w=0&h=1yoTgUwobvdFlNxUQtB7_NnWOUD83XOMZHvxUzkOJJs=" alt="music" width = "200px" height = "150px"></img> : null}
                {busywork? <img src ="https://thumbs.dreamstime.com/b/multitasking-vector-illustration-flat-tiny-busy-work-list-persons-concept-job-management-overload-lifestyle-abstract-time-pressure-144407520.jpg" alt="busywork" width = "200px" height = "150px"></img> : null}

            </div>
            
        </div>
        
    )
}

export default Activity