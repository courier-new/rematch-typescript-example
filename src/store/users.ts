import { createModel, RematchDispatch } from '@rematch/core';

import { User } from '../types';
import Api from '../api';

type UsersState = Readonly<User[]>;
const INITIAL_STATE: UsersState = [];

const reducers = {
  saveUsers: (_state: UsersState, payload: Readonly<User[]>): UsersState => payload,
  toggleFollow: (state: UsersState, payload: { id: string }): UsersState =>
    state.map(user => {
      if (user.id.value === payload.id) {
        return {
          ...user,
          isFollowing: !user.isFollowed,
        };
      }
      return user;
    }),
};

const effects = (dispatch: RematchDispatch) => ({
  loadUsers: async (): Promise<void> => {
    const users = await Api.loadUsers();
    dispatch.users.saveUsers(users);
  },
});

const model = createModel({
  name: 'users',
  state: INITIAL_STATE,
  reducers,
  effects,
});

export default model;
