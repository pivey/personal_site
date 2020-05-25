import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';

const useAppContext = () => useContext(AppContext);

export default useAppContext;
