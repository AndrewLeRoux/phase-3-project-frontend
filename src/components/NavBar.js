import React from "react";
import { NavLink } from "react-router-dom";
const linkStyles = {
    display: "inline-block",
    width: "130px",
    padding: "12px",
    margin: "0px 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
};



function NavBar({handleClick}) {

    return (
      <div>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "green"
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          exact
          style={linkStyles}
          activeStyle={{
            background: "green"
          }}
        >
          Profile
        </NavLink>
        <NavLink
          to="/activities"
          exact
          style={linkStyles}
          activeStyle={{
            background: "green",
          }}
        >
          Activities
        </NavLink>
        <NavLink
          to="/favorites"
          exact
          style={linkStyles}
          activeStyle={{
            background: "green",
          }}
        >
          Favorites
        </NavLink>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          onClick={handleClick}
        >
          Logout
        </NavLink>
      </div>
    );
}
export default NavBar