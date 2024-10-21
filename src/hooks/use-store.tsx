import { useState } from 'react';
import { GetList } from '@/api';
import { groupBy } from '@/utils/';
import { IState } from '@/store/types';
import { GetRecord } from '@/api/requests/requests';

export const useStore = () => {
  const [state, setState] = useState<IState>({
    data: [],
    loading: false,
    error: null,
  });

  const getList = async () => {
    setState(prevState => ({ ...prevState, loading: true }));

    try {
      const data = await GetList();
      setState(prevState => ({
        ...prevState,
        data: groupBy(data.results, 'date_notime'),
        loading: false,
      }));
    } catch (error: any) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: error.message,
      }));
    }
  };

  const getRecord = async (record: string, partnership_id: string) => {
    try {
      const data = await GetRecord(record, partnership_id);
    } catch (error) {}
  };

  return {
    state,
    getList,
    getRecord,
  };
};
