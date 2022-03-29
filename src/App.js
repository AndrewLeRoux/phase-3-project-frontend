import React, {useState, useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Activities from "./components/Activities";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Home from "./components/Home"


function App() {

  const [activities, setActivities] = useState([])
  const [users, setUsers] = useState([])
  const [favorites, setFavorites] = useState([])

  const [currentUser, setCurrentUser] = useState(null)
  
  useEffect(() =>{
    fetch("http://localhost:9292/activities")
    .then((r) => r.json())
    .then((activities) => setActivities(activities));

    fetch("http://localhost:9292/users")
    .then((r) => r.json())
    .then((users) => setUsers(users));

    fetch("http://localhost:9292/favorites")
    .then((r) => r.json())
    .then((favorites) => setFavorites(favorites));
  }, [])


  function handleAddUser(newUser){
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)

    setCurrentUser(newUser)
  }

  function handleLogin(userName){
    const current = users.find(user => user.name == userName)
    setCurrentUser(current)
  }

  function handleLogout(){
    setCurrentUser(null)
  }

  function handleAddFavorite(newFavorite){
    
    const updatedFavorites = [...favorites, newFavorite]
    setFavorites(updatedFavorites)
  }

  function handleDelete(deletedFavorite){
    const newFavorites = favorites.filter(favorite => !(favorite.activity_id == deletedFavorite.activity_id && favorite.user_id == deletedFavorite.user_id))
    setFavorites(newFavorites)
  }
  
  return (
    <div>
      { currentUser? <NavBar handleClick={handleLogout}/> : null}
      <Switch>
        <Route exact path="/profile">
        <Profile user = {currentUser}/>
        </Route>
        <Route exact path="/favorites">
        {currentUser? <Favorites user = {currentUser} favorites ={favorites} onDelete={handleDelete}/> : null}
        </Route>
        <Route exact path="/activities">
          <Activities activities = {activities} user = {currentUser} onAddFavorite={handleAddFavorite}/>
        </Route>
        <Route exact path="/">
        {currentUser? <Home user = {currentUser} activities = {activities}/> : <Login users = {users} onLogin = {handleLogin} onAddUser = {handleAddUser}/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
