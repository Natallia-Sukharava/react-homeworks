import { useEffect, useState } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching:", url, options);

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
        setStatus(response.status);

        const log = {
          url,
          options,
          status: response.status,
          timestamp: new Date().toISOString(),
        };
        localStorage.setItem(`fetchLog_${Date.now()}`, JSON.stringify(log));

      } catch (error) {
        console.error("useFetch error:", error);
        setStatus("error");
      }
    };

    fetchData();
  }, [url]);

  return { data, status };
}

export default useFetch;
