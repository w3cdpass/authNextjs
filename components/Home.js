"use client";
import Image from "next/image";
import { gloabalTheme } from "./Theme/Theme";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { jobsData } from "@/data/Jobpage";
// import jobhubFooterLogo from ''
import Toast from "./Toast/Snackbar";
import Link from "next/link";
import Typewriter from "./Typewriter";
const avatarStyles = [
  {
    url: '/images/MobileViewAvatar/premium_photo-1682089787056-9ac0c78a2ac2.webp',
    alt: "Avatar 1",
  },
  {
    url: '/images/MobileViewAvatar/premium_photo-1682089804117-cea5d901647f.webp',
    alt: "Avatar 2",
  },
  {
    url: '/images/MobileViewAvatar/premium_photo-1689539137236-b68e436248de.webp',
    alt: "Avatar 2",
  },
  {
    url: '/images/MobileViewAvatar/premium_photo-1691030256264-59cdf9414ed1.webp',
    alt: "Avatar 3",
  },
];

const logos = [
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
];

// Resume sections 
const resumes = [
  { name: 'resume 1', path: '/images/Resume/1.webp' },
  { name: 'resume 2', path: '/images/Resume/2.webp' },
  { name: 'resume 3', path: '/images/Resume/3.webp' },
  { name: 'resume 4', path: '/images/Resume/4.webp' },
  { name: 'resume 5', path: '/images/Resume/5.webp' },
  { name: 'resume 5', path: '/images/Resume/6.webp' },
  { name: 'resume 7', path: '/images/Resume/2.webp' },

]

const faqItems = [
  {
    id: 1,
    question: 'What type of jobs are available on Jobhub?',
    answer:
      'JobHub World is a modern, versatile job portal connecting global job seekers and employers across industries. We specialize in remote jobs, on-site jobs, hybrid roles, full-time, part-time, and contract opportunities—empowering professionals at every career stage.',
  },
  {
    id: 2,
    question: 'How do I apply a job?',
    answer:
      'To apply for a job, Click on find a job button and submit your application through the Registration Form',
  },
  {
    id: 3,
    question: 'Are there remote job opportunities on JobHub world?',
    answer:
      'JobHub World: Find remote jobs | Onsite jobs | Flexible work worldwide. Hire talent (jobhub.world/employerlogin) or browse jobs (jobhubworld.com/candidatedashboard).',
  },
  {
    id: 4,
    question: 'Are there any charges for applying for a job?',
    answer:
      'No, applying for a job on the Job Hub Portal is completely free for all users.',
  },
  {
    id: 5,
    question: 'How do I update my resume or profile information?',
    answer:
      "To update your resume, navigate to the 'Build Resume' section and select a resume template to edit your information accordingly.",
  },
];

// testimonials
const testimonials = [
  {
    name: 'Amit Kumar',
    src: '/images/testimonial/1.avif',
    workdesignation: 'Software Engineer, IT park, CHD',
    feedback: 'JobHub helped me land my first developer job within two weeks! The job filters made it so easy to apply. Highly recommended for freshers.',
  },
  {
    name: 'Rohit Sharma',
    src: '/images/testimonial/3.avif',
    workdesignation: 'Data Analyst, eClerx',
    feedback: 'I found my dream job through JobHub! The platform is user-friendly, and the job listings are always up-to-date. The quick apply feature is a game changer.',
  },
  {
    name: 'Gurpreet Singh',
    src: '/images/testimonial/4.avif',
    workdesignation: 'Marketing Manager, Panchkula',
    feedback: 'The salary insights on JobHub helped me confidently negotiate a better offer. I recommend it to all professionals looking to grow in their careers.',
  },
  {
    name: 'Rahul Verma',
    src: '/images/testimonial/5.avif',
    workdesignation: 'Graphic Designer, Mohali',
    feedback: 'I found several creative job opportunities on JobHub that matched my design portfolio. The platform is intuitive and well-organized.',
  },
  {
    name: 'Sneha Mehta',
    src: '/images/testimonial/2.avif',
    workdesignation: 'HR Specialist, Delhi',
    feedback: 'JobHub made it easy to filter by company size and culture fit. I landed a role in an organization that aligns perfectly with my values.',
  },
  {
    name: 'Kunal Desai',
    src: '/images/testimonial/6.avif',
    workdesignation: 'Frontend Developer, Chandigarh',
    feedback: 'What I love most about JobHub is the focus on skill-matching. I was recommended jobs based on my exact tech stack — React, TypeScript, and Tailwind.',
  }
];

export default function HomePage() {
  const [showError, setShowError] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [showtest, setShowTest] = useState(false);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  function showTestimonial() {
    setShowTest(prev => !prev);
  }
  const testimonialsSlices = showtest ? testimonials.slice(0, 3) : testimonials.slice(3, 6);
  return (
    <>
      {/* Mobile view of Hero section page*/}
      <div className="hidden max-sm:flex justify-center items-center py-4 px-1">
        <article >
          <h2
            className="text-lg font-semibold text-center "
            style={{ color: gloabalTheme.colors.primary }}
          >
            #Get Hired in Chandigarh!
          </h2>
          <h1 className="text-center text-3xl font-bold">
            Find Your Career with <br />{" "}
            <span
              className="flex items-end justify-center"
              style={{ color: gloabalTheme.colors.primary }}
            >
              JOBHUB<span className="text-sm text-black">.WORLD</span>
            </span>
          </h1>
          <div className="flexible flex-col sm:flex-row md:flex-row lg:flex-row gap-4 items-center justify-center mt-4 bg-gray-50 p-2 rounded-lg">
            <input
              type="text"
              placeholder="Job Title"
              title="Search for jobs"
              className="border border-gray-300 p-2 rounded-md sm:w-full w-[75%]  placeholder:text-black text-center focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
            <button
              className="button relative py-2 sm:py-1.5 px-4 text-[13px] sm:text-lg  hover:text-black border rounded cursor-pointer overflow-hidden  font-semibold"
              title="Search"
              style={{ backgroundColor: gloabalTheme.colors.primary }}
            // onClick={handleSearch}
            >
              <span className="relative z-10">Search</span>
            </button>
            {showError && (
              <p>
                Please fill at least one field
              </p>
            )}
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center justify-center -space-x-2">
              {avatarStyles.map((user, index) => (
                <Image
                  key={index}
                  src={user.url}
                  width={500}
                  height={10}
                  className=" object-cover w-6 h-6 rounded-full size-8 ring-2 ring-white dark:ring-zinc-200"
                  alt="Baic"
                />
              ))}
            </div>
            <p className="ml-2 text-sm">get hired Today!</p>
          </div>
          <div className="mt-10 text-sm">
            <p className="">how do i apply jobs on jobhub.world?</p>
            {/* <Box className="flex sm:text-sm text-xs gap-3 py-3"> */}
            <div className="flex gap-5 py-1 "></div>
            <span className="bg-slate-100 p-1 rounded-md">Search Jobs <a href="#popularSection" className=" underline bg-black p-1 text-white rounded-md">here</a></span>
            <span className="bg-slate-100 p-1 rounded-md">See <span className="font-semibold   p-1 rounded-md">Joblisting</span></span>
            <span className="bg-slate-100 p-1 rounded-md">Finally <span className="font-semibold  p-1 rounded-md">fillup</span>form</span>
          </div>
        </article>
      </div>
      {/* Desktop View of Hero section page  */}
      <article className="flex w-full max-sm:hidden justify-center relative bg-black text-white ">
        <div className="w-[85%] flex justify-between items-end sm:pt-30 lg:pt-40 pt-20 ">
          <div className="w-[50%] max-lg:w-full max-xl:pb-10 pb-20">
            <h1 className="text-[4rem] font-semibold">
              <Typewriter/>
              <span className="">With</span>
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

                <select
                  className="max-sm:hidden border border-gray-300 p-2 rounded-md text-black text-center w-[35%] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  defaultValue=""
                >
                  <option className="text-gray-400" value="" disabled>
                    Experience
                  </option>
                  <option value="entry">Entry Level</option>
                  <option value="mid">Mid Level</option>
                  <option value="senior">Senior Level</option>
                </select>

                <select
                  className="hidden lg:hidden xl:flex sm:flex border border-gray-300 p-2 rounded-md text-black text-center w-[20%] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  defaultValue=""
                >
                  <option className="text-gray-400" value="" disabled>
                    City
                  </option>
                  <option value="ny">Chandigarh</option>
                  <option value="la">Zirakpur</option>
                  <option value="sf">Mohali</option>
                  <option value="ch">Panchkula</option>
                  <option value="other">Other</option>
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
      <section className="w-full flex justify-center py-20">
        <div className="w-full max-w-6xl px-4 text-center">
          {/* Heading */}
          <div>
            <p className="text-4xl font-semibold mb-10">
              HOW <span className="text-green-800 font-bold">JOBHUB</span> WORKS FOR YOU
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center -mb-3 mr-4">
            <div className="w-full ">
              <Image src={'/images/HomeImages/Helper.webp'} width={500} height={500} alt="jobhub world helper image" className="w-full " />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              {
                src: '/images/HomeImages/Search.png',
                label: 'Smart Job Search',
              },
              {
                src: '/images/HomeImages/salary.png',
                label: 'Salary Insights',
              },
              {
                src: '/images/HomeImages/Frame.png',
                label: 'Resume Tools',
              },
              {
                src: '/images/HomeImages/quickApply.png',
                label: 'Quick Apply',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative w-full h-40 overflow-hidden bg-white rounded-md shadow-md cursor-pointer group transition-all duration-300 ease-in-out"
              >
                {/* Expanding Green Background */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-green-600 rounded-bl-full transition-all duration-300 ease-in group-hover:w-full group-hover:h-full group-hover:rounded-none z-0" />

                {/* Foreground Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-2">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={40}
                    height={40}
                    className="mb-2"
                  />
                  <p className="font-bold text-gray-900 text-sm transition-colors duration-300 ease-in-out group-hover:text-white">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-sm:hidden w-full flex justify-center py-20 bg-black text-white">
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
          <a href="#popularSection" className="px-5 py-2 mt-6 rounded-sm bg-green-800">
            Explore Jobs
          </a>
        </div>
      </section>
      <section className="max-sm:hidden w-full flex justify-center py-20">
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
      <section className="w-full flex justify-center py-0 sm:py-20 ">
        <div className="flex justify-center items-center flex-col gap-0 sm:gap-20 ">
          <h2 className="text-center max-md:text-2xl text-4xl font-semibold " id="popularSection">
            POPULAR <span className="text-green-800 font-bold">JOBS</span>
          </h2>
          <main className="p-5">
            <ul className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-4">
              {Object.entries(jobsData).map(([slug, jobData]) => (
                <li key={slug}>
                  <Link
                    href={`/jobprofiles/${slug}`}
                    className="block capitalize bg-green-100 p-4 rounded-md hover:bg-green-200 transition text-xl font-semibold text-gray-800"
                  >
                    {slug.replace(/-/g, " ")}
                    <p className="text-xs mt-3">Work Type</p>
                    {jobData.workType.split('/').map((item, index) => (
                      <span key={index} className="bg-white mr-1 p-1 rounded-lg text-xs text-blue-500 font-semibold border-b-2">{item}</span>
                    ))}
                    <hr className="mt-2" />
                    <p className="text-xs mt-3">Required Skills</p>
                    <div className="flex gap-1">
                      {jobData.tags.slice(0, 3).map((items, index) => (
                        <span key={index} className="bg-white  p-1 rounded-lg text-[10px] text-blue-500 font-semibold">{items}</span>
                      ))}
                    </div>
                    <button type="button" className="bg-green-800 text-white text-xs p-1 mt-4 rounded-md cursor-pointer">Apply Now</button>
                  </Link>
                </li>
              ))}
            </ul>
          </main>
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
              <div className="carousel-container flex snap-x snap-mandatory ">
                <div className="flex  items-center justify-center carousel-inner w-full">
                  {[...resumes, ...resumes].map((item, index) => (
                    <div key={index} className="flex-none snap-start w-[320px] h-[310px]">
                      <div className="w-full h-full">
                        <Image
                          src={item.path}
                          alt={item.name}
                          width={300}
                          height={300}
                          className="object-cover rounded border-b-15 border-gray-500"
                        />
                      </div>
                    </div>
                  ))}
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
          <div className="w-full flex justify-around items-center">
            <div className="max-md:w-full">
              <div className="flex items-center gap-1 text-xl font-semibold mb-4 ">
                <i className="fa-solid fa-ban text-3xl text-green-500"></i>
                <p className=" border-green-500 rounded-xl p-3">
                  No Hidden Charges
                </p>
              </div>
              <div className="flex items-center gap-1 text-xl font-semibold mb-4">
                <i className="fa-solid fa-circle-check text-3xl text-green-500"></i>
                <p className="   border-green-500 rounded-xl p-3">
                  Verified & Authentic Jobs
                </p>
              </div>

              <div className="flex items-center gap-1 text-xl font-semibold mb-4">
                <i className="fa-solid fa-id-card text-green-500 text-3xl"></i>
                <p className="  border-green-500 rounded-xl p-3">
                  No Need To Create Resume
                </p>
              </div>
              <div className="flex items-center gap-1 text-xl font-semibold mb-4">
                <i className="fa-solid fa-location-dot text-green-500 text-3xl"></i>
                <p className="  border-green-500 rounded-xl p-3">
                  Get the Job in your Locality
                </p>
              </div>
              <div className="flex items-center gap-1 text-xl font-semibold mb-4">
                <i className="fa-solid fa-handshake text-green-500 text-3xl"></i>
                <p className="  border-green-500 rounded-xl p-3">
                  Helping the Unorganized Sector
                </p>
              </div>
              <div className="flex items-center gap-1 text-xl font-semibold mb-4">
                <i className="fa-solid fa-headphones-simple text-green-500 text-3xl"></i>
                <p className=" border-green-500 rounded-xl p-3">
                  Get Help from our Local Representive
                </p>
              </div>
              <div className="flex items-center gap-1 text-xl font-semibold mb-4">
                <i className="fa-solid fa-person text-green-500 text-3xl"></i>
                <p className="  border-green-500 rounded-xl p-3">
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
          <div className="w-full overflow-hidden">
            <div className='slider'>
              <div className='slideTrack'>
                {[...logos, ...logos].map((src, index) => (
                  <div className='slide' key={index}>
                    <Image
                      src={src}
                      alt={`Company logo ${index + 1}`}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-lg:hidden flex justify-center py-20">
        <div className="w-[85%] flex text-center flex-col gap-5">
          <p className="uppercase text-center max-md:text-2xl text-4xl font-semibold pb-10">
            Testimonials
          </p>
          <p className="text-2xl text-left text-gray-500">
            {`Don't`} take our word for it! <br /> Hear it from our partners and <span className="underline">Job seekers</span>.
          </p>
          {/* <div className="flex justify-between gap-5">
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
              <Image
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="this is image"
                loading="lazy"
                className="w-10 rounded-sm"
                width={100}
                height={100}
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
              <Image
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="this is image"
                loading="lazy"
                className="w-10 rounded-sm"
                width={100}
                height={100}
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
              <Image
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="this is image"
                loading="lazy"
                className="w-10 rounded-sm"
                width={100}
                height={100}
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
          </div> */}
          {/* <div className="w-full flex justify-center ">
            <div className="w-[90%] flex justify-between gap-5 h-[60vh]">
              <p className="w-2/6 text-left text-3xl">{
                `"JobHub helped me land first developer job within two weeks! Job filters made it so easy to apply. Highly recommended for freshers."`
              }</p>
              <div className="absolute rounded-br-full p-30 bg-white left-[37%] z-20"></div>
              <div className="bg-green-300  rounded-lg h-auto w-[70%] flex flex-col justify-start items-end relative  overflow-hidden">
                <div>
                  <Image src="/images/jobhubFooterLogo.png" alt="jobhublogo" width={500} height={500} className="w-full"/>
                </div>
                <div className="absolute -right-1/4 flex items-end gap-5  h-full p-2 ">
                  <div className="">
                    <span className="font-medium">Amit kumar</span>
                    <p className="text-gray-500 font-semibold">Software Engineer, Pune</p>
                    <Image src={'/images/MobileViewAvatar/premium_photo-1682089787056-9ac0c78a2ac2.webp'} width={500} height={400} alt="Testimonials" className="rounded-full w-50 h-50 object-cover " />
                  </div>
                  <div className="">
                    <Image src={'/images/MobileViewAvatar/premium_photo-1682089787056-9ac0c78a2ac2.webp'} width={500} height={400} alt="Testimonials" className="rounded-full w-20 h-20 object-cover " />
                  </div>
                  <div className="">
                    <Image src={'/images/MobileViewAvatar/premium_photo-1682089787056-9ac0c78a2ac2.webp'} width={500} height={400} alt="Testimonials" className="rounded-full w-20 h-20 object-cover " />
                  </div>
                  <div className="">
                    <Image src={'/images/MobileViewAvatar/premium_photo-1682089787056-9ac0c78a2ac2.webp'} width={500} height={400} alt="Testimonials" className="rounded-full w-20 h-20 object-cover " />
                  </div>
                  <div className="">
                    <Image src={'/images/MobileViewAvatar/premium_photo-1682089787056-9ac0c78a2ac2.webp'} width={500} height={400} alt="Testimonials" className="rounded-full w-20 h-20 object-cover " />
                  </div>
                  <div className="">
                    <Image src={'/images/MobileViewAvatar/premium_photo-1682089787056-9ac0c78a2ac2.webp'} width={500} height={400} alt="Testimonials" className="rounded-full w-20 h-20 object-cover " />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="w-full flex justify-center ">
            <div className="w-full flex justify-between items-end mx-auto gap-4">
              {testimonialsSlices.map((test, index) => {
                const isSideCard = index !== 1;
                const cardWidth = isSideCard ? 'w-1/4' : 'w-3/10';
                const cardShadow = isSideCard ? '1rem 20px #bcffc2' : '1rem 16px #bcffc2';
                return (
                  <div
                    key={index}
                    className={`bg-gray-200 ${cardWidth} p-4 flex flex-col relative rounded-tl-4xl rounded-tr-lg rounded-br-lg rounded-bl-3xl transition-all duration-300`}
                    style={{ boxShadow: cardShadow }}
                  >
                    <Image
                      src={test.src}
                      width={96}
                      height={96}
                      alt="Testimonials"
                      className="rounded-full w-20 h-20 object-cover absolute -left-10 -bottom-12 z-20"
                    />

                    <div className="pt-8">
                      <div className="flex items-center justify-start gap-2 mb-4 p-3">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star text-yellow-400"></i>
                        ))}
                      </div>

                      <p className="text-lg md:text-2xl mb-2 text-right p-2">{test.feedback}</p>

                      <div className="text-right">
                        <span className="font-semibold">{test.name}</span>
                        <p className="text-gray-400">{test.workdesignation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>
          <div onClick={showTestimonial} className=" mt-10">
            {showtest ? (<span className="abosolute bg-green-300 p-2 rounded-lg font-medium">Previous</span>) : (<span className="abosolute bg-green-300 p-2 rounded-lg font-medium">Next</span>)}
          </div>
        </div>
      </section>
      <section className="w-full max-lg:hidden flex justify-center py-20 ">

        <div className="w-[85%]">
          <p className="text-center max-md:text-2xl text-4xl font-semibold pb-4">
            Frequently asked <span className="font-bold text-green-800 ">questions</span>
          </p>
          <div className=" max-w-5xl mx-auto ">
            {faqItems.map(({ id, question, answer }) => (
              <div key={id} className="border mb-2 p-2 rounded-sm border-gray-300 py-4 cursor-pointer">
                <h3
                  className="text-lg font-semibold"
                  onClick={() => toggle(id)}
                >
                  {question}
                </h3>
                {openId === id && (
                  <p className="mt-2 text-gray-700 ">
                    {answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
