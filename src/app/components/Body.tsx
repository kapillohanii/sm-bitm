import CarouselCustomNavigation from "./Carousel";
import Typewriter from "./Typewriter";
import Wiki from "./Wiki";
import Gallery from './gallery/Gallery'

export default function Body() {
  return (
    <div className="bg-transparent border-gray-200 lg:px-6 py-2.5 mb-4 h-full w-full relative overflow-hidden">
      <div className="absolute w-full z-10">
        <h1 className="mr-4 ml-4 mt-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-amber-600 from-yellow-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:scale-105 border-red-600 rounded-lg hover:border hover:bg-red-400 transition-all duration-100 hover:bg-white">
          <Typewriter text={'Society for Promotion of Indian Classical Music and Culture Amongst Youth'} delay={20} />
        </h1>
      </div>
      <div className="border-gray-200 px-4 lg:px-6 py-2.5 h-80 w-full relative z-0">
        <CarouselCustomNavigation />
      </div>
      <Gallery />
      <div className="flex flex-row m-5 bg-transparent">
        <img
          src="https://www.tallengestore.com/cdn/shop/products/WomanPlayingSitarVeena-BPrabha-IndianArtPainting_41d019b8-477b-4961-a3e1-a95e4d3bfbd3.jpg?v=1684987911"
          alt="VEENA"
          className="h-full w-full object-cover opacity-80 m-2 overflow-hidden"

        />
        <Wiki />
        <img
          src="https://www.tallengestore.com/cdn/shop/products/WomanPlayingSitarVeena-BPrabha-IndianArtPainting_41d019b8-477b-4961-a3e1-a95e4d3bfbd3.jpg?v=1684987911"
          alt="VEENA"
          className="h-full w-full object-cover opacity-80 transform -scale-x-100 overflow-hidden"

        />
      </div>
    </div>
  );
}
