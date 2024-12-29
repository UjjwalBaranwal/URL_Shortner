function toBase62(num) {
  const base62Chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const base = base62Chars.length;

  if (num === 0) return "0";

  let result = "";
  while (num > 0) {
    const remainder = num % base;
    result = base62Chars[remainder] + result;
    num = Math.floor(num / base);
  }

  return result;
}

function fromBase62(str) {
  const base62Chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const base = base62Chars.length;

  let result = 0;
  let power = 1; // We will start multiplying from the right-most character

  for (let i = str.length - 1; i >= 0; i--) {
    const index = base62Chars.indexOf(str[i]);
    if (index === -1) {
      throw new Error("Invalid Base62 character: " + str[i]);
    }
    result += index * power;
    power *= base;
  }

  return result;
}

module.exports = { toBase62, fromBase62 };
