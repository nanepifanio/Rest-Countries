import { createContext, useReducer } from "react";
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

const mainReducer = async (
  state: InitialStateType,
  action: GeneralReducerAction
) => ({
  country: countriesReducer(state.country, action),
});

type ContextProviderProp = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProp) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
