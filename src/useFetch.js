import React, { useState, useEffect } from 'react';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, [url]);
  return [data];
};
export default useFetch;
