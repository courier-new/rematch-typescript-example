import React from 'react';
import { Provider } from 'react-redux';
import Users from './components/UserListContainer';
import store from './store';

const App = (): JSX.Element => (
  <Provider store={store}>
    <Users />
  </Provider>
);

export default App;
