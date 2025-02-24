import { useQuery } from '@tanstack/react-query';
import apiClient from './api-client';

const useDataSingle = <T>(endpoint: string) => {
  return useQuery<T, Error>({
    queryKey: [endpoint], 
    queryFn: () =>
      apiClient.get<T>(endpoint).then((res) => res.data), 
    staleTime: 1000 * 60 * 60* 5, 
  });
};

export default useDataSingle;
