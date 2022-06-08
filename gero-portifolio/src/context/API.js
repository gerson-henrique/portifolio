import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import getRepos from '../services/GithubAPI';

export const APIContext = createContext();

export default function APIContextProvider({ children }) {
  // states

  const [apiResponse, setApiResponse] = useState('');
  const [load, setLoad] = useState(true);
  // functions
  const handleAPI = async () => {
    const results = await getRepos();
    setApiResponse(results);
  };

  return (
    <APIContext.Provider
      value={ { load,
        apiResponse,
        setApiResponse,
        handleAPI,
        setLoad } }
    >
      {children}
    </APIContext.Provider>
  );
}

APIContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;