/**
 * Filter out all symbols and whitespaces in a phone number, adding a country code if it is not present
 * @param phone Phone number to filter
 * @param countryCode Optional. Country code to add to the filtered phone number if not present
 * @returns Filtered phone number
 */
export const filterPhone = (phone: string, countryCode?: string): string => {
  const regexp = new RegExp(
    `${countryCode ? `(^\\s*\\+?\\s*(${countryCode}))?` : ''}[^0-9]*`,
    'g'
  );
  return [countryCode, phone.replace(regexp, '')]
    .filter((item) => !!item)
    .join('');
};
