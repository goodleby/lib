import { filterPhone } from '../filterPhone';

describe('filterPhone', () => {
  it('should filter out all symbols and whitespaces in a phone number', () => {
    const phone = '+1 (202) 555-0176';
    const filtered = '12025550176';

    expect(filterPhone(phone)).toBe(filtered);
  });

  it('should take an optional second argument, the country code to add to the filtered phone number if not present', () => {
    const phoneWithCountryCode = '+1 (334) 856-1437';
    const phoneWithoutCountryCode = '(334) 856-1437';
    const filtered = '13348561437';

    expect(filterPhone(phoneWithCountryCode, '1')).toBe(filtered);
    expect(filterPhone(phoneWithoutCountryCode, '1')).toBe(filtered);
  });
});
