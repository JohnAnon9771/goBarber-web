import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo_purple.svg';
import Notification from '../Notification';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const { name, avatar } = useSelector(state => {
    return {
      name: state.user.profile.name,
      avatar: state.user.profile.avatar,
    };
  });
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>{name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
