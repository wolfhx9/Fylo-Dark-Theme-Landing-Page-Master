export function SignIn() {
    return (
        <section
            id="SignIn"
            className="bg-gradient-to-b from-50% to-50% from-Dark-Blue-main to-Dark-Blue-footer text-white text-center px-6 md:px-0 py-10 md:py-20"
        >
            <div className="bg-Dark-Blue-intro container mx-auto lg:w-1/2 p-6 md:p-20 rounded-xl shadow-lg shadow-black">
                <h2 className="text-2xl md:text-4xl text-white font-semibold pb-4">
                    Get early access today
                </h2>
                <p className="md:text-xl text-gray-200 capitalize">
                    It only takes a minute to sign up and our free starter tier
                    is extremely generous. If you have any questions, our
                    support team would be happy to help you.
                </p>
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between pt-10">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email@example.com"
                        className="bg-white text-gray-900 md:text-xl md:w-2/3 py-3 px-8 rounded-3xl focus:outline-0"
                    />
                    <button className="bg-gradient-to-r from-Cyan to-Blue md:text-xl text-white font-semibold px-6 py-3 rounded-full cursor-pointer">
                        Get Started For Free
                    </button>
                </div>
            </div>
        </section>
    );
}
