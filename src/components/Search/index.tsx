//Icons
import lupa_light from "../../assets/lupa-light.svg";
import lupa_dark from "../../assets/lupa-dark.svg";
//Style
import * as Style from "./SearcStyles";
import React, { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Search = () => {
  const [countrieName, setCountrieName] = useState<string>("");
  const [search, setSearch] = useSearchParams();

  const handleName = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setCountrieName(target.value);

  const handleIconClick = () => {
    if (countrieName) {
      if (search.has("region")) search.delete("region");
      search.set("search", countrieName);
      setSearch(search);
      setCountrieName("");
    }
  };

  const handleKeyUp = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") handleIconClick();
  };

  return (
    <Style.SearchArea>
      <Style.SearchIcon src={lupa_light} onClick={handleIconClick} />
      <Style.SearchInput
        placeholder="Search for a country..."
        onChange={handleName}
        onKeyUp={handleKeyUp}
        value={countrieName}
      />
    </Style.SearchArea>
  );
};
