"use client";
import Image from "next/image";
import { gloabalTheme } from "./Theme/Theme";
import { useRef, useState } from "react";
import img1 from '../public/Images/MobileViewAvatar/premium_photo-1682089787056-9ac0c78a2ac2.webp'
import img2 from '../public/Images/MobileViewAvatar/premium_photo-1682089804117-cea5d901647f.webp'
import img3 from '../public/Images/MobileViewAvatar/premium_photo-1689539137236-b68e436248de.webp'
import img4 from '../public/Images/MobileViewAvatar/premium_photo-1691030256264-59cdf9414ed1.webp'
import Helper from '../public/Images/HomeImages/Helper.webp'
import emailjs from '@emailjs/browser';
// import jobhubFooterLogo from ''
import Toast from "./Toast/Snackbar";
import Link from "next/link";
const avatarStyles = [
  {
    url: img1,
    alt: "Avatar 1",
  },
  {
    url: img2,
    alt: "Avatar 2",
  },
  {
    url: img3,
    alt: "Avatar 2",
  },
  {
    url: img4,
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
export default function HomePage() {
  const [showError, setShowError] = useState(false);
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };
  const formRef = useRef();
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_fxhm458',
      'template_k1zf6ll',
      formRef.current,
      'xGGiT_8LYxsZzpBz4'
    ).then(
      () => {
        setToast({ show: true, message: 'Email sent successfully!', type: 'success' });
        formRef.current.reset();
      },
      () => {
        setToast({ show: true, message: 'Failed to send email.', type: 'error' });
      }
    );
  };

  const closeToast = () => setToast(prev => ({ ...prev, show: false }));
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
              className="border border-gray-300 p-2 rounded-md sm:w-[30%] w-full placeholder:text-black text-center focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
            <button
              className="button relative py-1.5 px-4 text-lg   hover:text-black border rounded cursor-pointer overflow-hidden  font-semibold"
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
                  className=" object-cover w-6 h-6 rounded-full size-8 ring-2 ring-white dark:ring-zinc-200"
                  alt="Baic"
                />
              ))}
            </div>
            <p className="ml-2 text-sm">get hired Today!</p>
          </div>
          <div className="mt-10">
            <p className="text-xs">how do i apply jobs on jobhub.world?</p>
            {/* <Box className="flex sm:text-sm text-xs gap-3 py-3"> */}
            <div className="flex gap-3 py-1 text-sm text-center"></div>
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
      <section className="w-full flex justify-center py-20">
        <div className="w-full max-w-6xl px-4 text-center">
          {/* Heading */}
          <div>
            <p className="text-4xl font-semibold mb-10">
              HOW <span className="text-green-800 font-bold">JOBHUB</span> WORKS FOR YOU
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center -mb-3">
            <div className="w-full ">
              <Image src={Helper} alt="jobhub world helper image" className="w-full" />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="relative w-full h-40 overflow-hidden bg-white rounded-md shadow-md cursor-pointer group transition-all duration-300 ease-in-out"
              >
                {/* Expanding Green Background */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-green-600 rounded-bl-full transition-all duration-300 ease-in group-hover:w-full group-hover:h-full group-hover:rounded-none z-0" />

                {/* Foreground Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-2">
                  <Image src="/icon.png" alt="icon" width={40} height={40} className="mb-2" />
                  <p className="font-bold text-gray-900 text-sm transition-colors duration-300 ease-in-out group-hover:text-white">
                    Content {i + 1}
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
          <a href="" className="px-5 py-2 mt-6 rounded-sm bg-green-800">
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
      <section className="w-full max-lg:hidden flex justify-center py-20 ">

        <div className="w-[85%]">
          <p className="text-center max-md:text-2xl text-4xl font-semibold pb-4">
            Frequently asked<span className="font-bold text-green-800 ">questions</span>
          </p>
          <div className=" max-w-4xl mx-auto ">
            {faqItems.map(({ id, question, answer }) => (
              <div key={id} className="border-b border-gray-300 py-4 cursor-pointer">
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
       <footer className="relative bg-[#0f1e0f] text-white">
      <div className="absolute inset-0 bg-[url(/images/fotterImage.png)] bg-cover bg-right-bottom opacity-10" aria-hidden="true" />
      <div className="relative z-10 container mx-auto px-4 lg:w-[90%] xl:w-full">

        {/* Info Section */}
        <div className="border-b py-10" style={{ borderBottom: `2px solid #008000` }}>
          <div className="flex flex-wrap">
            {/* Location */}
            <div className="w-full md:w-1/3 mb-6 flex items-start">
              <i className="fas fa-map-marker-alt text-[#008000] text-2xl mt-2" />
              <div className="pl-4">
                <h4 className="text-lg font-semibold mb-1">Find us</h4>
                <span className="text-sm text-gray-400">
                  25th Unit, 3rd Floor, Sushma Infinium Zirakpur, Punjab 140603
                </span>
              </div>
            </div>
            {/* Call */}
            <div className="w-full md:w-1/3 mb-6 flex items-start">
              <i className="fas fa-phone text-[#008000] text-2xl mt-2" />
              <div className="pl-4">
                <h4 className="text-lg font-semibold mb-1">Call us</h4>
                <span className="text-sm text-gray-400">+91 98187-37641</span>
              </div>
            </div>
            {/* Mail */}
            <div className="w-full md:w-1/3 mb-6 flex items-start">
              <i className="far fa-envelope-open text-[#008000] text-2xl mt-2" />
              <div className="pl-4">
                <h4 className="text-lg font-semibold mb-1">Mail us</h4>
                <span className="text-sm text-gray-400">info.jobhubworld@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-10 flex flex-wrap">

          {/* Logo & Info */}
          <div className="w-full lg:w-1/3 mb-8">
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/jobhubFooterLogo.png" alt="logo" width={200} height={60} />
            </Link>
            <p className="text-sm text-gray-400 leading-7 mb-4">
              Find Your Career With JOBHUB <br />
              <span className="text-xs">
                Comprehensive job portal for job seekers and employers. For Candidate{' '}
                <Link href="https://www.jobhub.world/candidatedashboard" className="text-blue-300" target="_blank">Apply Jobs</Link>, For Employer{' '}
                <Link href="https://www.jobhub.world/employerlogin" className="text-blue-200" target="_blank">Create Jobs</Link>
              </span>
            </p>
            <span className="text-lg font-bold block mb-3">Follow us</span>
            <div className="flex gap-4">
              <Link href="https://facebook.com/..." target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#008000] hover:bg-[#006600] transition-colors">
                <i className="fab fa-facebook-f text-white" />
              </Link>
              <Link href="https://linkedin.com/..." target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#008000] hover:bg-[#006600] transition-colors">
                <i className="fab fa-linkedin-in text-white" />
              </Link>
              <Link href="https://instagram.com/..." target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#008000] hover:bg-[#006600] transition-colors">
                <i className="fab fa-instagram text-white" />
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full lg:w-1/3 md:w-1/2 mb-8">
            <h3 className="text-lg font-semibold mb-6 relative before:content-[''] before:absolute before:bottom-[-15px] before:left-0 before:w-12 before:h-[2px] before:bg-[#008000]">
              Useful Links
            </h3>
            <ul className="flex flex-wrap">
              {[
                ['/', 'Home'], ['/about', 'About'], ['/contact', 'Contact us'],
                ['/#popularSection', 'Find a job'], ['/verification', 'Hire Now'],
                ['/Privacypolicy', 'Privacy Policy'], ['/Termsandconditions', 'T&C'],
                ['/interviewtips', 'Interview Tips'], ['/events', 'Events'],
                ['/candidatedashboard', 'Jobs']
              ].map(([href, label], i) => (
                <li key={i} className="w-1/2 mb-3">
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-[#008000] text-sm capitalize transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div className="w-full lg:w-1/3 md:w-1/2 mb-8">
            <h3 className="text-lg font-semibold mb-6 relative before:content-[''] before:absolute before:bottom-[-15px] before:left-0 before:w-12 before:h-[2px] before:bg-[#008000]">
              Subscribe
            </h3>
            <p className="text-sm text-gray-400 mb-6">Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
            <form ref={formRef} onSubmit={sendEmail} className="relative">
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                className="w-full py-3 px-6 bg-[#1e2e1e] border border-[#1e2e1e] text-white text-sm focus:border-[#008000] transition-colors"
                required
              />
              <input type="hidden" name="time" value={new Date().toLocaleString()} />
              <button
                type="submit"
                className="absolute top-0 right-0 bg-[#008000] p-[11px] hover:bg-[#006600] transition-colors"
              >
                <i className="fab fa-telegram-plane text-white text-xl -rotate-6"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1a2a1a] py-6">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-2 lg:mb-0 text-center lg:text-left">
            Copyright © {new Date().getFullYear()}, All Right Reserved{' '}
            <Link href="/" className="text-[#008000] hover:text-[#006600]">Jobhub.world</Link>
          </p>
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            {[
              ['/', 'Home'],
              ['/Privacypolicy', 'Privacy Policy'],
              ['/Termsandconditions', 'T&C'],
              ['/contact', 'Contact']
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#008000] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Toast */}
      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={closeToast} />
    </footer>
    </>
  );
}
