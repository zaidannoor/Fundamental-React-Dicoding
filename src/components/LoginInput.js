import React from 'react';
import UseInput from '../hooks/UseInput';
import PropTypes from 'prop-types';

function LoginInput({login}){
  const [email, onEmailChange] = UseInput('');
  const [password, onPasswordChange] = UseInput('');

  function onSubmitHandler(event){
    event.preventDefault();
    login({
      email: email,
      password: password
    })
  }

  return (
    <form onSubmit={onSubmitHandler} className='login-input'>
      <input type="email" placeholder='Email' value={email} onChange={onEmailChange} />
      <input type="password" placeholder='Password' value={password} onChange={onPasswordChange} />
      <button>Login</button>
    </form>
  );
}
 
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInput;