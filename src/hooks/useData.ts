import { useEffect, useState } from 'react';


const useData = <T>(fetcher: () => Promise<T[]>) => {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    fetcher().then((data) => setData(data));
  }, [fetcher]);

  return data;
};

export default useData;