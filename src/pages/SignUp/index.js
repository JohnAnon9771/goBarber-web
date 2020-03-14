import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';

import logo from '../../assets/logo.svg';
import { signUpRequest } from '../../store/modules/auth/actions';

export default function SignUp() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail é obrigatório'),
        password: Yup.string()
          .min(6, 'Senha deve conter no Minimo 6 caracteres')
          .required('Senha obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      reset();
      formRef.current.setErrors({});
      const { name, email, password } = data;
      dispatch(signUpRequest(name, email, password));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};

        error.inner.forEach(err => {
          errorMessages[err.path] = err.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <>
      <img src={logo} alt="" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
