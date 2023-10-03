// Created on 27.07.23 by 16:07:
import React from 'react';

const UserName = ({ userName = 'admin' }) => {
  const user = {
    userName: userName,
  };

  return <>{user.userName}</>;
};

export default UserName;
