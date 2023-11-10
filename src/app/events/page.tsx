import CalendarComponent from "./components/Calendar";
import Event from "./components/Event";
import Typewriter from "../components/Typewriter";

export default function Page() {
    return (
        <div className="w-screen h-screen border border-yellow-400 rounded-xl flex flex-row justify-end mt-10 bg-gradient-to-r to-amber-700 from-yellow-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] p-10 opacity-70">
            <h1 className="mr-6 ml-6 mt-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-amber-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                <Typewriter text={'Upcoming Events'} delay={20} />
            </h1>
            <div className="w-screen h-screen flex flex-col">
                <Event />
                <Event />
            </div>
            <CalendarComponent />
        </div>
    );
};