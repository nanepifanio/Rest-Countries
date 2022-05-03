import { createContext } from "react";
import {
  initialCountryState,
  countriesReducer,
  CountriesType,
} from "./reducers/countriesReducer";
import { GeneralReducerAction } from "../types/types";

type InitialStateType = {
  country: CountriesType[];
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState: InitialStateType = {
  country: initialCountryState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateType, action: countryActions) => ({
  country: countriesReducer(state),
});
