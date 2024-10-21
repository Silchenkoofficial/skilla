/**
 * Форматирует номер телефона из формата 74951205096 в формат +7 (987) 567-17-12.
 *
 * @param {string} phone - Номер телефона в формате 74951205096.
 * @returns {string} Отформатированный номер телефона.
 * @throws {Error} Если номер телефона имеет неверный формат (не 11 цифр).
 */

export const formatPhoneNumber = (phone: string): string => {
  const cleanedNumber = phone.replace(/\D/g, '');

  if (cleanedNumber.length !== 11) {
    throw new Error('Неверный формат номера телефона');
  }

  const countryCode = cleanedNumber[0];
  const areaCode = cleanedNumber.slice(1, 4);
  const firstPart = cleanedNumber.slice(4, 7);
  const secondPart = cleanedNumber.slice(7, 9);
  const thirdPart = cleanedNumber.slice(9, 11);

  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}-${thirdPart}`;
};
