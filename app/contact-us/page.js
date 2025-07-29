export default function contactUs() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Get in Touch</h1>
                    <p className="text-gray-600 text-sm">We’re here to answer all your questions and guide your journey with transparency and care.</p>
                </div>

                {/* Services/Resources Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">What We Offer</h2>
                        <ul className="text-gray-700 list-disc pl-5 space-y-2 text-sm">
                            <li>Mock Interviews with Feedback</li>
                            <li>Personalized Resume Guidance</li>
                            <li>Industry-Specific Preparation Resources</li>
                            <li>Career Counseling & Role Matching</li>
                            <li>Dedicated Support Team</li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Why W{`e'r`}e Different</h2>
                        <p className="text-sm text-gray-700 mb-2">
                            Our services are built on honesty, clarity, and practical value. We explain everything — no hidden processes, no vague answers.
                        </p>
                        <p className="text-sm text-gray-700">
                            Whether yo{`u'r`}e a fresher or a career switcher, we make sure every step is crystal clear and tailored to your path.
                        </p>
                    </div>
                </div>

                {/* Contact Form and Info */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <form className="bg-gray-100 p-8 rounded-xl shadow-md space-y-5">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                required
                                rows="5"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-xl shadow-md space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                        <p className="text-gray-600 text-sm">
                            Have questions or need help? Reach out to us through the details below.
                        </p>
                        <div className="text-sm text-gray-700 space-y-2">
                            <p><strong>Email:</strong> support@jobhubworld.com</p>
                            <p><strong>Phone:</strong> +91 98765 43210</p>
                            <p><strong>Location:</strong> Plot 27, Sector 42, Chandigarh, India</p>
                            <p><strong>Working Hours:</strong> Mon – Fri, 9:00 AM – 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}