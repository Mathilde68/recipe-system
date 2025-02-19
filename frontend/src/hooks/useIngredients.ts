import useData from './useData';
import { fetchIngredients } from '../services/dataService';


interface RawIngredient {
  _id: { $oid: string };
  name: string;
}


export interface FormattedIngredient {
  _id: string;
  name: string;
}

const useIngredients = () => {
  const rawIngredients = useData<RawIngredient>(fetchIngredients);

 
  const formattedIngredients = rawIngredients.map((ingredient) => ({
    ...ingredient,
    _id: ingredient._id.$oid,
  }));

  return formattedIngredients;
};

export default useIngredients;