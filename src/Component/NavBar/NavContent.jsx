import { WiMoonWaningCrescent3 } from "react-icons/wi";
import { BsSun } from "react-icons/bs";

export function DarkModeSwitch({ darkMode, handleSwitch }) {
    return (
        <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={handleSwitch}
                    className="sr-only"
                />
                <div className="block h-8 w-14 rounded-full bg-[#E5E7EB] dark:bg-gray-700"></div>
                <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition transform duration-300 ${
                        darkMode ? "translate-x-6" : ""
                    }`}
                >
                    {darkMode ? (
                        <WiMoonWaningCrescent3 className="size-5 text-blue-800" />
                    ) : (
                        <BsSun className="size-4 text-yellow-500" />
                    )}
                </div>
            </div>
        </label>
    );
}
