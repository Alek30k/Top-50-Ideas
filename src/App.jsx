import { useState } from "react";
import HomeScreen from "./Screens/Home/HomeScreen";
import { ThemeContext } from "./context/ThemeContext";
import { createBrowserRouter } from "react-router-dom";
import AddNewScreen from "./Screens/newIdea/AddNewScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/new",
    element: <AddNewScreen />,
  },
]);
function App() {
  const [theme, setTheme] = useState("winter");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className="flex flex-col items-center p-4 md:p-10"
        data-theme={theme}
      >
        <div className="max-w-2xl w-full items-center ">
          <HomeScreen />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
