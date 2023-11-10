'use client'
import { usePathname } from 'next/navigation';

export default function Header() {
    const routerPathname = usePathname();

    const isLinkActive = (pathname) => {
        return routerPathname === pathname ? 'text-yellow-500' : 'text-gray-700';
    };

    return (
        <header className='flex flex-row justify-center bottom-1 border border-gray-700 rounded-b-lg bg-slate-400 sticky top-0 relative z-30'>
            <a href="/" className="flex items-center">
                <img src="https://pbs.twimg.com/profile_images/1588857535842639873/VwzhRVuZ_400x400.jpg" className="mr-3 h-6 sm:h-9 rounded-3xl" alt="Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Spic-Macay BIT Mesra Chapter</span>
            </a>
            <nav className="bg-slate-400 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify between items-center mx-auto max-w-screen-xl">
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="/" className={`block py-2 pr-4 pl-3 ${isLinkActive('/')}`}>Home</a>
                            </li>
                            <li>
                                <a href="/about" className={`block py-2 pr-4 pl-3 ${isLinkActive('/about')}`}>About</a>
                            </li>
                            <li>
                                <a href="/events" className={`block py-2 pr-4 pl-3 ${isLinkActive('/events')}`}>Events</a>
                            </li>
                            <li>
                                <a href="/team" className={`block py-2 pr-4 pl-3 ${isLinkActive('/team')}`}>Team</a>
                            </li>
                            <li>
                                <a href="/contact" className={`block py-2 pr-4 pl-3 ${isLinkActive('/contact')}`}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
