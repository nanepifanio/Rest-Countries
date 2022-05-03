export const formatPopulationNumber = (popN: number): string => {
  return popN.toLocaleString("pt-BR", { notation: "standard" });
};
