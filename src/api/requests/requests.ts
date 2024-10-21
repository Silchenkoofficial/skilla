export const GetList = async () => {
  const response = await fetch('https://api.skilla.ru/mango/getList', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer testtoken',
    },
  });

  return response.json();
};

export const GetRecord = async (recordId: string, partnership_id: string) => {
  const response = await fetch(
    `https://api.skilla.ru/mango/getRecord/?record=${recordId}&partnership_id=${partnership_id}`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer testtoken',
        'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
      },
    }
  );

  return response.json();
};
