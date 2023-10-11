const UserName = ({ userName = 'admin' }) => {
  const user = {
    userName: userName,
  };

  return <>{user.userName}</>;
};

export default UserName;
