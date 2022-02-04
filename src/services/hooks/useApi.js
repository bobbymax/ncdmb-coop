import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    // if (response.data.message) {
    //   console.log("Error getting the data", response.data.message);
    // }

    setData(response.data.data);

    return response;
  };

  return { data, request, loading, setData };
};

export default useApi;
