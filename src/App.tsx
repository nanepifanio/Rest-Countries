import { useEffect } from "react";
import { Header } from "./components/Header";
import { useThemeContext } from "./hooks/useThemeContext";
import { CountriesRoutes } from "./routes/CountriesRoutes";

const App = () => {
  const { state, dispatch } = useThemeContext();

  useEffect(() => {
    getTheme();
  }, []);

  const getTheme = () =>
    dispatch({
      type: "CHANGE_THEME",
      payload: { status: Object.values(localStorage)[0] },
    });

  return (
    <div
      style={{
        backgroundColor: `${
          state.theme.status === "light" ? "#fafafa" : "hsl(207, 26%, 17%)"
        }`,
        height: "100%",
      }}
    >
      <Header />
      <CountriesRoutes />
    </div>
  );
};

export default App;
