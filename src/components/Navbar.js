import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom'
import { getLoggedInUserId } from '../lib/auth';

const Navbar = () => {

  // const [isUser, setIsUser] = React.useState()
  console.log('is this true?', getLoggedInUserId());
  const navigate = useNavigate();


  const logout = () => {
    sessionStorage.removeItem('token');
    navigate('/');
  };


  return (
    <>
      <nav>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            Home
          </Link>
          <Link to='/podcasts' className='navbar-item'>
            Podcasts
          </Link>
          <Link to='/login' className='navbar-item'>
            Login
          </Link>
          <Link to='/register' className='navbar-item'>
            Register
          </Link>
          {getLoggedInUserId() && <Link to='/' className="navbar-item" onClick={logout}>
            Logout
          </Link>}
          {getLoggedInUserId() &&<Link to='/createpodcast' className='navbar-item'>
            Create New Podcast
          </Link>}
        </div>
      </nav>
    </>
  );
}

export default Navbar