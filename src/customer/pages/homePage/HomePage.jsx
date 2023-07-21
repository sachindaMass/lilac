import React from 'react';
import HomeCarousel from '../../components/navigation/homeCarousel/HomeCarousel';
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../data/Men/men_kurta';

function HomePage() {
  return (
    <div>
      <HomeCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurtha"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurtha"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurtha"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurtha"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurtha"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurtha"} />
      </div>
    </div>
  );
}

export default HomePage;
