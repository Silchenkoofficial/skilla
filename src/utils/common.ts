/**
 * Группирует массив объектов по указанному ключу.
 *
 * @template T - Тип элементов в массиве.
 * @param {T[]} array - Массив объектов для группировки.
 * @param {keyof T} key - Ключ, по которому будет выполнена группировка.
 * @param {keyof T} [sortKey] - (Необязательный) Ключ для сортировки групп. Если указан, объекты в каждой группе будут отсортированы по этому ключу.
 * @returns {Record<string, T[]>} - Объект, где ключи - это значения указанного ключа, а значения - массивы объектов, сгруппированных по этим ключам.
 *
 * @example
 * const data = [
 *   { id: 1, category: 'A', value: 10 },
 *   { id: 2, category: 'B', value: 20 },
 *   { id: 3, category: 'A', value: 30 }
 * ];
 *
 * const grouped = groupBy(data, 'category');
 * // grouped будет равен:
 * // {
 * //   A: [{ id: 1, category: 'A', value: 10 }, { id: 3, category: 'A', value: 30 }],
 * //   B: [{ id: 2, category: 'B', value: 20 }]
 * // }
 */
type GroupBy<T> = (
  array: T[],
  key: keyof T,
  sortKey?: keyof T
) => Record<string, T[]>;

export const groupBy: GroupBy<any> = (array, key, sortKey) => {
  return array.reduce(
    (acc, curr) => {
      const groupKey = curr[key] as unknown as string;

      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }

      acc[groupKey].push(curr);
      return acc;
    },
    {} as Record<string, any[]>
  );
};

/**
 * Получает случайное значение из переданного массива.
 *
 * @template T - Тип элементов в массиве.
 * @param {T[]} array - Массив, из которого будет выбрано случайное значение.
 * @returns {T | undefined} - Случайное значение из массива или `undefined`, если массив пустой.
 *
 * @example
 * const colors = ['red', 'green', 'blue'];
 * const randomColor = getRandomValue(colors);
 * console.log(randomColor); // Например, 'green'
 */
export const getRandomValue = <T>(array: T[]): T | undefined => {
  if (array.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

/**
 * Удаляет все свойства с null, undefined или пустыми значениями из объекта и его вложенных объектов.
 *
 * @param {Object} params - Объект с параметрами, из которого будут удалены ненужные значения.
 * @returns {Object} - Новый объект с удалёнными свойствами, содержащими null, undefined или пустые значения.
 *
 * @example
 * const cleanedParams = killNulls({
 *   a: null,
 *   b: 'value',
 *   c: undefined,
 *   d: '',
 *   e: { f: 'test', g: null },
 *   h: [1, null, { i: '' }]
 * });
 * console.log(cleanedParams); // { b: 'value', e: { f: 'test' }, h: [1] }
 */
export const killNulls = (params: {
  [key: string]: any;
}): { [key: string]: any } => {
  const formattedParams = { ...params };

  for (const key in formattedParams) {
    if (
      formattedParams[key] === null ||
      formattedParams[key] === undefined ||
      formattedParams[key] === ''
    ) {
      delete formattedParams[key];
      continue;
    }

    if (typeof formattedParams[key] === 'object') {
      if (Array.isArray(formattedParams[key])) {
        formattedParams[key] = formattedParams[key]
          .map((item: any) =>
            typeof item === 'object' ? killNulls(item) : item
          )
          .filter(
            (item: any) =>
              item !== null &&
              item !== '' &&
              (typeof item !== 'object' || Object.keys(item).length)
          );

        if (formattedParams[key].length === 0) {
          delete formattedParams[key];
        }
      } else {
        formattedParams[key] = killNulls(formattedParams[key]);

        if (Object.keys(formattedParams[key]).length === 0) {
          delete formattedParams[key];
        }
      }
    }
  }

  return formattedParams;
};
