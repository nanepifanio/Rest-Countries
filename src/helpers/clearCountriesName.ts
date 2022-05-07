export const clearCountriesName = (name: string): string =>
  name.match(/(\([a-z ']+\)|,[a-z ']+)/gi)
    ? name.replace(/(\([a-z ']+\)|,[a-z ']+)/gi, "")
    : name;
