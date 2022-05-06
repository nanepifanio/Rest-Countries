import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CountriesType } from "../types/types";
import { api } from "../api/api";

export const useAboutCountrie = () => {
  const [aboutCountrie, setAboutCountrie] = useState<CountriesType>();
  const countrieName = useParams();

  useEffect(() => {
    getCountrie();
  }, []);

  useEffect(() => {
    getCountrie();
  }, [countrieName]);

  const getCountrie = async (): Promise<void> => {
    const countrie: CountriesType[] = await api.searchCountry(
      countrieName.countrie
    );
    setAboutCountrie(countrie[0]);
  };

  return aboutCountrie;
};
