import { useEffect, useState } from 'react';
import axios from 'axios';




const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T[]>(`${import.meta.env.VITE_API_URL}${endpoint}`);
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
  }, []);
  return { data, loading, error }; // Return data as an array of T
};

export default useData;

