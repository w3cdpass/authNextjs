import Image from 'next/image';
import { notFound } from 'next/navigation';
import { jobsData } from '@/data/Jobpage';
import GlobalCategories from '@/components/Categories/circle';
import Script from 'next/script';
import SubscribeMail from '@/components/Subscribe/subscribe';
// For static generation
export function generateStaticParams() {
    return Object.keys(jobsData).map((slug) => ({ slug }));
}

// For dynamic metadata (SEO)
export function generateMetadata({ params }) {
    const job = jobsData[params.slug];
    if (!job) return {};
    return {
        title: job.metadata.title,
        description: job.metadata.description,
        keywords: job.metadata.keywords,
        authors: [{ name: job.metadata.author }],
        alternates: {
            canonical: job.metadata.canonical,
        },
        openGraph: {
            title: job.metadata.og.title,
            description: job.metadata.og.description,
            url: job.metadata.og.url,
            images: [
                {
                    url: job.metadata.og.image,
                    width: 1200,
                    height: 630,
                    alt: job.title,
                },
            ],
            siteName: 'JobHub',
            locale: 'en_IN',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: job.metadata.twitter.title,
            description: job.metadata.twitter.description,
            site: '@JobHub.world',
            creator: '@JobHub.world',
            images: [job.metadata.twitter.image],
        },
    };
}

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

const categories = [
    { img: '/images/cate/1.png', para: "Employment\nVerification" },
    { img: '/images/cate/2.png', para: "Identity\nVerification" },
    { img: '/images/cate/3.png', para: "Refrence\nCheck" },
    { img: '/images/cate/4.png', para: "History\nVerification" },
    { img: '/images/cate/5.png', para: "Work\nAuthorization" },
]

export default function JobProfilePage({ params }) {

    const job = jobsData[params.slug];
    if (!job) return notFound();

    return (
        <>
            <Script
                type='application/ld+json'
                id='job-schema'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(job.structuredData)
                }}
            />
            <main className="p-8 max-w-6xl mx-auto">
                <header className="mb-10 text-left">
                    <h1 className="text-5xl font-bold text-left text-gray-900">{job.title}</h1>
                    <p className="hidden sm:block text-lg text-left text-gray-600 mt-2  mx-auto">
                        {job.description}
                    </p>
                    {/* <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
                        <span className="inline-block px-4 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">
                            Location: {job.location}
                        </span>
                        <span className="inline-block px-4 py-1 text-sm font-medium bg-yellow-100 text-yellow-700 rounded-full">
                            Salary: {job.salary}
                        </span>
                    </div> */}
                </header>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                    {/* Left Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center items-end  ">
                        <Image
                            src={job.image}
                            alt={job.title}
                            width={600}
                            height={400}
                            className="rounded-2xl  bg-gradient-to-t to-green-200 p-4"
                        />
                        <div className="flex items-center justify-center absolute flex-col bg-gray-100 p-2 rounded-xl gap-2 ">
                            <p className="ml-2 text-sm font-semibold">More than 5k+ applied !</p>
                            <div className="flex items-center justify-center -space-x-2 ">
                                {[...avatarStyles, ...avatarStyles].map((user, index) => (
                                    <Image
                                        key={index}
                                        src={user.url}
                                        className=" object-cover w-6 h-6 rounded-full size-8 ring-2 ring-white dark:ring-zinc-200"
                                        alt="Baic"
                                        width={100}
                                        height={100}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Job Overview</h2>
                            <p className="text-gray-700 leading-relaxed">{job.description}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Insights</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {job.insights.map((insight, index) => (
                                    <li key={index}>{insight}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Required Skills</h2>
                            <div className="flex gap-2 flex-wrap">
                                {job.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </section>
                        {/* <button className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md transition">
                            Apply Now
                        </button> */}
                    </div>
                </div>
                <div className='hidden max-sm:block w-full fixed bottom-0 left-2/6'>
                    <button className='bg-green-500 text-lg p-2 rounded-lg font-semibold '>Apply Now</button>
                </div>
            </main>
            <div className="bg-white rounded-xl shadow-md p-6  md:p-8 border border-gray-200 max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Description</h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Before attending your first interview with us, please review and prepare the following essential items.
                        These documents and tips help ensure a smooth and professional experience.
                    </p>
                </div>

                {/* Section Title */}
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                    Prerequisites for Interview
                </h3>

                {/* Requirements List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                        <i className="fas fa-file-alt text-blue-500 mt-1"></i>
                        <span><strong>Resume:</strong> Updated and printed.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <i className="fas fa-envelope-open-text text-green-500 mt-1"></i>
                        <span><strong>Cover Letter:</strong> If requested, tailored to the role.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <i className="fas fa-folder-open text-purple-500 mt-1"></i>
                        <span><strong>Portfolio:</strong> For creative or technical roles.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <i className="fas fa-id-card text-yellow-500 mt-1"></i>
                        <span><strong>ID Proof:</strong> Government-issued ID.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <i className="fas fa-certificate text-red-500 mt-1"></i>
                        <span><strong>Certificates:</strong> Relevant educational/professional.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <i className="fas fa-pen text-indigo-500 mt-1"></i>
                        <span><strong>Notebook & Pen:</strong> Optional, for notes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <i className="fas fa-user-tie text-pink-500 mt-1"></i>
                        <span><strong>Dress Code:</strong> Formal or business casual.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <i className="fas fa-clock text-gray-500 mt-1"></i>
                        <span><strong>Be On Time:</strong> Arrive 10–15 mins early.</span>
                    </li>
                </ul>
            </div>

            <div>
                <GlobalCategories categories={categories} />
            </div>

            <section className="max-md:hidden w-full flex justify-center bg-[#384639] p-5">
                <div className="w-[85%] flex justify-between text-4xl text-white">
                    <span>Live Jobs: 1,200</span>
                    <span>Compare Salaries</span>
                    <span>Process: 550</span>
                </div>
            </section>
            <section className='w-[85%] mx-auto py-20 '>
                <div className='w-full flex flex-col items-center '>
                    <div className=''>
                        <h2 className='text-4xl font-semibold py-10'>We Are Glad To Be Trusted By !</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 border-b-8 pb-2">
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">NextGen Softwares</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">InfiTech Solutions</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">GrowFin Capital</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">RapidKart Logistics</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">MedicoLink India</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">BrightHire Staffing</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">Vastraa Fashions</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">EcoGrid Energies</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">Techspire Labs</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">Zenith Buildcon</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">FinByte Analytics</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">NourishWell Foods</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">CareCraft Hospitals</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">EduLeap Academy</span>
                        <span className="px-4 py-2 text-black font-semibold bg-gray-100 rounded hover:bg-green-100 transition">SmartPulse Systems</span>
                    </div>

                    <div className='py-50'>
                        <div className='flex '>
                            <div>
                                <Image src={'/images/news.png'} width={250} height={250} alt='Jobhub world news letter ' />
                            </div>
                            <div className='p-2'>
                                <h2 className='text-4xl'>Subscribe to our Newsletter!</h2>
                                <p className='text-md text-gray-400'>Get all updates from Jobhub world</p>
                                <SubscribeMail />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
