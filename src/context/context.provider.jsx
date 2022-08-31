import React, { useEffect, useState, createContext } from "react";

export const facebookContentContext = createContext(null);

export const FacebookProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://159.89.46.123:4444/all");
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
