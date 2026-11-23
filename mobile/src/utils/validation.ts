export const NAME_MAX_LENGTH = 50;

export function validateName(name: string): string | null {
  if (name.trim().length === 0) return 'Please tell the Gators your name';
  if (name.length > NAME_MAX_LENGTH) return `Max ${NAME_MAX_LENGTH} characters`;
  return null;
}

export function validateEmail(email: string): string | null {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return 'Enter a valid email address';
  }
  return null;
}

export function validatePhone(phone: string): string | null {
  const digits = phone.replace(/\D/g, '');
  const onlyPhoneChars = /^\+?[\d\s\-().]+$/.test(phone.trim());
  if (!onlyPhoneChars || digits.length < 10 || digits.length > 15) {
    return 'Enter a valid phone number';
  }
  return null;
}

// The user must provide ONE of email or phone.
export function validateContact(email: string, phone: string): string | null {
  if (email.length > 0) return validateEmail(email);
  if (phone.length > 0) return validatePhone(phone);
  return 'Enter an email or phone number';
}

export function validatePassword(password: string): string | null {
  if (password.length < 8) return 'At least 8 characters';
  if (!/[A-Z]/.test(password)) return 'Add an uppercase letter';
  if (!/[a-z]/.test(password)) return 'Add a lowercase letter';
  if (!/\d/.test(password)) return 'Add a number';
  if (!/[^A-Za-z0-9]/.test(password)) return 'Add a special character (@, !, #, $...)';
  return null;
}