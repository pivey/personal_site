import React, { createContext, useState } from 'react';

export const AppContext = createContext({});
export const getFetch = (apiPath, cb) => {
  fetch(`http://localhost:3001${apiPath}`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(res => res.json())
    .then(res => cb(null, res))
    .catch(err => console.log('***', err));
};

function AppContextProvider({ children }) {
  const reRoute = (history, path) => history.push(path);
  const [scrollStatus, setScrollStatus] = useState({
    scrollPos: 0,
    show: true,
  });

  const state = {
    scrollStatus,
    setScrollStatus,
    reRoute,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
