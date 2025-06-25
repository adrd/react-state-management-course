import { useState, useEffect } from "react";

export const useNetwork = ({ url }) => {
  console.log("useNetwork start executing...");

  let [state, setState] = useState({ loading: true });

  useEffect(() => {
    console.log("useEffect start executing...");

    setState({ loading: true });

    const makeRequest = async () => {
      console.log("makeRequest start executing...");

      try {
        let response = await fetch(url);
        let data = await response.json();
        console.log("response returned by makeRequest...");

        setState({ data, loading: false });
      } catch (error) {
        setState({ error, loading: false });
      }
    };

    makeRequest();
  }, [url]);

  return state;
};
