import useData from '../services/useData';



export interface Ingredient {
  _id: string;
  name: string;
}


const useIngredients = () => {
  const { data, isLoading, error } = useData<Ingredient>('ingredients');
  
  return { ingredients: data || [], isLoading, error }; 
};

export default useIngredients;