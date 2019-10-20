import { init, RematchRootState } from '@rematch/core';
import users from './users';
import users2 from './users2';

const models = {
  users,
  users2,
};

const store = init({
  models,
});

export default store;

export type RootState = RematchRootState<typeof models>;
export type RootDispatch = typeof store.dispatch;
export type Store = typeof store;
