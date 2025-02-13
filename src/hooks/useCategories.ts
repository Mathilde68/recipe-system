import useData from './useData';
import { fetchCategories } from '../services/dataService';

export interface Category {
  _id: number;
  name: string;
}

const useCategories = () => {
  return useData<Category>(fetchCategories);
};

export default useCategories;