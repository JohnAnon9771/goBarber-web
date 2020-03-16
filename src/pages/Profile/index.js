import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form } from '@unform/web';
import Input from '../../components/Input';

import { updateProfileRequest } from '../../store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={profile}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input
          name="newPassword"
          type="password"
          placeholder="Sua nova senha"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua nova senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button">Sair</button>
    </Container>
  );
}
