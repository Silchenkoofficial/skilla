/**
 * Преобразует объект данных в строку параметров URL.
 *
 * @param {Object} data - Объект, содержащий ключи и значения для параметров запроса.
 * @returns {URLSearchParams} - Объект URLSearchParams, содержащий преобразованные параметры запроса.
 *
 * @example
 * const queryParams = prepareQueryParams({
 *   search: 'test',
 *   tags: ['javascript', 'typescript'],
 *   limit: 10
 * });
 * console.log(queryParams.toString()); // "search=test&tags=javascript&tags=typescript&limit=10"
 */
export const prepareQueryParams = (data: any): URLSearchParams => {
  const params = new URLSearchParams();

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];

      if (Array.isArray(value)) {
        value.map(val => params.append(key, val));
      } else {
        params.append(key, value);
      }
    }
  }

  return params;
};
