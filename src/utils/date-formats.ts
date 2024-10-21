/**
 * Извлекает часы и минуты из строки даты и времени в формате 'YYYY-MM-DD HH:MM:SS'.
 *
 * @param {string} date - Строка даты и времени.
 * @returns {string} Строка, содержащая часы и минуты в формате 'HH:MM'.
 */

export const getTime = (date: string): string => {
  const [_, time] = date.split(' ');
  const [hours, minutes] = time.split(':');

  return `${hours}:${minutes}`;
};

/**
 * Преобразует количество секунд в строку формата 'HH:MM:SS' или 'MM:SS'.
 *
 * @param {number} seconds - Количество секунд.
 * @returns {string} Строка в формате 'HH:MM:SS', если часы не равны нулю,
 *                   иначе 'MM:SS'.
 * @throws {Error} Если количество секунд отрицательное.
 */
export const formatTimeFromSeconds = (seconds: number): string => {
  if (seconds < 0) {
    throw new Error('Количество секунд должно быть неотрицательным.');
  }

  const hours: number = Math.floor(seconds / 3600);
  const minutes: number = Math.floor((seconds % 3600) / 60);
  const remainingSeconds: number = seconds % 60;

  const minutesFormatted: string = String(minutes).padStart(2, '0');
  const secondsFormatted: string = String(remainingSeconds).padStart(2, '0');

  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${minutesFormatted}:${secondsFormatted}`;
  }

  return `${minutesFormatted}:${secondsFormatted}`;
};

/**
 * Форматирует дату в виде строки.
 * Возвращает "Сегодня", если дата равна текущей дате,
 * "Вчера", если дата равна дате вчера,
 * или дату в формате "ДД.ММ.ГГГГ" для всех других случаев.
 *
 * @param {string} dateString - Дата в виде строки, которую необходимо отформатировать.
 * @returns {string} - Строка, представляющая отформатированную дату.
 *
 * @example
 * // Вернет "Сегодня", если сегодня 18 октября 2024 года
 * formatDate("2024-10-20T15:00:00");
 *
 * @example
 * // Вернет "Вчера", если вчера было 17 октября 2024 года
 * formatDate("2024-10-19T15:00:00");
 *
 * @example
 * // Вернет "01.01.2024" для даты 1 января 2024 года
 * formatDate("2024-01-01T00:00:00");
 */

export const getReadableDate = (dateString: string): string => {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Сегодня';
  }

  if (date.toDateString() === yesterday.toDateString()) {
    return 'Вчера';
  }

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  return date.toLocaleDateString('ru-RU', options);
};

/**
 * Форматирует дату в строку формата YYYY-MM-DD.
 *
 * @param {Date} date - Объект даты, который необходимо отформатировать.
 * @returns {string} - Дата в формате YYYY-MM-DD.
 *
 * @example
 * const formattedDate = formatDate(new Date('2024-10-22'));
 * console.log(formattedDate); // "2024-10-22"
 */
export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
