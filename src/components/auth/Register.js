import React from 'react';
import { registerUser } from '../../api/auth';

const Register = () => {
  const [usernameValue, setUsernameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = React.useState('');

  const handleUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPasswordValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
      confirmPassword: confirmPasswordValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='field'>
        <label htmlFor='username' className='label'>
          Username
        </label>
        <div className='control'>
          <input
            type='text'
            className='input'
            id='email'
            value={usernameValue}
            onChange={handleUsernameChange}
          />
        </div>
      </div>
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
      <div className='field'>
        <label htmlFor='passwordConfirmation' className='label'>
          Password Confirmation
        </label>
        <div className='control'>
          <input
            type='password'
            className='input'
            id='password-confirmation'
            value={confirmPasswordValue}
            onChange={handleConfirmPasswordChange}
          />
        </div>
      </div>

      <input type='submit' value='Register' />
    </form>
  );
};

export default Register;
