import React, { FC } from 'react';
import UserCard from './UserCard';
import { User } from '../types';

type UserListProps = {
  users: ReadonlyArray<User>;
  toggleFollow: (userID: string) => void;
};

const UserList: FC<UserListProps> = ({ users, toggleFollow }) => (
  <>
    {users.map(user => (
      <UserCard user={user} key={user.id.value} onFollow={(): void => toggleFollow(user.id.value)} />
    ))}
  </>
);

export default UserList;
