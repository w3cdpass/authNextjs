import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <>
            <div className='w-full '>
                <div className='w-[85%] mx-auto flex justify-around pt-2 '>
                    <div className=''>
                        <article className='bg-gray-100 py-20 w-10/12 p-2'>
                            <h1 className='text-3xl font-semibold mb-3' >
                                Why to choose  Jobhub.world ?
                            </h1>
                            <p className='break-words '>A <span className='underline'>slick</span> and <span className='underline'>modern</span> platform, JobHub.world is beautifully designed for <span className='bg-green-300 p-0.5 rounded-md text-gray-600'>employers</span> and <span className='bg-green-300 p-0.5 rounded-md text-gray-600'>recruiters</span> to easily post jobs, manage listings, and keep track of job seekers. It doesn’t stop at applications — it offers a complete workflow from candidate tracking to employee onboarding, all in one place.</p>
                        </article>
                        <div>
                            <div className='p-10 w-10/12 border-b-4 border-r-4  border-green-500'>
                                <h2 className='text-2xl font-semibold  text-center text-[#222] '>
                                    Helping You Succeed in Your Very First Interview
                                </h2>
                            </div>
                            <div className='w-10/12 min-h-40 border-l-4 border-b-4 border-green-500 flex justify-center items-center p-2'>
                                <div className='bg-gray-100 w-full  rounded-sm p-2 min-h-40'>
                                    <h2 className='text-xl font-semibold text-[#333]'>Why Candidates Fail on Their First Attempt?</h2>
                                    <p>Many candidates fail their first interview due to poor preparation, low confidence, and not knowing what employers expect.</p>
                                    <p><strong>JobHub World</strong> helps by offering mock interviews, resume tips, and expert guidance — giving candidates the tools they need to succeed.</p>
                                    <div className='flex justify-end flex-col items-end'>
                                        <span>was this helpful ?</span>
                                        <li className='fa-solid fa-heart text-green-400'></li>
                                    </div>
                                </div>
                            </div>
                            <div className='w-10/12 min-h-40 border-r-4 border-b-4 border-green-500 flex justify-center items-center p-2'>
                                <div className='bg-gray-100 w-full  rounded-sm min-h-40 p-2'>
                                    <h2 className='text-xl font-semibold text-[#333]'>Struggling to Stand Out in a Crowd?</h2>
                                    <p>Job seekers often get overlooked because their resumes and profiles don’t highlight their strengths effectively.</p>
                                    <p><strong>JobHub World</strong> helps candidates build standout profiles, craft impactful resumes, and showcase skills that catch recruiters’ attention.</p>
                                    <div className='flex justify-end flex-col items-end'>
                                        <span>was this helpful ?</span>
                                        <li className='fa-solid fa-heart text-green-400'></li>
                                    </div>
                                </div>
                            </div>
                            <div className='w-10/12 min-h-40 border-l-4 border-b-4 border-green-500 flex justify-center items-center p-2'>
                                <div className='bg-gray-100 w-full  rounded-sm min-h-40 p-2'>
                                    <h2 className='text-xl font-semibold text-[#333]'>No Real Interview Experience?</h2>
                                    <p>Many first-time applicants feel unprepared because they’ve never faced real interview pressure or questions.</p>
                                    <p><strong>JobHub World</strong> provides mock interviews and feedback sessions that simulate real scenarios, helping candidates build confidence and improve performance.</p>
                                    <div className='flex justify-end flex-col items-end'>
                                        <span>was this helpful ?</span>
                                        <li className='fa-solid fa-heart text-green-400'></li>
                                    </div>
                                </div>
                            </div>
                            <div className='p-7 w-10/12  border-r-4  border-green-500'>
                                <p className='text-center italic text-gray-600 '>
                                    {"At JobHub World, we believe every failure is just a setup for your first big breakthrough."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:flex flex-col items-center gap-4'>
                        <div className='w-[300px] h-[500px] overflow-hidden  p-2 bg-white rounded-b-full flex items-center justify-center  '>
                            <div className='w-full h-full rounded-b-full overflow-hidden'>
                                <Image
                                    src='/images/aboutus/1.avif'
                                    alt='job'
                                    width={200}
                                    height={100}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        </div>
                        <div className='w-[220px] h-[400px] overflow-hidden rounded-full flex items-center justify-center' style={{ boxShadow: '-0.5rem -0.5rem #456882, 0.5rem 0.5rem lightgreen' }}>
                            <div className='w-full h-full rounded-full overflow-hidden'>
                                <Image
                                    src='/images/aboutus/2.avif'
                                    alt='job'
                                    width={500}
                                    height={200}
                                    className='w-full h-full object-cover '
                                />
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex  flex-col items-center gap-9 mt-32'>
                        <div className='w-[220px] h-[400px] overflow-hidden rounded-full flex items-center justify-center' style={{ boxShadow: '-0.5rem -0.5rem lightgreen, 0.5rem 0.5rem  #456882' }}>
                            <div className='w-full h-full rounded-full overflow-hidden'>
                                <Image
                                    src='/images/aboutus/3.avif'
                                    alt='job'
                                    width={500}
                                    height={200}
                                    className='w-full h-full object-cover '
                                />
                            </div>
                        </div>
                        <div className='w-[320px] h-[520px] overflow-hidden   rounded-t-full flex items-center justify-center'>
                            <div className='w-full h-full rounded-t-full overflow-hidden'>
                                <Image
                                    src='/images/aboutus/4.avif'
                                    alt='job'
                                    width={500}
                                    height={200}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <section className="border-t-4 border-t-gray-700 py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-5xl font-semibold text-[#333]">Meet the Team</h2>
                            <p className="text-sm text-[#555] mt-2">The minds behind JobHub World</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {/* Member 1 */}
                            <div className="bg-gray-100 rounded-xl p-6 shadow-md text-center">
                                <h3 className="text-lg font-bold text-[#333]">Aarav Mehta</h3>
                                <p className="text-sm text-gray-600">Lead Developer</p>
                            </div>

                            {/* Member 2 */}
                            <div className="bg-gray-100 rounded-xl p-6 shadow-md text-center">
                                <h3 className="text-lg font-bold text-[#333]">Sanya Kapoor</h3>
                                <p className="text-sm text-gray-600">UI/UX Designer</p>
                            </div>

                            {/* Member 3 */}
                            <div className="bg-gray-100 rounded-xl p-6 shadow-md text-center">
                                <h3 className="text-lg font-bold text-[#333]">Rohan Desai</h3>
                                <p className="text-sm text-gray-600">Content Strategist</p>
                            </div>

                            {/* Member 4 */}
                            <div className="bg-gray-100 rounded-xl p-6 shadow-md text-center">
                                <h3 className="text-lg font-bold text-[#333]">Meena Joshi</h3>
                                <p className="text-sm text-gray-600">Marketing Head</p>
                            </div>

                            {/* Member 5 */}
                            <div className="bg-gray-100 rounded-xl p-6 shadow-md text-center">
                                <h3 className="text-lg font-bold text-[#333]">Ishaan Verma</h3>
                                <p className="text-sm text-gray-600">Backend Engineer</p>
                            </div>

                            {/* Member 6 */}
                            <div className="bg-gray-100 rounded-xl p-6 shadow-md text-center">
                                <h3 className="text-lg font-bold text-[#333]">Priya Shah</h3>
                                <p className="text-sm text-gray-600">HR & Community</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-16 mt-10 border-t border-gray-300">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        {`We're`} Here to Empower Your Career
                        </h2>
                        <p className="text-gray-600 mb-6">
                            At <strong>JobHub World</strong>, we believe in second chances, first impressions, and unlocking your full potential.
                            Whether yo{`u'r`}e just starting out or trying again — our team is with you every step of the way.
                        </p>
                        <p className="text-gray-600 mb-10">
                            Join thousands of candidates who’ve found their path through guided support, smart tools, and a team that genuinely cares.
                        </p>
                        <a
                            href="/contact-us"
                            className="inline-block bg-green-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition"
                        >
                            Get in Touch with Us
                        </a>
                    </div>
                </section>

            </div>
        </>
    )
}

export default page