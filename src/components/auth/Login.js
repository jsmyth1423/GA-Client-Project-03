import React from 'react';
import { loginUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = async () => {
      try {
        await loginUser({
          email: emailValue,
          password: passwordValue,
        });
        navigate('/podcasts');
      } catch (err) {
        console.log('Error', err);
      }
    };
    getData();
  };

  return (
    <div className='hero is-fullheight-with-navbar' id='login-background'>
      <body className='login-container'>
        <div>
          <form className='box' onSubmit={handleSubmit}>
            <div className='field'>
              <label htmlFor='email' className='label'>
                Email
              </label>
              <p class='control has-icons-left has-icons-right'>
                <input
                  class='input'
                  type='email'
                  placeholder='Email'
                  value={emailValue}
                  onChange={handleEmailChange}
                  id='email'
                />
                <span class='icon is-small is-left'>
                  <i class='fas fa-envelope'></i>
                </span>
                <span class='icon is-small is-right'>
                  <i class='fas fa-check'></i>
                </span>
              </p>
            </div>
            <div className='field'>
              <label htmlFor='password' className='label'>
                Password
              </label>
              <p class='control has-icons-left'>
                <input
                  class='input'
                  type='password'
                  placeholder='Password'
                  value={passwordValue}
                  onChange={handlePasswordChange}
                  id='password'
                />
                <span class='icon is-small is-left'>
                  <i class='fas fa-lock'></i>
                </span>
              </p>
            </div>
            <button
              className='button is-primary is-fullwidth'
              type='submit'
              value='Login'
            >
              <p>Login</p>
              <span class='icon'>
                <i class='fas fa-lock'></i>
              </span>
            </button>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Login;
