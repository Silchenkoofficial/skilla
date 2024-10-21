export type IParams = { [key: string]: any };

export interface IConstant {
  label: string;
  value: string;
}

export interface IState {
  data: IDataObject;
  params: IDataParams | {};
  loading: boolean;
  error: string | null;
}

export interface IStoreContext {
  state: IState;
  setParams: (newParams: IDataParams) => void;
  getList: (params?: IParams) => Promise<void>;
  getRecord: (record: string, partnership_id: string) => Promise<void>;
}

export interface IData {
  id: string;
  in_out: number;
  status: string;
  date: string;
  date_notime: string;
  person_avatar: string;
  partner_data: {
    phone: string;
  };
  source: string;
  errors: any[];
  record: string;
  time: number;
  partnership_id: string;
}

export interface IDataObject {
  [key: string]: IData[];
}

export interface IDataParams {
  in_out?: string | null;
  sort_by?: TSortByValues;
  date_start?: string | null;
  date_end?: string | null;
}

export type TSortByValues = 'date' | 'duration' | null;
