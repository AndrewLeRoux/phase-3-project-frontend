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
<div>
    <h1>Activity Planner</h1>
    <h2>Login</h2>
    <form onSubmit = {handleLogin}>
        <select onChange = {e => setName(e.target.value)}>
            {usersList}
        </select>
        <br/>
        <button type="submit">Login</button>
    </form>
    <NewUserForm onAddUser = {onAddUser}/>
</div>
)
}

export default Login