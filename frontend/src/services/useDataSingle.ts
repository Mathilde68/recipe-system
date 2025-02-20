import { useEffect, useState } from 'react';
import axios from 'axios';

const useDataSingle = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(`${import.meta.env.VITE_API_URL}${endpoint}`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]); // Add endpoint as a dependency

  return { data, loading, error };
};

export default useDataSingle;
