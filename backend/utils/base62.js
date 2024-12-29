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

module.exports = toBase62;
