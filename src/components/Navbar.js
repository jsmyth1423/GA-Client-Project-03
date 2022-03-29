import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom'
import { getLoggedInUserId } from '../lib/auth';
import SearchByName from './SearchByName'

const Navbar = () => {

  // const [isUser, setIsUser] = React.useState()
  const [whatUserTypes, setWhatUserTypes] = React.useState('')
  const [searchField, setSearchField] =React.useState('title')


  console.log('is this true?', getLoggedInUserId());
  const navigate = useNavigate();


  const logout = () => {
    sessionStorage.removeItem('token');
    navigate('/');
  };

  function handleChange (event){
    setWhatUserTypes(event.target.value)
  }

  function handleClick (event) {
    const searchByValue = event.target.selectedOptions[0].value;
    setSearchField(searchByValue)
    setWhatUserTypes('')
  }


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
          {getLoggedInUserId() && (
            <Link to='/' className='navbar-item' onClick={logout}>
              Logout
            </Link>
          )}
          {getLoggedInUserId() && (
            <Link to='/createpodcast' className='navbar-item'>
              Create New Podcast
            </Link>
          )}

          <div className='navbar-end is-hidden-touch'>
            <div className='field'>
              <input
                className='input is-normal is-warning'
                placeholder='Search Podcast'
                name='search'
                onChange={handleChange}
                value={whatUserTypes}
              ></input>
            </div>
            <select name='selectList' id='selectList' onChange={handleClick}>
              <option value='title'>Title</option>
              <option value='description'>Description</option>
              <option value='host'>Host</option>
              <option value='guest'>Guest</option>
              <option value='genre'>Genre</option>
            </select>
            {!whatUserTypes ? (
              <></>
            ) : (
              <section className='hero is-fullheight-with-navbar mt-6'>
                <div className='hero-body'>
                  <div className='container'>
                    <div className='columns is-multiline'>
                      <SearchByName
                        key={whatUserTypes}
                        userSearches={whatUserTypes}
                        searchByField={searchField}
                      />
                    </div>
                  </div>
                </div>
              </section>
            )}
            {/* <div className='navbar-item'>
              <div className='buttons' id='randomise'>
                <Link to='/random' className='button is-warning'>
                  <strong>Fetch Me A Podcast</strong>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar