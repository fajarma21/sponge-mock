const mockText = (text: string) => {
  const lowerText = text.toLowerCase();
  let newText = '';
  let toUpper = Boolean(Math.floor(Math.random() * 100) % 2);

  for (let index = 0; index < lowerText.length; index++) {
    const letter = lowerText[index];
    let validLetter = letter;
    if (letter.match(/\w/)) {
      if (toUpper) validLetter = letter.toUpperCase();
      toUpper = !toUpper;
    }
    newText += validLetter;
  }

  return newText;
};

export default mockText;
