import useData from '../services/useData';





export interface Diet {
  _id: string;
  name: string;
}

const useDiets = () => {
  const { data, loading, error } = useData<Diet>('diets');
  return { diets: data, loading, error };
};

export default useDiets;