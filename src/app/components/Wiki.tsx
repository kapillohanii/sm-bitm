
export default function Wiki(){
    return (

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <img src="https://pbs.twimg.com/profile_images/1588857535842639873/VwzhRVuZ_400x400.jpg" alt="Wikipedia Logo" className="w-full h-48 object-cover opacity-60 blur-1" />
            <div className="absolute bottom-0 left-0 bg-black text-white p-2 text-sm">
              <a href="https://en.wikipedia.org/wiki/SPIC_MACAY" className="hover:underline">Read more</a>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
            SPIC MACAY
            </div>
            <p className="text-gray-700 text-base">
              The Society for the Promotion of Indian Classical Music And Culture Amongst Youth (SPIC MACAY) is a voluntary youth movement which promotes intangible aspects of Indian cultural heritage by promoting Indian classical music, classical dance, folk music, yoga, meditation, crafts and other aspects of Indian culture; it is a movement with chapters in over 300 towns all over the world.[1] SPIC MACAY was established by Dr. Kiran Seth in 1977 at IIT Delhi.[2][3][4]
            </p>
          </div>
        </div>);
};

