function formatString(input: string, toUpper?: boolean): string {
  if(typeof toUpper === "undefined" || toUpper) {
    return input.toUpperCase();
  }

  return input.toLowerCase();
}


