export function Features() {
    return (
        <section
            id="Features"
            className="bg-Dark-Blue-main px-6 md:px-0 py-10 md:py-20 min-h-screen"
        >
            <div className="container mx-auto">
                <div className="text-white text-center grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-y-30 justify-items-center place-items-baseline">
                    {/* Featuer 1 */}
                    <div className="lg:w-2/3 flex flex-col gap-4 justify-center items-center">
                        <img
                            src="images/icon-access-anywhere.svg"
                            alt="Access Anywhere"
                            className="w-28 md:w-32"
                            loading="lazy"
                        />
                        <h2 className="text-2xl md:text-3xl font-medium ">
                            Access your files, anywhere
                        </h2>
                        <p className="md:text-xl">
                            The ability to use a smartphone, tablet, or computer
                            to access your account means your files follow you
                            everywhere.
                        </p>
                    </div>

                    {/* Featuer 2 */}
                    <div className="lg:w-2/3 flex flex-col gap-4 justify-center items-center">
                        <img
                            src="images/icon-security.svg"
                            alt="Security"
                            className="w-24 md:w-30"
                            loading="lazy"
                        />
                        <h2 className="text-2xl md:text-3xl font-medium ">
                            Security you can trust
                        </h2>
                        <p className="md:text-xl">
                            2-factor authentication and user-controlled
                            encryption are just a couple of the security
                            features we allow to help secure your files
                        </p>
                    </div>

                    {/* Featuer 3 */}
                    <div className="lg:w-2/3 flex flex-col gap-4 justify-center items-center">
                        <img
                            src="images/icon-collaboration.svg"
                            alt="Collaboration"
                            className="w-28 md:w-32"
                            loading="lazy"
                        />
                        <h2 className="text-2xl md:text-3xl font-medium ">
                            Real-time collaboration
                        </h2>
                        <p className="md:text-xl">
                            Securely share files and folders with friends,
                            family and colleagues for live collaboration. No
                            email attachments required.
                        </p>
                    </div>

                    {/* Featuer 4 */}
                    <div className="lg:w-2/3 flex flex-col gap-4 justify-center items-center">
                        <img
                            src="images/icon-any-file.svg"
                            alt="File"
                            className="w-28 md:w-32"
                            loading="lazy"
                        />
                        <h2 className="text-2xl md:text-3xl font-medium ">
                            Store any type of file
                        </h2>
                        <p className="md:text-xl">
                            Whether you're sharing holidays photos or work
                            documents, Fylo has you covered allowing for all
                            file types to be securely stored and shared.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
