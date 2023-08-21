import React, { createContext } from 'react';
import { useState } from 'react';

const SmootherContext = createContext({ completed: false });

export const SmootherProvider = ({ children }) => {
  const [smootherReady, setSmootherReady] = useState(false);

  const toggleSmootherReady = (value) => {
    setSmootherReady(value);
  };

  return (
    <SmootherContext.Provider
      value={{
        toggleSmootherReady,
        smootherReady,
      }}
    >
      {children}
    </SmootherContext.Provider>
  );
};

export default SmootherContext;
