import React, {useState} from "react";
import NewUserForm from "./NewUserForm";

function Login({users, onAddUser, onLogin}){

   const [name, setName] = useState('')


    let usersList = users.map((user) =>{
        return <option key = {user.id} value = {user.name}>{user.name}</option>
    })

    function handleLogin(e){
        e.preventDefault();
        onLogin(name)
    }
return(
<div className = "login">
    <h1 id = "loginTitle">Activity Planner</h1>
    <img src ="https://www.hhmglobal.com/wp-content/uploads/news/29784/Exersize-696x393.jpg" alt="running" width="464" height="262"></img>
    <h2>Login</h2>
    <form onSubmit = {handleLogin}>
        <select onChange = {e => setName(e.target.value)}>
        <option value = "" hidden>Select a User...</option>
            {usersList}
        </select>
        <br/>
        <button className="loginButton" type="submit">Login</button>
    </form>
    <NewUserForm onAddUser = {onAddUser} users={users}/>
</div>
)
}

export default Login