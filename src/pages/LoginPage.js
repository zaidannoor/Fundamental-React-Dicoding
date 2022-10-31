import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import {login} from '../utils/network-data';
import LocaleContext from '../context/LocaleContext';

function LoginPage({loginSuccess}) {
  const {locale} = React.useContext(LocaleContext);

  async function onLogin({ email, password }) {
      const { error, data } = await login({ email, password });
      
      if (!error) {
        loginSuccess(data);
      }
    }
    
    return (
      <section className='login-page'>
        <h2>{locale === 'id' ? 'Login Untuk Melanjutkan' : 'Please Login to Continue'}</h2>
        <LoginInput login={onLogin} />
        <p>{locale === 'id' ? 'Belum punya akun ? ' : "Doesn't have account ? "}<Link to="/register">{locale === 'id' ? 'Registrasi disini' : 'Register here' }</Link></p>
      </section>
    );
}

export default LoginPage;