import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import {login} from '../utils/network-data';

function LoginPage({loginSuccess}) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });
        
        if (!error) {
          loginSuccess(data);
        }
      }
     
      return (
        <section className='login-page'>
          <h2>Please Login to Continue</h2>
          <LoginInput login={onLogin} />
          <p>Doesn't have account ? <Link to="/register">Register here.</Link></p>
        </section>
      );
}

export default LoginPage;