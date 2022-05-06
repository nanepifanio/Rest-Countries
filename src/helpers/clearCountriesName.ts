export const clearCountriesName = (name: string): string =>
  name.match(/(\(\w+\s?\S+?\s\S+)/gi)
    ? name.replace(/(\(\w+\s?\S+?\s\S+)/gi, "")
    : name;
