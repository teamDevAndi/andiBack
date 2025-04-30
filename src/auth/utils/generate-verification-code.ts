export function generateVerificationCode(length = 5): string {
    return Math.floor(10000 + Math.random() * 90000).toString().slice(0, length);
  }
  