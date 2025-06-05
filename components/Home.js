import Image from "next/image";

export default function HomePage() {
    return (
        <>
            <article className="w-full flex justify-center relative bg-black text-white ">
                <div className="w-[85%] flex justify-between pt-40 ">
                    <div className="max-w-2xl">
                        {/* Main heading */}
                        <h1 className="text-7xl font-semibold leading-tight">
                            Find Your Career With <span className="text-green-800">JOBHUB</span>
                            <span className="text-xl">.world</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-2xl mt-1 text-gray-600">
                            Your dream job is just a click away
                        </p>

                        {/* CTA section */}
                        <div className="mt-5 flex items-center gap-5">
                            {/* Employer info */}
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <i className="fa-solid fa-circle-info text-xs"></i>
                                <span>For Employer</span>
                            </div>

                            {/* Hire button */}
                            <button
                                type="button"
                                className="text-sm border-2 border-green-600 text-green-600 px-3 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-200"
                            >
                                Hire Now
                            </button>
                        </div>
                        <div className="mt-4 bg-white w-[75%] rounded-lg shadow-md">
                            <div className="p-2 flex gap-3 items-center">
                                {/* Job Title Input */}
                                <input
                                    type="text"
                                    placeholder="Job Title"
                                    className="border border-gray-300 p-2 rounded-md w-[30%] placeholder:text-black text-center focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                />

                                {/* Experience Dropdown */}
                                <select
                                    className="border border-gray-300 p-2 rounded-md text-black text-center w-[35%] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                >
                                    <option className="text-gray-400">Experience</option>
                                    <option>Entry Level</option>
                                    <option>Mid Level</option>
                                    <option>Senior Level</option>
                                </select>

                                {/* City Dropdown */}
                                <select
                                    className="border border-gray-300 p-2 rounded-md text-black text-center  w-[20%] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                >
                                    <option className="text-gray-400" disabled>City</option>
                                    <option>New York</option>
                                    <option>San Francisco</option>
                                    <option>Chicago</option>
                                </select>

                                {/* Search Button */}
                                <button
                                    type="submit"
                                    className="bg-green-800 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium flex-1 max-w-[20%]"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className=" h-auto block overflow-hidden">
                            <Image
                                src="/images/HeaderImage01_1.png"
                                alt="find your career with jobhub world"
                                width={800}
                                height={800}
                                priority
                                className="image_animation"
                            />
                        </div>
                        <div className="absolute -bottom-[0] left-0 right-0 h-[20%] pointer-events-none animate-pulse"
                            style={{
                                background: "linear-gradient(to top, rgba(0, 120, 0, 0.9), transparent)",
                            }} />
                    </div>
                </div>
            </article>
            <section className="w-full flex justify-center py-20 ">
                <div className="w-[85%] flex justify-center items-center flex-col gap-10">
                    <div>
                        <p className="text-4xl font-semibold">HOW <span className="text-green-800 font-bold">JOBHUB</span> WORKS FOR YOU</p>
                    </div>
                    <div className="flex gap-10">
                        <div className="px-45 py-30 rounded-sm bg-green-50 shadow-sm">Content</div>
                        <div className="px-45 py-30 rounded-sm bg-green-50 shadow-sm">Content</div>
                        <div className="px-45 py-30 rounded-sm bg-green-50 shadow-sm">Content</div>
                    </div>
                </div>
            </section>
            <section className="w-full flex justify-center py-20 bg-black text-white">
                <div className="w-[85%] flex justify-center items-center flex-col gap-3">
                    <div>
                        <p className="text-4xl font-semibold uppercase">Start your Professional journey with</p>
                    </div>
                    <Image src='/images/JobhubFooterlogo_1.png' alt="Start your Professional journey with JOBHUB" width={150} height={150} />
                    <div className="mt-7">
                        <p className="text-center">JobHub is a smart and easy-to-use job search platform designed to help you find the right job, faster. Whether you're a fresher or an experienced professional, JobHub connects you with verified job opportunities across different industries and locations in India. We make job hunting simple with daily job updates, one-click applications, and filters based on your skills, experience, and preferred location. Our goal is to make your career journey smoother by bringing the best job openings to one place — no stress, no confusion, just real opportunities. Start applying today and move one step closer to your dream job with JobHub.</p>
                    </div>
                    <a href="" className="px-5 py-2 mt-6 rounded-sm bg-green-800">Explore Jobs</a>
                </div>
            </section>
            <section className="w-full flex justify-center py-20">
                <div className="w-[85%] flex justify-between ">
                    <div className="w-[40%]">
                        <p className="text-4xl font-semibold uppercase">What we offer to Employers</p>
                        <div className="mt-4">
                            <p className="font-bold text-xl">✅ Excellent Employer Dashboard</p>
                            <p className="text-lg">Manage job listings, track applications, and shortlist candidates.</p>
                        </div>
                        <div className="mt-6">
                            <p className="font-bold text-xl">✅ Find the Right Talent</p>
                            <p className="text-lg">Access a large pool of verified candidates based on skills, experience, location, and job role.
                            </p>
                        </div>
                        <div className="mt-6">
                            <p className="font-bold text-xl">✅ Post Jobs with Base Salary Details</p>
                            <p className="text-lg">Clearly mention salary expectations to attract serious candidates and make hiring transparent.</p>
                        </div>
                        <div className="mt-6">
                            <p className="font-bold text-xl">✅  Smart Filters & Search</p>
                            <p className="text-lg">Easily search and filter candidates by qualifications, skills and availabilty.</p>
                        </div>
                    </div>
                    <div>
                        <Image src='/images/offer.png' alt="what we offer to employer a dashboard" width={700} height={700} className="rounded-xl" />
                    </div>
                </div>
            </section>
            <section className="w-full flex justify-center bg-[#384639] p-5">
                <div className="w-[85%] flex justify-between text-4xl text-white">
                    <span>Live Jobs: 1,200</span>
                    <span>Compare Salaries</span>
                    <span>Process: 550</span>
                </div>
            </section>
            <section className="w-full flex justify-center py-20">
                <div className="flex justify-center items-center flex-col gap-25">
                    <p className="text-4xl font-semibold ">POPULAR <span className="text-green-800 font-bold">JOBS</span></p>
                    <div className="w-full grid sm:grid-cols-3   xl:grid-cols-5 grid-cols-2 gap-10">
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>
                        <div className="sm:p-30 p-20  bg-red-300 rounded-2xl"></div>


                    </div>
                </div>
            </section>
        </>
    )
}