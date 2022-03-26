// Cree esta funcion que recibe un String en formato Unicode y devuelve el emoji
export const emojiUnicode = (unicode) => {
  const characters = unicode.split(" ").map((e) => e.replace("U+", "0x"))
  return String.fromCodePoint(...characters)
}
