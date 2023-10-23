import CarouselCustomNavigation from "./Carousel";
import Typewriter from "./Typewriter";
import Wiki from "./Wiki";

export default function Body() {
  return (
    <div className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 mr-4 ml-4 mt-6 mb-4 h-full w-full relative">
      <div className="absolute w-full z-10">
        <h1 className="mr-4 ml-4 mt-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-amber-600 from-yellow-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <Typewriter text={'Society for Promotion of Indian Classical Music and Culture Amongst Youth'} delay={20} />
        </h1>
      </div>
      <div className="border-gray-200 px-4 lg:px-6 py-2.5 h-80 w-full relative z-0">
        <CarouselCustomNavigation />
      </div>
      <Wiki />
    </div>
  );
}
