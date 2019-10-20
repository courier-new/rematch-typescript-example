// Alternative way of defining the model

import { RematchDispatch } from '@rematch/core';

import { User } from '../types';
import Api from '../api';

type UsersState = Readonly<User[]>;
const INITIAL_STATE: UsersState = [];

const model = {
  name: 'users2',
  state: INITIAL_STATE,
  reducers: {
    saveUsers: (_state: UsersState, payload: Readonly<User[]>) => payload,
    toggleFollow: (state: UsersState, payload: User) =>
      state.map(user => {
        if (user.id === payload.id) {
          return {
            ...user,
            isFollowing: !user.isFollowed,
          };
        }
        return user;
      }),
  },
  effects: (dispatch: RematchDispatch) => ({
    loadUsers: async () => {
      const users = await Api.loadUsers();
      dispatch.users.saveUsers(users);
    },
  }),
};

export default model;
