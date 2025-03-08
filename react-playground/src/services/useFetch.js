import { useState, useEffect } from "react";

export default function useFetch(url,refresh) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
        
      } catch (e) {
        setError(e);
        setData(null)
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url,refresh]);
  return { data, error, loading };
}
