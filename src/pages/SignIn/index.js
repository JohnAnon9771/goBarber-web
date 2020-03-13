import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../../components/Input';
import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  async function handleSubmitLogin(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail é obrigatório'),
        password: Yup.string()
          .min(6, 'Minimo 6 caracteres')
          .required('Senha é obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      reset();
      formRef.current.setErrors({});
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};

        error.inner.forEach(err => {
          errorMessages[err.path] = err.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
    const { email, password } = data;
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="" />
      <Form ref={formRef} onSubmit={handleSubmitLogin}>
        <Input type="email" name="email" placeholder="Seu e-mail" />
        <Input type="password" name="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
