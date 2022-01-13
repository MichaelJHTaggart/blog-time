import React from 'react';
import { useLogout } from './hooks/useLogout';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { logout } = useLogout();



  return (
    <>
      <ul>
        <li><Link to="/home/">View Blogs</Link></li>
        <li><Link to="/home/postlist">View Your Posts</Link></li>
        <li><Link to="thinkpad">Create a Post</Link></li>
      </ul>

      <Link onClick={logout} to="/">Logout</Link>
    </>
  )
}
export default NavBar;