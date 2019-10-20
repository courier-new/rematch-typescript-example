import { User } from '../types';

type UserResponse = {
  results: Readonly<User[]>;
};

export default {
  loadUsers: async (): Promise<Readonly<User[]>> => {
    const result = await fetch('https://randomuser.me/api/?results=20');
    const data: UserResponse = await result.json();
    return data.results;
  },
};
