import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import LocaleContext from '../context/LocaleContext';

function RegisterPage() {
  const {locale} = React.useContext(LocaleContext);
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }
 
  return (
    <section className='register-page'>
      <h2>{locale === 'id' ? 'Registrasi Disini' : 'Register Here'}</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>{locale === 'id' ? 'Sudah punya akun ? ' : 'Already have an account ? '}<Link to="/">Login</Link></p>
    </section>
  )
}
 
export default RegisterPage;