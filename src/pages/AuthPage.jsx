import React from 'react';
import { useParams } from 'react-router-dom';

import { UserLogin, UserRegister, AuthNavbar } from '../components/auth';
import { LayoutAuth } from '../components/styled';

export const AuthPage = () => {
  const { auth } = useParams();

  return (
    <>
      <AuthNavbar />
      <LayoutAuth>
        {
          auth === 'login'
          ? <UserLogin /> 
          : <UserRegister />
        }
      </LayoutAuth>
    </>
  );
};