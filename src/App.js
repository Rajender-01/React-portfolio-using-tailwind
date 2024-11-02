import { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="px-7 bg-white dark:bg-gray-900 w-full max-w-[1440px] mx-auto">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Intro />
      </div>
    </main>
  );
}

export default App;
