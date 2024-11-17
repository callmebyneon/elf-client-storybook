import React from 'react';

export const combineComponents = (...components) => {
  return components.reduce((AccumulatedComponents, CurrentComponents) => {
    return ({ children }) => (
      <AccumulatedComponents>
        <CurrentComponents>{children}</CurrentComponents>
      </AccumulatedComponents>
    )
  }, ({ children }) => <>{children}</>)
};