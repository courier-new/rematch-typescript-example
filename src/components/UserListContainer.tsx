import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import UserList from './UserList';
import { RootState, RootDispatch } from '../store';

const mapState = ({ users }: RootState) => ({
  users,
});

const mapDispatch = (dispatch: RootDispatch) => ({
  loadUsers: dispatch.users.loadUsers,
  toggleFollow: (id: string) => dispatch.users.toggleFollow({ id }),
});

type UserListContainerProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

const Users: FC<UserListContainerProps> = ({ users, loadUsers, toggleFollow }) => {
  useEffect(() => {
    loadUsers();
  }, []);

  return <UserList users={users} toggleFollow={toggleFollow} />;
};

export default connect(
  mapState,
  // @ts-ignore
  mapDispatch,
)(Users);
