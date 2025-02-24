import useData from '../services/useData';





export interface Diet {
  _id: string;
  name: string;
}

const useDiets = () => {
  const { data, isLoading, error } = useData<Diet>('diets');
  return { diets: data || [], isLoading, error }; 
};


export default useDiets;