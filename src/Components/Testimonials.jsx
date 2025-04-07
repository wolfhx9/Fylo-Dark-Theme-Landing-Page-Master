export function Testimonials() {
    return (
        <section className="bg-Dark-Blue-main px-10 md:px-0 py-10 md:py-20">
            <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                <img
                    src="images/bg-quotes.png"
                    alt="Quotes"
                    loading="lazy"
                    className="absolute -top-9 left-4 md:-left-4"
                />
                {/* Testimonial 1 */}
                <div className="z-10 bg-Dark-Blue-testimonials text-white flex flex-col p-6 md:px-10 md:py-14 rounded-xl">
                    {/* Comant */}
                    <p className="md:text-xl text-gray-200 font-medium">
                        Fylo has improved our team productivity by an order of
                        magnitude. Since making the switch our team has become a
                        well-oiled collaboration machine.
                    </p>
                    {/* profile */}
                    <div className="pt-4 flex items-center space-x-4">
                        <img
                            src="images/profile-1.jpg"
                            alt="Profile 1"
                            loading="lazy"
                            className="w-12 md:w-16 rounded-full"
                        />
                        <p>
                            <strong> Satish Patel</strong> <br />
                            Founder & CEO, Huddle
                        </p>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-Dark-Blue-testimonials text-white flex flex-col p-6 md:px-10 md:py-14 rounded-xl">
                    {/* Comant */}
                    <p className="md:text-xl text-gray-200 font-medium">
                        Fylo has improved our team productivity by an order of
                        magnitude. Since making the switch our team has become a
                        well-oiled collaboration machine.
                    </p>
                    {/* profile */}
                    <div className="pt-4 flex items-center space-x-4">
                        <img
                            src="images/profile-2.jpg"
                            alt="Profile 2"
                            loading="lazy"
                            className="w-12 md:w-16 rounded-full"
                        />
                        <p>
                            <strong>Bruce McKenzie</strong> <br />
                            Founder & CEO, Huddle
                        </p>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-Dark-Blue-testimonials text-white flex flex-col p-6 md:px-10 md:py-14 rounded-xl">
                    {/* Comant */}
                    <p className="md:text-xl text-gray-200 font-medium">
                        Fylo has improved our team productivity by an order of
                        magnitude. Since making the switch our team has become a
                        well-oiled collaboration machine.
                    </p>
                    {/* profile */}
                    <div className="pt-4 flex items-center space-x-4">
                        <img
                            src="images/profile-3.jpg"
                            alt="Profile 3"
                            loading="lazy"
                            className="w-12 md:w-16 rounded-full"
                        />
                        <p>
                            <strong>Iva Boyd</strong> <br />
                            Founder & CEO, Huddle
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
