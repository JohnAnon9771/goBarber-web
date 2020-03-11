import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="" />
      <form action="">
        <input type="email" name="email" placeholder="Seu e-mail" />
        <input type="password" name="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
      </form>
      <Link to="/register">Criar conta gratuita</Link>
    </>
  );
}