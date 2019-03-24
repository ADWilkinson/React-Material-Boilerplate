import React, { useReducer } from 'react';

export const Store = React.createContext();

const initialState = {
  location: '',
  users: []
};

const navigationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

const usersReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER_LIST':
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

const mainReducer = (state, action) => {
  // middleware goes here, i.e calling analytics service, etc.
  return {
    location: navigationReducer(state, action),
    users: usersReducer(state, action)
  };
};

export const StoreProvider = props => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
