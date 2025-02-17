import useData from './useData';
import { fetchIngredients } from '../services/dataService';

export interface Ingredient {
  _id: number;
  name: string;
}

const useIngredients = () => {
  return useData<Ingredient>(fetchIngredients);
};

export default useIngredients;