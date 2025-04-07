import { useState, useEffect } from "react";

export function Header() {
    const [headerClass, setHeaderClass] = useState("bg-transparent");

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 5
                ? setHeaderClass("backdrop-blur-2xl shadow-lg")
                : setHeaderClass("bg-transparent");
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed left-0 ring-0 w-full py-4 z-50 ${headerClass}`}
        >
            <div className="px-2 container mx-auto flex items-center justify-between">
                <img
                    src="images/logo.svg"
                    alt="Logo"
                    loading="eager"
                    className="w-30 md:w-40"
                />
                <ul className="flex space-x-5 md:space-x-10 text-gray-300 font-medium text-sm md:text-lg">
                    <li className="duration-300 hover:text-white">
                        <a href="#Features">Features</a>
                    </li>
                    <li className="duration-300 hover:text-white">
                        <a href="#Team">Team</a>
                    </li>
                    <li className="duration-300 hover:text-white">
                        <a href="#SignIn">Sign In</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
