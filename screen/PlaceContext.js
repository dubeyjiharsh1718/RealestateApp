import { createContext, useContext, useState } from 'react';

export const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [locationId, setLocationId] = useState('');

  return (
    <PlaceContext.Provider value={{ selectedCity, setSelectedCity, locationId, setLocationId }}>
      {children}
    </PlaceContext.Provider>
  );
};
