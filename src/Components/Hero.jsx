export function Hero() {
    return (
        <section id="Hero" className="min-h-screen text-center px-5 md:px-0">
            <div className="container mx-auto py-10 flex justify-center">
                {/* img */}
                <img
                    src="images/illustration-intro.png"
                    alt="illustration intro" loading="eager" className="w-fit"
                />
            </div>
            {/* content */}
            <div className="md:w-2/3 xl:w-1/3 mx-auto flex flex-col justify-center space-y-4">
                <h1 className="text-3xl md:text-4xl text-white font-medium md:leading-13">
                    All your files in one secure location, accessible anywhere.
                </h1>
                <p className="text-gray-200 md:text-lg">
                    Fylo stores all your most important files in one secure
                    location. Access them wherever you need, share and
                    collaborate with friends family, and co-workers.
                </p>
                <a href="#">
                    <button className="bg-gradient-to-r from-Cyan to-Blue text-white font-semibold md:text-xl py-2 px-10 md:py-4 md:px-14 rounded-full cursor-pointer">
                        Get Started
                    </button>
                </a>
            </div>
        </section>
    );
}
