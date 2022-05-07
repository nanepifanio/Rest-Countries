export const clearCountriesName = (name: string): string =>
  name.match(/(\([a-z ']+\))/gi) ? name.replace(/(\([a-z ']+\))/gi, "") : name;
