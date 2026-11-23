import { validateContact, validateName, validatePassword } from './validation';

describe('validatePassword', () => {
  it('accepts a strong password', () => {
    expect(validatePassword('Gator#2026')).toBeNull();
  });
  it('rejects short passwords', () => {
    expect(validatePassword('Ab1!')).not.toBeNull();
  });
  it('requires a special character', () => {
    expect(validatePassword('Gator2026')).not.toBeNull();
  });
});

describe('validateName', () => {
  it('rejects empty names', () => {
    expect(validateName('   ')).not.toBeNull();
  });
  it('rejects names over 50 characters', () => {
    expect(validateName('a'.repeat(51))).not.toBeNull();
  });
});

describe('validateContact', () => {
  it('accepts an email', () => {
    expect(validateContact('me@example.com', '')).toBeNull();
  });
  it('accepts a phone number', () => {
    expect(validateContact('', '416-555-0123')).toBeNull();
  });
  it('rejects when both are empty', () => {
    expect(validateContact('', '')).not.toBeNull();
  });
});