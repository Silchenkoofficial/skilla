import { IParams } from '@/types';
import { prepareQueryParams } from '@/utils';

export const GetList = async (params?: IParams) => {
  const response = await fetch(
    'https://api.skilla.ru/mango/getList' +
      (params ? '?' + prepareQueryParams(params) : ''),
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer testtoken',
      },
    }
  );

  return response.json();
};

export const GetRecord = async (params?: IParams) => {
  const response = await fetch(
    'https://api.skilla.ru/mango/getRecord/' +
      (params ? '?' + prepareQueryParams(params) : ''),
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer testtoken',
        'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
        'Content-Transfer-Encoding': 'binary',
      },
    }
  );

  return response.blob();
};
