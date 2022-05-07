export type ThemeState = {
  status: "light" | "dark";
};

export const themeInitialState: ThemeState = { status: "light" };

export type ThemeActions = {
  type: string;
  payload: {
    status: "light" | "dark";
  };
};

export const useTheme = (state: ThemeState, action: ThemeActions) => {
  return action.type === "CHANGE_THEME"
    ? { ...state, status: action.payload.status }
    : state;
};
