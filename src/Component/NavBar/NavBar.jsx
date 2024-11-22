import { Link } from "react-router-dom";
import { useDarkMode } from "../DarkMode/DarkMode";
import { DarkModeSwitch } from "./NavContent";

export function NavBar() {
  const { darkMode, setDarkMode } = useDarkMode();

  const handleSwitch = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="hidden md:block bg-transparent border-b border-gray-200 dark:border-gray-800 text-black dark:text-white">
      <nav className="flex justify-between items-center transition-[padding] duration-300 py-6 mx-48">
        <div className="flex items-center gap-x-8 cursor-pointer">
          <Link to="/AnimeList/" className="text-[1.5rem] font-bold hover:text-blue-800">
            AnimeList
          </Link>
        </div>

        <div className="flex items-center gap-x-4">
          <DarkModeSwitch darkMode={darkMode} handleSwitch={handleSwitch} />
        </div>
      </nav>
    </div>
  );
}
