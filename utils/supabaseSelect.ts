import { supabase } from './supabaseClient';

export const fetchData = async (table: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>, setData: React.Dispatch<React.SetStateAction<any[]>>) => {
  setLoading(true);
  const { data, error } = await supabase.from(table).select('*');

  if (error) {
    console.error(`Error when retrieving data: ${error}`);
  } else {
    setData(data);
  }
  setLoading(false);
};
