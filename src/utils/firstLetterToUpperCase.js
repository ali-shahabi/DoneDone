export default function firstLetterToUpperCase(text) {
  return (
    String(text).charAt(0).toLocaleUpperCase('en-US') + String(text).slice(1)
  );
}
