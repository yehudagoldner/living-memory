import React, { useEffect, useState, createContext } from "react";
import config from '../config'

export const facebookContentContext = createContext(null);

export const FacebookProvider = ({ children, userid }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${config.API_ENDPOINT}/${userid}/all`);
      const results = await response.json();
      console.log(results);
      setData(results);
    })();
  }, []);
  return (
    <facebookContentContext.Provider value={[data, setData]}>
      {children}
    </facebookContentContext.Provider>
  );
};
