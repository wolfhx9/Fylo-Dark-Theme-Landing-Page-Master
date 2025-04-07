import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

export function Footer() {
    return (
        <footer className="bg-Dark-Blue-footer text-white px-6 md:px-0 py-10 md:py-20">
            <div className="container mx-auto md:px-6">
                {/* Logo */}
                <a href="#Hero">
                    <img
                        src="/images/logo.svg"
                        alt="logo"
                        loading="lazy"
                        className="w-40 md:w-52"
                    />
                </a>
                {/* Content */}
                <div className="py-10 flex flex-col lg:flex-row gap-10 md:gap-20">
                    {/* col 1-2 */}
                    <div className="lg:w-1/2 flex flex-col md:flex-row justify-between gap-y-10">
                        <div className="md:w-1/2 flex space-x-4 items-start">
                            <img
                                src="/images/icon-location.svg"
                                alt="location"
                                className="w-24"
                            />
                            <p className="text-gray-300 text-xl">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className="text-xl text-gray-300 flex flex-col space-y-10">
                            <p className="flex items-center gap-4">
                                <img
                                    src="/images/icon-phone.svg"
                                    alt=""
                                />
                                +1-543-123-4567
                            </p>
                            <p className="flex items-center gap-4">
                                <img
                                    src="/images/icon-email.svg"
                                    alt="email"
                                />
                                example@fylo.com
                            </p>
                        </div>
                    </div>

                    {/* col 3-4 */}
                    <div className="lg:w-1/2 flex flex-col md:flex-row gap-10 md:gap-20">
                        <div className="md:w-1/2 flex space-x-4">
                            <div className="text-xl text-gray-300 grid grid-cols-2 gap-20">
                                <ul className="space-y-4">
                                    <li className="duration-300 hover:text-Blue">
                                        <a href="">About Us</a>
                                    </li>
                                    <li className="duration-300 hover:text-Blue">
                                        <a href="">Jobs</a>
                                    </li>
                                    <li className="duration-300 hover:text-Blue">
                                        <a href="">Press</a>
                                    </li>
                                    <li className="duration-300 hover:text-Blue">
                                        <a href="">Blog</a>
                                    </li>
                                </ul>

                                <ul className="space-y-4">
                                    <li className="duration-300 hover:text-Blue">
                                        <a href="">Contact Us</a>
                                    </li>
                                    <li className="duration-300 hover:text-Blue">
                                        <a href="">Terms</a>
                                    </li>
                                    <li className="duration-300 hover:text-Blue">
                                        <a href="">Privacy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center text-gray-300  items-start space-x-5">
                            <a
                                href="https://www.facebook.com/profile.php?id=100053743200085"
                                target="_blank"
                                className="border-2 rounded-full p-4 duration-300 hover:border-Blue hover:text-Blue"
                                aria-label="facebook link"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="xl" />
                            </a>
                            <a
                                href="https://www.instagram.com/mr_wolfm?igsh=YzljYTk1ODg3Zg=="
                                target="_blank"
                                className="border-2 rounded-full p-4 duration-300 hover:border-Blue hover:text-Blue"
                                aria-label="instagram link"
                            >
                                <FontAwesomeIcon icon={faInstagram} size="xl" />
                            </a>
                            <a
                                href="https://github.com/wolfhx9"
                                target="_blank"
                                className="border-2 rounded-full p-4 duration-300 hover:border-Blue hover:text-Blue"
                                aria-label="github link"
                            >
                                <FontAwesomeIcon icon={faGithub} size="xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
