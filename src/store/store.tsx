import { createContext, useState, PropsWithChildren } from 'react';
import { GetList, GetRecord } from '@/api';
import { IDataParams, IParams, IState, IStoreContext } from '@/types';
import { groupBy, killNulls } from '@/utils';

const initialState: IState = {
  data: {},
  params: {},
  loading: false,
  error: null,
};

export const StoreContext = createContext<IStoreContext | undefined>(undefined);

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<IState>(initialState);

  const getList = async (params?: IParams) => {
    setState(prevState => ({ ...prevState, data: {}, loading: true }));

    try {
      const data = await GetList(params);
      const groupedData = { ...groupBy(data.results, 'date_notime') };

      setState(prevState => ({
        ...prevState,
        data: groupedData,
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
      const data = await GetRecord({ record, partnership_id });
      console.log(data);
    } catch (error) {}
  };

  const setParams = (newParams: IDataParams) => {
    setState(prevState => ({ ...prevState, params: newParams }));
    getList(killNulls(newParams));
  };

  return (
    <StoreContext.Provider value={{ state, setParams, getList, getRecord }}>
      {children}
    </StoreContext.Provider>
  );
};
