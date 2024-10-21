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
