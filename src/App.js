import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="px-7 bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </main>
  );
}

export default App;
