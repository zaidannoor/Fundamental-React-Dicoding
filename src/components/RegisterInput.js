import React from 'react';
import UseInput from '../hooks/UseInput';
import PropTypes from 'prop-types';

function RegisterInput(){
  const [name, onNameChange] = UseInput('');
  const [email, onEmailChange] = UseInput('');
  const [password, onPasswordChange] = UseInput('');

  function onSubmitHandler(event) {
    event.preventDefault();
 
         this.props.register({
           name: this.state.name,
           email: this.state.email,
           password: this.state.password,
         });
  }

  return (
    <form onSubmit={onSubmitHandler} className='register-input'>
      <input type="text" placeholder="Nama" value={name} onChange={onNameChange} />
      <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
      <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={onPasswordChange} />
      <button>Register</button>
    </form>
  )
}
 
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
 
export default RegisterInput;