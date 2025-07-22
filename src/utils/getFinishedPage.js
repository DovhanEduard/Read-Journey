export function getFinishedPage(progressReadingArray) {
  // eslint-disable-next-line
  for (let i = progressReadingArray.length - 1; i > 0; i--) {
    const element = progressReadingArray[i];
    console.log(i);

    if (Object.hasOwn(element, 'finishPage')) {
      return element.finishPage;
    }
  }
}
