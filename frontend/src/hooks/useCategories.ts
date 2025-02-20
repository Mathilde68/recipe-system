import useData from '../services/useData';



export interface Category {
  _id: string;
  name: string;
}

const useCategories = () => {
  const { data, loading, error } = useData<Category>('categories');
  return { categories: data, loading, error };
};

export default useCategories;