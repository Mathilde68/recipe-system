import useData from './useData';
import { fetchCategories } from '../services/dataService';

export interface RawCategory {
  _id: {
    $oid: string;
  };
  name: string;
}

export interface FormattedCategory {
  _id: string;
  name: string;
}

const useCategories = () => {
  const rawCategories = useData<RawCategory>(fetchCategories);

  // Format the data in the hook
  const formattedCategories = rawCategories.map((category) => ({
    ...category,
    _id: category._id.$oid,
  }));
  return formattedCategories;
};

export default useCategories;