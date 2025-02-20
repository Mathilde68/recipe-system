import useData from '../services/useData';



export interface Ingredient {
  _id: string;
  name: string;
}

const useIngredients = () => {

  const { data, loading, error } = useData<Ingredient>('ingredients');
  return { ingredients: data, loading, error };
};

export default useIngredients;