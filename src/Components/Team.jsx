import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Team() {
    return (
        <section
            id="Team"
            className="bg-Dark-Blue-main px-6 md:px-0 py-10 md:py-20"
        >
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                {/* img */}
                <div className="lg:w-1/2">
                    <img
                        src="images/illustration-stay-productive.png"
                        alt="Illustration Stay Productive"
                        className="w-full"
                        loading="lazy"
                    />
                </div>
                {/* content */}
                <div className="lg:w-1/2 md:pl-30 flex flex-col items-start space-y-6 py-4 text-left">
                    <h2 className="md:w-2/3 text-3xl md:text-5xl text-white font-semibold md:leading-15">
                        Stay productive, wherever you are
                    </h2>
                    <p className="text-gray-200 md:text-xl">
                        Never let location be an issue when accessing your
                        files. Fylo has you covered for all of your file storage
                        needs.
                    </p>
                    <p className="text-gray-200 md:text-xl">
                        Securely share files and folders with friends, family
                        and colleagues for live collaboration. No email
                        attachments required.
                    </p>
                    <a
                        href="#"
                        className="w-fit text-xl md:text-2xl text-Cyan border-b-2 border-b-Cyan pb-2"
                    >
                        See how Fylo works
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className="pl-4"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
