import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function VoirPlus({href, display, text="Voir plus"}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(href);
    };

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={handleClick}
        className={`flex text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-black dark:text-white hover:text-blue-500 ${display} items-center gap-x-2 mt-2 md:mt-3 lg:mt-4 transition-colors duration-200`}
      >
          <span>{text}</span>
          <FaArrowRight className="mt-[2px]" />
      </button>
    </div>
  )
}
