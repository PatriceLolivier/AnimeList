import { useNavigate } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-700 flex justify-center">
      <div className="pt-8 md:pt-8 container">
        <div className="w-full flex flex-col md:flex-row justify-between gap-y-4 pb-8">
          <AboutMe />
          <RedirectLink />
        </div>
      </div>
    </footer>
  );
}

function AboutMe() {
  return (
    <div className="w-full md:w-[300px] lg:w-[400px] border-2 border-black dark:border-white rounded-lg p-4">
      <h2 className="text-black dark:text-white text-[1.5rem] font-bold">
        AnimeHelper
      </h2>
      <p className="text-neutral-500 dark:text-neutral-400 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
        Ce site est un projet personnel qui a pour but de permettre aux
        utilisateurs de trouver des informations sur les animes et films
        et personnages.
      </p>
    </div>
  );
}

function RedirectLink() {
  const links = [
    { text: "Top Anime", url: "/anime/topanime" },
    { text: "Prochaine saison", url: "/anime/nextsaison" },
    { text: "Recommandations", url: "/anime/recommendation" },
    { text: "Top films", url: "/anime/topfilms" },
    { text: "Les plus populaires", url: "/anime/popular" },
  ];

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-black dark:text-white font-bold text-lg md:text-[0.8rem] lg:text-[0.9rem] text-center">
        Liens vers :
      </h2>
      {links.map((link) => (
        <FooterLink key={link.text} text={link.text} href={link.url}/>
      ))}
    </div>
  );
}

function FooterLink({ text, href }) {
  const navigate = useNavigate();

  const handleClick = (href) => {
    navigate(href);
  };

  return (
    <button
      onClick={() => handleClick(href)}
      className="text-black dark:text-white hover:underline hover:text-blue-500 dark:hover:text-blue-400 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]"
    >
      {text}
    </button>
  );
}
