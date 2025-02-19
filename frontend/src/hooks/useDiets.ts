import useData from './useData';
import { fetchDiets } from '../services/dataService';


interface RawDiet {
  _id: { $oid: string };
  name: string;
}


export interface FormattedDiet {
  _id: string;
  name: string;
}

const useDiets = () => {
  const rawDiets = useData<RawDiet>(fetchDiets);

  // Format the data in the hook
  const formattedDiets = rawDiets.map((diet) => ({
    ...diet,
    _id: diet._id.$oid,
  }));

  return formattedDiets;
};

export default useDiets;