import React from "react";
import { Link } from "react-router-dom";

function NavBar({ setLogin, login }) {
  return (
    <div className='nav-bar'>
      <Link to='/'>
        <h3>Home</h3>
      </Link>
      <Link to='/users'>
        <h3>List Users</h3>
      </Link>

      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default NavBar;
