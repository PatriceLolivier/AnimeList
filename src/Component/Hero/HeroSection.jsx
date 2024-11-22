import { HeroContent } from "./HeroContent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHero } from "../../features/anime/animeSlice";
import { SliderButton, IndicatorButton } from "./HeroIndicator";

export default function HeroSection() {
    const { heroList, loading, error } = useSelector((state) => state.anime);
    const [currentIndex, setCurrentIndex] = useState(0);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHero());
  }, [dispatch]);

  const handlePrevIndex = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? heroList?.data?.length - 1 : prev - 1
    );
  };

  const handleNextIndex = () => {
    setCurrentIndex((prev) =>
      prev === heroList?.data?.length - 1 ? 0 : prev + 1
    );
  };

  const handleSlide = (index) => {
    setCurrentIndex(index);
  }

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;
  if (!heroList) return <div>Aucune donnée disponible</div>;

  return (
    <div className="relative h-[75vh] w-full overflow-hidden">
      <SliderButton prevIndex={handlePrevIndex} nextIndex={handleNextIndex} />
      <IndicatorButton
        heroList={heroList}
        currentIndex={currentIndex}
        handleSlide={handleSlide}
      />
      <HeroContent heroList={heroList} currentIndex={currentIndex} />
    </div>
  );
}
