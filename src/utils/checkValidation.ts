export function checkValidation(value: string, checkFirstLetter = false): boolean {
  let isValid = false;

  if (value) isValid = true;

  if (isValid && checkFirstLetter) {
    const firstLetter = value[0];

    if (firstLetter !== firstLetter.toUpperCase()) {
      isValid = false;
    }
  }

  return isValid;
}
