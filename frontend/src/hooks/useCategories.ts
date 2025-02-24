import useData from '../services/useData';



export interface Category {
  _id: string;
  name: string;
}

const useCategories = () => {
  const { data, isLoading, error } = useData<Category>('categories');
  return { categories: data || [], isLoading, error }; 
};

export default useCategories;