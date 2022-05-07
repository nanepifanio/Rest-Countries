import { createContext, useReducer } from "react";
import {
  ThemeActions,
  ThemeState,
  useTheme,
  themeInitialState,
} from "./reducers/useTheme";

type InitialStateType = {
  theme: ThemeState;
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState: InitialStateType = {
  theme: themeInitialState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateType, action: ThemeActions) => ({
  theme: useTheme(state.theme, action),
});

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
