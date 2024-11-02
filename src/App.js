import { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Project from "./components/Project";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="px-7 bg-white dark:bg-gray-900 w-full">
        <div className=" max-w-[1440px] mx-auto">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Intro />
          <Services />
          <Project />
        </div>
      </div>
    </main>
  );
}

export default App;
