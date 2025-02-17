import useData from './useData';
import { fetchDiets } from '../services/dataService';

export interface Diet {
  _id: number;
  name: string;
}

const useIngredients = () => {
  return useData<Diet>(fetchDiets);
};

export default useIngredients;