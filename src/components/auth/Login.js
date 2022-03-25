import React from 'react';
import { loginUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const navigate = useNavigate()

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
        console.log('HI', err);
      }
    };
    getData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='field'>
        <label htmlFor='email' className='label'>
          Email
        </label>
        <div className='control'>
          <input
            type='text'
            className='input'
            id='email'
            value={emailValue}
            onChange={handleEmailChange}
          />
        </div>
      </div>
      <div className='field'>
        <label htmlFor='password' className='label'>
          Password
        </label>
        <div className='control'>
          <input
            type='password'
            className='input'
            id='password'
            value={passwordValue}
            onChange={handlePasswordChange}
          />
        </div>
      </div>

      <input type='submit' value='Login' />
    </form>
  );
};

export default Login;
