import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <article className="w-full flex justify-center relative bg-black text-white ">
        <div className="w-[85%] flex justify-between items-end sm:pt-30 lg:pt-40 pt-20 ">
          <div className="w-[50%] max-lg:w-full max-xl:pb-10 pb-20">
            <h1 className="text-[2.6rem] sm:text-5xl md:text-7xl lg:text-5xl xl:text-7xl font-semibold leading-tight">
              Find Your Career With{" "}
              <span className="text-green-800">JOBHUB</span>
              <span className="text-xl">.world</span>
            </h1>

            <p className="sm:text-2xl text-1xl mt-1 text-gray-600">
              Your dream job is just a click away
            </p>

            <div className="mt-5 flex items-center gap-5">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <i className="fa-solid fa-circle-info text-xs"></i>
                <span>For Employer</span>
              </div>

              <button
                type="button"
                className="text-sm border-2 border-green-600 text-green-600 px-3 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-200"
              >
                Hire Now
              </button>
            </div>
            <div className="mt-4 bg-white lg:w-[75%] w-full rounded-lg shadow-md">
              <div className="p-2 flex gap-3 items-center">
                <input
                  type="text"
                  placeholder="Job Title"
                  className="border border-gray-300 p-2 rounded-md sm:w-[30%] w-full placeholder:text-black text-center focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />

                <select className="max-sm:hidden border border-gray-300 p-2 rounded-md text-black text-center w-[35%] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent">
                  <option className="text-gray-400">Experience</option>
                  <option>Entry Level</option>
                  <option>Mid Level</option>
                  <option>Senior Level</option>
                </select>

                <select className="hidden lg:hidden xl:flex sm:flex border border-gray-300 p-2 rounded-md text-black text-center w-[20%] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent">
                  <option className="text-gray-400" disabled>
                    City
                  </option>
                  <option>New York</option>
                  <option>San Francisco</option>
                  <option>Chicago</option>
                </select>

                <button
                  type="submit"
                  className="bg-green-800 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium flex-1 sm:w-[20%] w-full"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="w-[50%] max-lg:hidden flex relative">
            <div className="w-full overflow-hidden flex justify-center items-center">
              <Image
                src="/images/HeaderImage01_1.png"
                alt="find your career with jobhub world"
                width={800}
                height={800}
                priority
                className="image_animation"
              />
            </div>
            <div
              className="absolute -bottom-[0] left-0 right-0 h-[20%] pointer-events-none animate-pulse"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 120, 0, 0.9), transparent)",
              }}
            />
          </div>
        </div>
      </article>
      <section className="w-full flex justify-center py-20 ">
        <div className="w-[85%] text-center">
          <div>
            <p className="text-4xl font-semibold my-5">
              HOW <span className="text-green-800 font-bold">JOBHUB</span> WORKS
              FOR YOU
            </p>
          </div>
          <div className="w-full flex justify-evenly flex-wrap gap-10">
            <div className="sm:p-20 lg:p-25 p-15 rounded-sm bg-green-50 shadow-sm">
              Content
            </div>
            <div className="sm:p-20 lg:p-25 p-15 rounded-sm bg-green-50 shadow-sm">
              Content
            </div>
            <div className="sm:p-20 lg:p-25 p-15 rounded-sm bg-green-50 shadow-sm">
              Content
            </div>
            <div className="sm:p-20 lg:p-25 p-15 rounded-sm bg-green-50 shadow-sm">
              Content
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center py-20 bg-black text-white">
        <div className="w-[85%] flex justify-center items-center flex-col gap-3">
          <div>
            <p className="text-4xl font-semibold uppercase">
              Start your Professional journey with
            </p>
          </div>
          <Image
            src="/images/JobhubFooterlogo_1.png"
            alt="Start your Professional journey with JOBHUB"
            width={150}
            height={150}
          />
          <div className="mt-7">
            <p className="text-center">
              JobHub is a smart and easy-to-use job search platform designed to
              help you find the right job, faster. Whether {`you're`} a fresher
              or an experienced professional, JobHub connects you with verified
              job opportunities across different industries and locations in
              India. We make job hunting simple with daily job updates,
              one-click applications, and filters based on your skills,
              experience, and preferred location. Our goal is to make your
              career journey smoother by bringing the best job openings to one
              place — no stress, no confusion, just real opportunities. Start
              applying today and move one step closer to your dream job with
              JobHub.
            </p>
          </div>
          <a href="" className="px-5 py-2 mt-6 rounded-sm bg-green-800">
            Explore Jobs
          </a>
        </div>
      </section>
      <section className="w-full flex justify-center py-20">
        <div className="w-[85%] flex justify-between ">
          <div className="max-lg:w-full w-[40%]">
            <p className="text-center max-md:text-2xl text-4xl font-semibold uppercase">
              What we offer to Employers
            </p>
            <div className="mt-4">
              <p className="font-bold text-xl">
                ✅ Excellent Employer Dashboard
              </p>
              <p className="text-lg">
                Manage job listings, track applications, and shortlist
                candidates.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-bold text-xl">✅ Find the Right Talent</p>
              <p className="text-lg">
                Access a large pool of verified candidates based on skills,
                experience, location, and job role.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-bold text-xl">
                ✅ Post Jobs with Base Salary Details
              </p>
              <p className="text-lg">
                Clearly mention salary expectations to attract serious
                candidates and make hiring transparent.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-bold text-xl">✅ Smart Filters & Search</p>
              <p className="text-lg">
                Easily search and filter candidates by qualifications, skills
                and availabilty.
              </p>
            </div>
          </div>
          <div className="max-lg:hidden">
            <Image
              src="/images/offer.png"
              alt="what we offer to employer a dashboard"
              width={700}
              height={700}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="max-md:hidden w-full flex justify-center bg-[#384639] p-5">
        <div className="w-[85%] flex justify-between text-4xl text-white">
          <span>Live Jobs: 1,200</span>
          <span>Compare Salaries</span>
          <span>Process: 550</span>
        </div>
      </section>
      <section className="w-full flex justify-center py-20">
        <div className="flex justify-center items-center flex-col gap-25">
          <p className="text-center max-md:text-2xl text-4xl font-semibold ">
            POPULAR <span className="text-green-800 font-bold">JOBS</span>
          </p>
          <div className="w-full grid sm:grid-cols-3 s:  xl:grid-cols-5 grid-cols-2 gap-5">
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
            <div className="sm:p-30 p-20 bg-red-300 rounded-2xl"></div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center bg-black text-white py-20 ">
        <div className="w-[85%] flex justify-center flex-col gap-20">
          <p className="max-md:text-2xl text-4xl font-semibold uppercase text-center">
            Build Your <span className="text-green-800 font-bold">Resume</span>{" "}
            In Two Minutes
          </p>
          <div className="relative w-full">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <div className="carousel-container flex snap-x snap-mandatory overflow-x-auto">
                <div className="flex gap-10 items-center justify-center carousel-inner w-full">
                  <div className="flex-none snap-start">
                    <Image
                      src="/images/Resume.png"
                      alt="Resume 1"
                      width={300}
                      height={100}
                      className="object-cover rounded border-b-15 border-gray-500"
                    />
                  </div>
                  <div className="flex-none snap-start">
                    <Image
                      src="/images/Resume.png"
                      alt="Resume 1"
                      width={300}
                      height={300}
                      className="object-cover rounded border-b-15 border-gray-500"
                    />
                  </div>
                  <div className="flex-none snap-start">
                    <Image
                      src="/images/Resume.png"
                      alt="Resume 1"
                      width={300}
                      height={300}
                      className="object-cover rounded border-b-15 border-gray-500"
                    />
                  </div>
                  <div className="flex-none snap-start">
                    <Image
                      src="/images/Resume.png"
                      alt="Resume 1"
                      width={300}
                      height={300}
                      className="object-cover rounded border-b-15 border-gray-500"
                    />
                  </div>
                  <div className="flex-none snap-start">
                    <Image
                      src="/images/rRsume.png"
                      alt="Resume 1"
                      width={300}
                      height={300}
                      className="object-cover rounded border-b-15 border-gray-500"
                    />
                  </div>
                </div>
              </div>
              <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-900 bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 focus:outline-none transition">
                ❮
              </button>
              <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-900 bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 focus:outline-none transition">
                ❯
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center py-20">
        <div className="w-[85%] flex justify-center items-center flex-col gap-10">
          <p className="max-md:text-2xl text-4xl text-center font-semibold uppercase">
            Why We Choose{" "}
            <span className="text-green-800 font-bold">JOBHUB</span>
          </p>
          <div className="w-full flex justify-between items-center">
            <div className="max-md:w-full">
              <div className="flex items-center gap-1 text-xl font-semibold mb-4 ">
                <i className="fa-solid fa-ban text-3xl text-green-500"></i>
                <p className="border-r-5 border-green-500 rounded-xl p-3">
                  No Hidden Charges
                </p>
              </div>
              <div className="flex items-center gap-1 text-xl font-semibold mb-4">
                <i className="fa-solid fa-circle-check text-3xl text-green-500"></i>
                <p className=" border-r-5  border-green-500 rounded-xl p-3">
                  Verified & Authentic Jobs
                </p>
              </div>

              <div className="flex items-center gap-1 text-xl font-semibold mb-4">
                <i className="fa-solid fa-id-card text-green-500 text-3xl"></i>
                <p className=" border-r-5 border-green-500 rounded-xl p-3">
                  No Need To Create Resume
                </p>
              </div>
              <div className="flex items-center gap-1 text-xl font-semibold mb-4">
                <i className="fa-solid fa-location-dot text-green-500 text-3xl"></i>
                <p className=" border-r-5 border-green-500 rounded-xl p-3">
                  Get the Job in your Locality
                </p>
              </div>
              <div className="flex items-center gap-1 text-xl font-semibold mb-4">
                <i className="fa-solid fa-handshake text-green-500 text-3xl"></i>
                <p className=" border-r-5 border-green-500 rounded-xl p-3">
                  Helping the Unorganized Sector
                </p>
              </div>
              <div className="flex items-center gap-1 text-xl font-semibold mb-4">
                <i className="fa-solid fa-headphones-simple text-green-500 text-3xl"></i>
                <p className="border-r-5 border-green-500 rounded-xl p-3">
                  Get Help from our Local Representive
                </p>
              </div>
              <div className="flex items-center gap-1 text-xl font-semibold mb-4">
                <i className="fa-solid fa-person text-green-500 text-3xl"></i>
                <p className=" border-r-5 border-green-500 rounded-xl p-3">
                  Easily Search Jobs in your Preferred Categoty
                </p>
              </div>
            </div>
            <div className="max-md:hidden">
              <Image
                src="/images/Mobile.png"
                alt="why choose JOBHUB "
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center py-20">
        <div className="w-[85%] flex justify-center items-center flex-col gap-20">
          <p className="text-center max-md:text-2xl text-4xl font-semibold">
            OUR <span className="font-bold text-green-800">PARTNERS</span>
          </p>
          <marquee direction="left">
            <div className="flex gap-5 w-full justify-between animate-slide">
              {[
                "/images/companies-list/AbroadFliersLogo.png",
                "/images/companies-list/AmCareLogo.jpeg",
                "/images/companies-list/AebocodeLogo.png",
                "/images/companies-list/AadiSoftLogo.jpg",
                "/images/companies-list/FarlexLogo.jpg",
                "/images/companies-list/FutureITLogo.png",
                "/images/companies-list/IvsLogo.jpg",
                "/images/companies-list/JDevelopers.png",
                "/images/companies-list/JungleworksLogo.png",
                "/images/companies-list/RBLLogo.png",
                "/images/companies-list/RGGroupsLogo.png",
                "/images/companies-list/eventHolidaysLogo.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className="w-[70px] h-[70px] flex items-center justify-center  rounded overflow-hidden"
                >
                  <img
                    src={src}
                    alt="Company logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </marquee>
        </div>
      </section>
      <section className="w-full max-lg:hidden flex justify-center py-20">
        <div className="w-[85%] flex text-center flex-col gap-5">
          <p className="uppercase text-center max-md:text-2xl text-4xl font-semibold pb-10">
            Testimonials
          </p>
          <p className="text-2xl text-left text-gray-500">
            {`Don't`} take our word for it! <br /> Hear it from our partners.
          </p>
          <div className="flex justify-between gap-5">
            <div className="flex flex-col gap-5 w-[20%] bg-gray-300 p-5 rounded-lg h-auto">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt="this is image"
                width={100}
                height={100}
                loading="lazy"
                className="w-10 rounded-sm"
              />
              <p className="text-left text-3xl">
                {
                  "JobHub helped me land first developer job within two weeks! Job filters made it so easy to apply. Highly recommended for freshers."
                }
              </p>
              <div>
                <span>Amit Gamer</span>
                <p className="text-gray-400">Software Engineer, Pune</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-[25%] bg-gray-300 p-5 rounded-lg h-auto">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="this is image"
                loading="lazy"
                className="w-10 rounded-sm"
              />
              <p className="text-left text-3xl">
                {
                  "JobHub helped me land first developer job within two weeks! Job filters made it so easy to apply. Highly recommended for freshers."
                }
              </p>
              <div>
                <span>Amit Gamer</span>
                <p className="text-gray-400">Software Engineer, Pune</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-[20%] bg-gray-300 p-5 rounded-lg h-auto">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="this is image"
                loading="lazy"
                className="w-10 rounded-sm"
              />
              <p className="text-left text-3xl">
                {
                  "JobHub helped me land first developer job within two weeks! Job filters made it so easy to apply. Highly recommended for freshers."
                }
              </p>
              <div>
                <span>Amit Gamer</span>
                <p className="text-gray-400">Software Engineer, Pune</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-[25%] bg-gray-300 p-5 rounded-lg h-auto">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="this is image"
                loading="lazy"
                className="w-10 rounded-sm"
              />
              <p className="text-left text-3xl">
                {
                  "JobHub helped me land first developer job within two weeks! Job filters made it so easy to apply. Highly recommended for freshers."
                }
              </p>
              <div>
                <span>Amit Gamer</span>
                <p className="text-gray-400">Software Engineer, Pune</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
