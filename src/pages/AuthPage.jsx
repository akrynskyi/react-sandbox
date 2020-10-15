import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Loader } from '../components/loader';
import { UserLogin, UserRegister, AuthNavbar } from '../components/auth';
import { LayoutAuth } from '../components/styled';

export const AuthPage = () => {
  const { auth } = useParams();
  const loading = useSelector(({ user }) => user.loading);

  return (
    <>
      <AuthNavbar />
      <LayoutAuth>
        {loading && <Loader backdrop={true} />}
        {
          auth === 'login'
          ? <UserLogin /> 
          : <UserRegister />
        }
      </LayoutAuth>
    </>
  );
};