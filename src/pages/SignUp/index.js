import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import Input from '../../components/Input';

import logo from '../../assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    return data;
  }
  return (
    <>
      <img src={logo} alt="" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
