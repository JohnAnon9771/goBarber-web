import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { signInSuccess } from './actions';

import history from '../../../services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const response = yield call(api.post, 'session', {
    email,
    password,
  });

  const { token, user } = response.data;
  if (!user.provider) {
    console.tron.error('Não prestador');
    return;
  }

  yield put(signInSuccess(token, user));
  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
