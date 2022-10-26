import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
 
function RegisterPage() {
    const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }
 
  return (
    <section className='register-page'>
      <h2>Register Here</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>Already have an account ? <Link to="/">Login</Link></p>
    </section>
  )
}
 
export default RegisterPage;