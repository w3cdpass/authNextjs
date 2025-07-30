/**
 * @author [github](wwww.github.com/w3cdpass)
 *  @Info This is for static Site for jobhub world for Each 15 jobs
 * @description While creating a seperate meta data in header , put all content inside in all 15 pages so make it better for seo  
 * @update You can update according to ur need so go on 
 */
export const jobsData = {
    // Telecaller profile and the all data inside for static site
    'telecaller-profile': {
        title: 'Telecaller',
        description:
            'As a Telecaller, you will be the first point of contact with our customers. You will handle outbound and inbound calls, share information about our products and services, and follow up with leads. The role requires excellent communication skills, patience, and a customer-first attitude.',
        image: '/images/jobprofile/telecaller.png',
        insights: [
            'Strong verbal communication in Hindi/English is essential.',
            'Remote and in-office opportunities available.',
            'Performance-based bonuses and weekly incentives.',
            'Training will be provided for freshers.',
            'Shift flexibility with both part-time and full-time roles.',
        ],
        tags: ['Communication', 'Sales', 'Customer Support', 'Cold Calling', 'CRM Tools'],
        location: 'New Delhi, India',
        salary: '₹18,000 - ₹25,000/month + incentives',

        responsibilities: [
            'Make outbound calls to prospective customers.',
            'Answer queries related to product features and pricing.',
            'Maintain a call log and update CRM systems.',
            'Follow up with leads and convert them into customers.',
            'Provide excellent after-sales support and maintain relationships.',
        ],

        qualifications: [
            '12th pass or higher education qualification.',
            'Prior experience in telecalling or customer support preferred.',
            'Fluent in Hindi and basic English.',
            'Good listening skills and a confident phone presence.',
            'Basic computer knowledge (email, CRM entry, etc.).',
        ],

        benefits: [
            'Attractive incentive structures.',
            'Work-from-home option available.',
            'Weekly off and festival leaves.',
            'Health and accidental insurance.',
            'In-house training and upskilling workshops.',
        ],

        workType: 'Full-Time / Part-Time',
        shift: 'Day shift (9 AM – 6 PM) | Evening shift (2 PM – 9 PM)',

        metadata: {
            title: 'TeleCaller Jobs in Zirakpur, Chandigarh | Hiring Now - JobHub world',
            description:
                'Find 250+ Telecaller Jobs in Zirakpur & Chandigarh. Apply for full-time, part-time, work-from-home telecaller roles with salary up to ₹25,000. Free job posting for employers. Immediate hiring for freshers & experienced.',
            keywords:
                'telecaller jobs Zirakpur, telecaller jobs Chandigarh Mohali, BPO jobs Panchkula, customer support work from home, inbound telecaller jobs, outbound call center jobs, night shift telecaller jobs, female telecaller jobs, international calling jobs, telemarketing jobs for freshers',
            author: "JobHub - India's Fastest Growing Job Portal",
            canonical: 'https://www.jobhub.world/telecaller',
            og: {
                title: 'Hiring 250+ Telecallers in Zirakpur & Chandigarh | JobHub',
                description:
                    'Urgent hiring for telecallers in Zirakpur & Chandigarh region. Full-time, part-time & work-from-home options available. Salary ₹15,000 - ₹25,000. Apply now or post jobs free!',
                image:
                    'https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/TeleCaller%20(1).png',
                url: 'https://www.jobhub.world/telecaller',
            },
            twitter: {
                title: 'Telecaller Job Openings in Zirakpur (Chandigarh) - Apply Today',
                description:
                    '250+ telecaller vacancies in Zirakpur & Chandigarh region. English/Hindi/Punjabi speakers needed. Weekly payroll. Start immediately after selection process.',
                image:
                    'https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/TeleCaller%20(1).png',
            },
        },
        structuredData: {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            url: "https://www.jobhub.world/",
            logo: "https://www.jobhub.world/Jobhub%20logo.png",
            title: "Telecaller Jobs in Zirakpur, Chandigarh",
            description:
                "Hiring telecallers for domestic and international calling projects. Excellent communication skills required in English and Hindi. Training provided. Multiple shifts available.",
            hiringOrganization: {
                "@type": "Organization",
                name: "JobHub",
                sameAs: "https://www.jobhub.world",
            },
            jobLocation: {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "25th Unit, 3rd Floor, Sushma infinium",
                    addressRegion: "Zirakpur, Chandigarh",
                    postalCode: "140603",
                    addressCountry: "IN",
                },
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8512827174",
                contactType: "customer service",
                email: "info.jobhubworld@gmail.com",
            },
            datePosted: "2024-05-24",
            validThrough: "2024-05-24",
            employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
            baseSalary: {
                "@type": "MonetaryAmount",
                currency: "INR",
                value: {
                    "@type": "QuantitativeValue",
                    minValue: 15000,
                    maxValue: 25000,
                    unitText: "MONTH",
                },
            },
            experienceRequirements: {
                "@type": "OccupationalExperienceRequirements",
                monthsOfExperience: 0,
            },
        },
    },

    // Document Verification profile and the all data inside for static site
    'document-verification': {
        title: 'Document Verification',
        description:
            'Join our Document Verification team and help ensure the authenticity of KYC documents, Aadhaar cards, and banking information. This role is ideal for those with attention to detail and a basic understanding of data entry. Work-from-home options available after training.',

        image: '/images/jobprofile/2.png',
        insights: [
            'Work-from-home available after training.',
            'Hiring across India – multiple locations.',
            'Freshers welcome; training provided.',
            'Weekly payments and flexible shifts.',
            'No sales or calling – purely backend work.',
        ],
        tags: ['Document Verification', 'Data Entry', 'KYC', 'Compliance', 'Back Office'],
        location: 'India / Work from Home',
        salary: '₹15,000 - ₹35,000/month',

        responsibilities: [
            'Verify authenticity of KYC and Aadhaar documents.',
            'Cross-check uploaded data for accuracy.',
            'Maintain and update document verification logs.',
            'Report inconsistencies or fraudulent documents.',
            'Follow standard operating procedures (SOPs).',
        ],

        qualifications: [
            '12th pass or equivalent qualification.',
            'Basic computer knowledge and typing skills.',
            'Familiarity with MS Office and data entry software.',
            'Detail-oriented with strong focus on accuracy.',
            'Comfortable with repetitive backend tasks.',
        ],

        benefits: [
            'Remote and hybrid options after training.',
            'Weekly or bi-weekly salary disbursal.',
            'Training and certification on compliance guidelines.',
            'No target-based work or calling pressure.',
            'Festival leaves and rotational week-offs.',
        ],

        workType: 'Full-Time / Part-Time / Remote',
        shift: 'Day shift | Evening shift | Rotational',

        metadata: {
            title: 'Document Verification Jobs in Zirakpur | Work from Home & Office Roles - JobHub',
            description:
                'Apply for 500+ Document Verification Jobs in India. Work from home & office positions available. Freshers welcome | ₹15,000 - ₹35,000/month | Immediate hiring | KYC, Banking, Aadhaar verification jobs',
            keywords:
                'document verification jobs, work from home verification jobs, KYC jobs, banking verification jobs, Aadhaar verification jobs, data verification jobs, remote verification jobs, fresher document jobs, part-time verification work, back office verification jobs',
            author: "JobHub - India's Leading Recruitment Platform",
            canonical: 'https://www.jobhub.world/documentverification',
            og: {
                title: '500+ Document Verification Jobs - Work from Home Available | JobHub',
                description:
                    'Hiring document verification specialists for banking, KYC & Aadhaar verification. Freshers can apply. Earn ₹15k-35k/month. Flexible shifts. Start immediately after online assessment.',
                image:
                    'https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Document%20Verification%20(1).png',
                url: 'https://www.jobhub.world/documentverification',
            },
            twitter: {
                title: 'Work-from-Home Document Verification Jobs - Hiring Now',
                description:
                    '500+ openings for document verification specialists. KYC, banking & Aadhaar verification positions. Training provided. Weekly payments. Apply today!',
                image:
                    'https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Document%20Verification%20(1).png',
            },
        },

        structuredData: {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            url: "https://www.jobhub.world/documentverification",
            logo: "https://www.jobhub.world/Jobhub%20logo.png",
            title: "Document Verification Specialist",
            description:
                "Verifying KYC documents, bank statements, Aadhaar cards, and other official documents. Ensuring accuracy and compliance with regulatory requirements. Work from home options available after training period.",
            hiringOrganization: {
                "@type": "Organization",
                name: "JobHub",
                sameAs: "https://www.jobhub.world",
            },
            jobLocation: [
                {
                    "@type": "Place",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Multiple Locations",
                        addressRegion: "India",
                        addressCountry: "IN",
                    },
                },
                {
                    "@type": "Place",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Work from Home",
                        addressCountry: "IN",
                    },
                },
            ],
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8512827174",
                contactType: "customer service",
                email: "info.jobhubworld@gmail.com",
            },
            datePosted: "2024-07-23",
            validThrough: "2024-10-23",
            employmentType: ["FULL_TIME", "PART_TIME", "REMOTE"],
            baseSalary: {
                "@type": "MonetaryAmount",
                currency: "INR",
                value: {
                    "@type": "QuantitativeValue",
                    minValue: 15000,
                    maxValue: 35000,
                    unitText: "MONTH",
                },
            },
            experienceRequirements: {
                "@type": "OccupationalExperienceRequirements",
                monthsOfExperience: 0,
            },
        },
    },


    // Data Entry profile and the all data inside for static site
    'data-entry': {
        title: 'Data Entry',
        description:
            'Join our Data Entry team in Zirakpur & Chandigarh. Ideal for candidates with good typing speed and attention to detail. Multiple roles open across industries like healthcare, banking, and e-commerce. Work-from-home available.',

        image: '/images/jobprofile/3.png',
        insights: [
            '500+ openings across Zirakpur & Chandigarh.',
            'Work-from-home & office roles available.',
            'Typing speed of 25+ WPM recommended.',
            'Daily or weekly payouts.',
            'No calling or sales involved.',
        ],
        tags: ['Typing', 'Data Entry', 'Back Office', 'MS Excel', 'Clerical Work'],
        location: 'Zirakpur, Chandigarh',
        salary: '₹12,000 - ₹25,000/month',

        responsibilities: [
            'Entering data from source documents into the system.',
            'Verifying data accuracy and correcting errors.',
            'Maintaining digital and physical records.',
            'Meeting daily or weekly data entry targets.',
            'Handling confidential information responsibly.',
        ],

        qualifications: [
            '10th or 12th pass.',
            'Basic computer knowledge.',
            'Proficiency in MS Excel and typing.',
            'Good attention to detail.',
            'Ability to work independently with minimal supervision.',
        ],

        benefits: [
            'Remote work available after training.',
            'Fixed weekly or bi-weekly salary.',
            'No pressure or performance targets.',
            'Comfortable office environment (for in-office roles).',
            'Opportunities to work in multiple domains (banking, healthcare, e-comm).',
        ],

        workType: 'Full-Time / Part-Time / Remote',
        shift: 'Day shift | Evening shift | Flexible timings',

        metadata: {
            title: 'Data Entry Jobs in Zirakpur, Chandigarh | Hiring Now - JobHub',
            description:
                '500+ Data Entry Jobs in Zirakpur & Chandigarh for freshers & experienced. Work from home & office positions | ₹12,000 - ₹25,000/month | Excel, Typing, Back Office jobs | Immediate hiring',
            keywords:
                'data entry jobs Zirakpur, data entry jobs Chandigarh, work from home data entry, back office jobs, typing jobs, Excel data entry, online data entry, part-time data work, data operator jobs, fresher data entry jobs',
            author: "JobHub - Punjab's Top Job Portal",
            canonical: 'https://www.jobhub.com/data-entry-jobs-zirakpur-chandigarh',
            og: {
                title: 'Data Entry Jobs in Zirakpur - 500+ Openings | JobHub',
                description:
                    'Urgent hiring for data entry operators in Zirakpur & Chandigarh. Work from home available. Typing speed 25+ WPM. Salary up to ₹25,000. Apply today!',
                image:
                    'https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Data%20Entry.png',
                url: 'https://www.jobhub.com/data-entry-jobs-zirakpur-chandigarh',
            },
            twitter: {
                title: 'Data Entry Jobs in Zirakpur - Work from Home Options',
                description:
                    '500+ data entry vacancies in Zirakpur & Chandigarh region. English/Hindi typing jobs. Daily/weekly payroll. Start immediately after skill test.',
                image:
                    'https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Data%20Entry.png',
            },
        },

        structuredData: {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            url: "https://www.jobhub.com/data-entry-jobs-zirakpur-chandigarh",
            logo: "https://www.jobhub.world/Jobhub%20logo.png",
            title: "Data Entry Operator",
            description:
                "Accurate data entry work for various industries including healthcare, banking, and e-commerce. Requires good typing speed and attention to detail. Work from home options available for qualified candidates.",
            hiringOrganization: {
                "@type": "Organization",
                name: "JobHub",
                sameAs: "https://www.jobhub.com",
            },
            jobLocation: {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "SCO 101, VIP Road",
                    addressLocality: "Zirakpur",
                    addressRegion: "Punjab",
                    postalCode: "140603",
                    addressCountry: "IN",
                },
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8512827174",
                contactType: "customer service",
                email: "info.jobhubworld@gmail.com",
            },
            datePosted: "2024-07-23",
            validThrough: "2024-10-23",
            employmentType: ["FULL_TIME", "PART_TIME", "REMOTE"],
            baseSalary: {
                "@type": "MonetaryAmount",
                currency: "INR",
                value: {
                    "@type": "QuantitativeValue",
                    minValue: 12000,
                    maxValue: 25000,
                    unitText: "MONTH",
                },
            },
            experienceRequirements: {
                "@type": "OccupationalExperienceRequirements",
                monthsOfExperience: 0,
            },
        },
    },

    // Web Deginers profile and the all inside for static site
    'web-designer': {
        title: 'Web Designer',
        description:
            'Design intuitive and visually stunning user interfaces across web and mobile platforms. Collaborate with startups and agencies via JobHub.world. Great for creative minds with Figma, Adobe XD, and UI/UX skills. Remote and freelance roles available.',

        image: '/images/jobprofile/4.png',
        insights: [
            '1500+ openings across India.',
            'Remote, freelance, and office-based roles.',
            'Attractive salary up to ₹1.2L/month.',
            'Portfolio submission required.',
            'Work with top startups and design studios.',
        ],
        tags: ['UI/UX', 'Figma', 'Web Design', 'Front-End', 'Photoshop', 'Freelance'],
        location: 'Remote / India-wide',
        salary: '₹30,000 - ₹1,20,000/month',

        responsibilities: [
            'Design responsive user interfaces using modern tools.',
            'Work closely with developers and project managers.',
            'Translate user needs into functional design systems.',
            'Ensure consistency across web and mobile platforms.',
            'Present and defend design solutions with data-driven insights.',
        ],

        qualifications: [
            'Diploma or Degree in Design or equivalent experience.',
            'Portfolio showcasing recent UI/UX or Web Design work.',
            'Proficiency in Figma, Adobe XD, or similar tools.',
            'Understanding of responsive design & accessibility.',
            'Good communication and collaboration skills.',
        ],

        benefits: [
            'Work remotely or with top-tier design teams.',
            'Flexible contracts – freelance or full-time.',
            'Chance to build portfolio with real-world clients.',
            'Creative autonomy on many projects.',
            'Regular payouts and long-term project potential.',
        ],

        workType: 'Full-Time / Part-Time / Freelance / Remote',
        shift: 'Flexible hours | Project-based deadlines',

        metadata: {
            title: 'Web Designer Jobs | UI/UX Designer Hiring - JobHub.world',
            description:
                '🌟 1500+ Web/UI/UX Designer Jobs on JobHub.world - Remote & On-site | ₹30K-1.2L/month | Freshers to Experienced | Figma/Adobe XD/Photoshop | Apply Today!',
            keywords:
                'web designer jobs, UI UX jobs JobHub, remote design jobs, Figma designer jobs Chandigarh, web design jobs Punjab, freelance designer jobs, WordPress designer hiring, creative jobs India',
            author: "JobHub.world - India's Creative Job Network",
            canonical: 'https://www.jobhub.world/web-designer-jobs',
            og: {
                title: '🚀 1500+ Web Designer Jobs | Hire Creatives - JobHub.world',
                description:
                    'Find UI/UX designers, Front-end devs & Creative talent. Salary up to ₹1.2L/month. Post jobs free or apply with portfolio. Immediate openings across India!',
                image:
                    'https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Web%20Designer.png',
                url: 'https://www.jobhub.world/web-designer-jobs',
            },
            twitter: {
                title: 'Hiring Web Designers - 1500+ Jobs @JobHub.world',
                description:
                    'UI/UX/Front-end designer jobs with top salaries. Remote work options. Portfolio showcase required. #DesignJobs #HiringNow',
                image:
                    'https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Web%20Designer.png',
            },
        },

        structuredData: {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: "Web/UI/UX Designer",
            description:
                "Designing intuitive user interfaces and engaging web experiences. Must have portfolio demonstrating design skills. Opportunity to work with leading startups and agencies through JobHub.world platform.",
            hiringOrganization: {
                "@type": "Organization",
                name: "JobHub.world",
                sameAs: "https://www.jobhub.world",
                logo: "https://www.jobhub.world/images/logo-1200x1200.png"
            },
            industry: "Information Technology",
            jobLocationType: "TELECOMMUTE",
            applicantLocationRequirements: {
                "@type": "Country",
                name: "India"
            },
            baseSalary: {
                "@type": "MonetaryAmount",
                currency: "INR",
                value: {
                    "@type": "QuantitativeValue",
                    minValue: 30000,
                    maxValue: 120000,
                    unitText: "MONTH"
                }
            },
            datePosted: "2024-07-23",
            validThrough: "2024-11-23",
            employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR", "FREELANCE"],
            experienceRequirements: {
                "@type": "OccupationalExperienceRequirements",
                monthsOfExperience: 0
            },
            skills: ["Figma", "Adobe XD", "UI Design", "UX Research", "Responsive Design", "HTML/CSS"],
            educationRequirements: "Diploma/Degree in Design or equivalent experience"
        },
    },

    // Graphic Designer profile and the all inside for static site
    'graphic-designer': {
        title: 'Graphic Designer',
        description:
            'Create stunning visuals for branding, marketing, and digital campaigns. Openings in Chandigarh, Zirakpur, Mohali, and Panchkula. Great opportunity for Adobe Photoshop/Illustrator experts. Work full-time, part-time, or freelance.',

        image: '/images/jobprofile/5.png',
        insights: [
            '800+ roles available across Tricity.',
            'Portfolio and design test may be required.',
            'Work in print, packaging, and digital media.',
            'Both fresher and experienced designers welcome.',
            'Flexible roles: full-time, freelance, part-time.',
        ],
        tags: ['Graphic Design', 'Photoshop', 'Illustrator', 'InDesign', 'Print Media', 'Branding'],
        location: 'Chandigarh, Zirakpur, Mohali, Panchkula',
        salary: '₹18,000 - ₹75,000/month',

        responsibilities: [
            'Design visual assets for digital and print media.',
            'Collaborate with marketing teams and clients.',
            'Maintain brand consistency across all projects.',
            'Revise and refine designs based on feedback.',
            'Prepare final assets for print and web publishing.',
        ],

        qualifications: [
            'Diploma or degree in Graphic Design or related field.',
            'Proficiency in Adobe Photoshop, Illustrator, InDesign.',
            'Creative portfolio showcasing relevant work.',
            'Attention to detail and time management skills.',
            'Experience with social media creatives and ad designs is a plus.',
        ],

        benefits: [
            'Opportunity to work with leading agencies & brands.',
            'Remote and freelance projects available.',
            'Flexible hours and project-based contracts.',
            'Regular payouts and long-term opportunities.',
            'Creative freedom and exposure to live projects.',
        ],

        workType: 'Full-Time / Part-Time / Freelance',
        shift: 'Flexible shifts | Deadline-based tasks',

        metadata: {
            title: 'Graphic Designer Jobs in Tricity & Zirakpur | Hiring Now - JobHub.world',
            description:
                '🚀 800+ Graphic Designer Jobs in Chandigarh Tricity & Zirakpur. Adobe Photoshop/Illustrator jobs | ₹18K-75K/month | Full-time/Part-time | Print & Digital Media | Apply Today!',
            keywords:
                'graphic designer jobs Zirakpur, Chandigarh design jobs, Mohali creative jobs, Panchkula designer hiring, Adobe Photoshop jobs, Illustrator designer Tricity, print media jobs, digital design jobs, fresher designer jobs, freelance graphic design',
            author: "JobHub.world - Tricity's Top Creative Job Platform",
            canonical: 'https://www.jobhub.world/graphicdesigner',
            og: {
                title: '🎨 800+ Graphic Designer Jobs in Tricity & Zirakpur - JobHub.world',
                description:
                    'Hiring graphic designers for agencies, print shops & e-commerce companies in Chandigarh, Mohali, Panchkula & Zirakpur. Salary up to ₹75K. Portfolio required.',
                image:
                    'https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Graphic%20Designer.png',
                url: 'https://www.jobhub.world/graphicdesigner',
            },
            twitter: {
                title: 'Graphic Designer Openings in Tricity/Zirakpur',
                description:
                    '800+ design jobs in Chandigarh region: Logo design, branding, packaging & digital media. #TricityJobs #DesignHiring',
                image:
                    'https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Graphic%20Designer.png',
            },
        },

        structuredData: [
            {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                title: "Graphic Designer",
                description:
                    "Creating visual concepts for branding, advertising, and digital media. Must be proficient in Adobe Creative Suite. Multiple openings across Chandigarh, Mohali, Panchkula and Zirakpur.",
                hiringOrganization: {
                    "@type": "Organization",
                    name: "JobHub.world",
                    sameAs: "https://www.jobhub.world",
                    logo: "https://www.jobhub.world/Jobhub%20logo.png"
                },
                jobLocation: [
                    {
                        "@type": "Place",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Zirakpur",
                            addressRegion: "Punjab",
                            postalCode: "140603",
                            addressCountry: "IN"
                        }
                    },
                    {
                        "@type": "Place",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Chandigarh",
                            addressRegion: "Chandigarh",
                            addressCountry: "IN"
                        }
                    }
                ],
                baseSalary: {
                    "@type": "MonetaryAmount",
                    currency: "INR",
                    value: {
                        "@type": "QuantitativeValue",
                        minValue: 18000,
                        maxValue: 75000,
                        unitText: "MONTH"
                    }
                },
                datePosted: "2024-07-23",
                validThrough: "2024-10-23",
                employmentType: ["FULL_TIME", "PART_TIME", "FREELANCE"],
                skills: [
                    "Adobe Photoshop",
                    "Illustrator",
                    "InDesign",
                    "Branding",
                    "Print Design",
                    "Digital Media"
                ],
                experienceRequirements: {
                    "@type": "OccupationalExperienceRequirements",
                    monthsOfExperience: 0
                }
            },
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Jobs",
                        item: "https://www.jobhub.world/graphicdesigner"
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Creative Jobs",
                        item: "https://www.jobhub.world/graphicdesigner"
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: "Graphic Designers in Tricity",
                        item: "https://www.jobhub.world/graphicdesigner"
                    }
                ]
            }
        ],
    },

    // Web developer profile and the all inside for static site
    'web-developer': {
        title: 'Web Developer',
        description:
            'Join 2000+ openings for Full-stack, Front-end, and Back-end developers across India. Work on React, Node.js, PHP, Django, and more. Remote and on-site roles available via JobHub.world.',

        image: '/images/jobprofile/6.png',
        insights: [
            '2000+ jobs across India & remote.',
            'Popular stacks: MERN, MEAN, LAMP, Django.',
            'Freshers to 5+ years experience welcome.',
            'Opportunities with startups, SaaS, and agencies.',
            'Build modern web apps with scalable architecture.',
        ],
        tags: ['Full-stack', 'React', 'Node.js', 'PHP', 'Django', 'Remote Developer'],
        location: 'Pan India / Remote',
        salary: '₹25,000 - ₹2,00,000/month',

        responsibilities: [
            'Develop responsive and scalable web applications.',
            'Integrate RESTful APIs and third-party services.',
            'Work with designers to implement UI/UX solutions.',
            'Maintain code quality, testing, and documentation.',
            'Participate in code reviews and Agile sprints.',
        ],

        qualifications: [
            'BTech/BCA/MCA or equivalent experience.',
            'Proficiency in JavaScript and modern JS frameworks.',
            'Familiar with Git, APIs, databases (SQL/NoSQL).',
            'Knowledge of deployment tools and CI/CD is a plus.',
            'Portfolio or GitHub contributions preferred.',
        ],

        benefits: [
            'Remote and hybrid job options.',
            'Diverse tech stack exposure (MERN, LAMP, Django).',
            'Paid internships and full-time career paths.',
            'Performance bonuses and learning budgets.',
            'Flexible working hours with startup culture.',
        ],

        workType: 'Full-Time / Part-Time / Freelance / Contract',
        shift: 'Day shift / Flexible remote working',

        metadata: {
            title: 'Web Developer Jobs | Full-stack & Front-end Hiring - JobHub.world',
            description:
                '🚀 2000+ Web Developer Jobs in India & Remote | React, Node, PHP | ₹25K-2L/month | Freshers to Experienced | Immediate Hiring | Apply Today on JobHub.world',
            keywords:
                'web developer jobs, full stack developer jobs, front end jobs India, MERN stack jobs, remote developer jobs, JavaScript jobs, PHP developer jobs, fresher web developer, Python Django jobs, Angular developer hiring',
            author: 'JobHub.world - India\'s Leading Tech Job Platform',
            canonical: 'https://www.jobhub.world/webdeveloper',
            og: {
                title: '💻 2000+ Web Developer Jobs - Remote & On-site | JobHub.world',
                description:
                    'Hiring Full-stack, Front-end & Back-end developers. Salary up to ₹2L/month. Tech stacks: MERN, MEAN, LAMP. Post jobs free or apply with portfolio/code samples.',
                image:
                    'https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Web%20Developer.png',
                url: 'https://www.jobhub.world/webdeveloper',
            },
            twitter: {
                title: 'Web Developer Openings - 2000+ Jobs @JobHub.world',
                description:
                    'Full-stack, Front-end & Back-end developer jobs with competitive salaries. Remote work options. #DeveloperJobs #TechHiring',
                image:
                    'https://cdn.jsdelivr.net/gh/Vrecruiter-Project/socialAssests@latest/assets/seo/Web%20Developer.png',
            },
        },

        structuredData: [
            {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                title: "Web Developer",
                description:
                    "Developing and maintaining web applications using modern frameworks. Opportunity to work with startups, agencies, and product companies through JobHub.world platform.",
                hiringOrganization: {
                    "@type": "Organization",
                    name: "JobHub.world",
                    sameAs: "https://www.jobhub.world",
                    logo: "https://www.jobhub.world/Jobhub%20logo.png"
                },
                industry: "Information Technology",
                jobLocationType: "TELECOMMUTE",
                applicantLocationRequirements: {
                    "@type": "Country",
                    name: "India"
                },
                baseSalary: {
                    "@type": "MonetaryAmount",
                    currency: "INR",
                    value: {
                        "@type": "QuantitativeValue",
                        minValue: 25000,
                        maxValue: 200000,
                        unitText: "MONTH"
                    }
                },
                datePosted: "2025-07-23",
                validThrough: "2025-10-23",
                employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR", "FREELANCE"],
                experienceRequirements: {
                    "@type": "OccupationalExperienceRequirements",
                    monthsOfExperience: 0
                },
                skills: ["JavaScript", "React", "Node.js", "HTML5", "CSS3", "REST APIs"],
                educationRequirements: "BTech/BCA/MCA or equivalent experience",
                responsibilities: "Develop responsive web applications, Write clean and maintainable code, Collaborate with designers and product teams"
            }
        ]
    },

    // Construction profile and the all inside for static site
    'construction': {
        title: 'Construction Worker & Site Roles',
        description:
            'Join 2500+ job openings for Civil Engineers, Electricians, Masons, and Construction Laborers across India. From residential to commercial and infrastructure projects. Apply now with or without experience.',

        image: '/images/jobprofile/7.png',
        insights: [
            '2500+ active construction job listings.',
            'Openings for Civil Engineers, Electricians, Masons & Labor.',
            'Projects: Residential, Commercial, Infrastructure.',
            'Daily/weekly/monthly wage options.',
            'Freshers and skilled workers welcome.',
        ],
        tags: ['Civil Engineer', 'Mason', 'Electrician', 'Construction Labor', 'Site Supervisor'],
        location: 'Pan India (Urban & Semi-urban areas)',
        salary: '₹15,000 - ₹1,00,000/month',

        responsibilities: [
            'Assist in construction site operations (labor, materials, safety).',
            'Civil engineers to manage design and structural work.',
            'Electricians and welders for internal and external fittings.',
            'Follow site supervisor and engineer instructions.',
            'Maintain safety protocols on-site.',
        ],

        qualifications: [
            'No formal education required for general labor.',
            'Diploma/Degree required for Civil Engineers.',
            'ITI/Apprenticeship preferred for electricians and technicians.',
            'Physically fit and willing to work on-site.',
            'Prior site or construction experience is a plus.',
        ],

        benefits: [
            'Free uniforms and basic safety gear provided.',
            'Daily wages and weekly payments for some roles.',
            'Work near home or relocate for higher pay.',
            'Growth paths to supervisor roles or contracts.',
            'Accommodation support for select locations.',
        ],

        workType: 'Full-Time / Part-Time / Contractor',
        shift: 'Day shift / Shift-based (for large projects)',

        metadata: {
            title: 'Construction Jobs | Hiring Labor, Supervisors & Engineers - JobHub.world',
            description:
                '🏗️ 2500+ Construction Jobs in India | Civil Engineers, Masons, Electricians & More | ₹15K-1L/month | Immediate Openings | Residential & Commercial Projects | Apply Today!',
            keywords:
                'construction jobs, civil engineer jobs, mason jobs, electrician jobs, site supervisor jobs, carpenter jobs, welder jobs, construction labor jobs, real estate jobs, building construction jobs',
            author: 'JobHub.world - India\'s Leading Construction Job Platform',
            canonical: 'https://www.jobhub.world/construction',
            og: {
                title: '🔨 2500+ Construction Jobs - Hiring Now | JobHub.world',
                description:
                    'Urgent hiring for construction projects: Civil Engineers (₹35K-1L), Masons (₹18K-40K), Electricians (₹20K-45K). Residential, Commercial & Infrastructure projects across India.',
                image: 'https://www.jobhub.world/images/og/construction-jobs-og.jpg',
                url: 'https://www.jobhub.world/construction',
            },
            twitter: {
                title: 'Construction Jobs - 2500+ Openings @JobHub.world',
                description:
                    'Civil Engineers, Masons, Electricians & Construction Labor needed for projects across India. Daily/weekly payroll available. #ConstructionJobs #HiringNow',
                image: 'https://www.jobhub.world/images/twitter/construction-jobs-card.jpg',
            },
        },

        structuredData: [
            {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                title: "Construction Worker",
                description:
                    "Various construction roles available including Civil Engineers, Masons, Electricians, Welders, and Laborers for ongoing residential and commercial projects.",
                hiringOrganization: {
                    "@type": "Organization",
                    name: "JobHub.world",
                    sameAs: "https://www.jobhub.world",
                    logo: "https://www.jobhub.world/Jobhub%20logo.png"
                },
                industry: "Construction",
                jobLocation: {
                    "@type": "Place",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Multiple Locations",
                        addressRegion: "India",
                        addressCountry: "IN"
                    }
                },
                baseSalary: {
                    "@type": "MonetaryAmount",
                    currency: "INR",
                    value: {
                        "@type": "QuantitativeValue",
                        minValue: 15000,
                        maxValue: 100000,
                        unitText: "MONTH"
                    }
                },
                datePosted: "2025-07-23",
                validThrough: "2025-10-23",
                employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
                experienceRequirements: {
                    "@type": "OccupationalExperienceRequirements",
                    monthsOfExperience: 0
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 5,
                        "name": "Construction Jobs",
                        "item": "https://www.jobhub.world/construction"
                    },
                    {
                        "@type": "ListItem",
                        "position": 6,
                        "name": "Jobs",
                        "item": "https://www.jobhub.world/construction"
                    }
                ]
            }
        ]
    },

    // Front office profile and the all inside for static site
    'frontoffice': {
        title: 'Front Office & Admin Executive Jobs',
        description:
            'Explore 1200+ front office and receptionist jobs across India. Immediate hiring for males and females in hotels, hospitals, offices, and corporate settings. Apply now and start your career in administration!',

        image: '/images/jobprofile/8.png',
        insights: [
            '1200+ active job listings across India.',
            'Receptionist, Admin Executive, and Front Desk roles.',
            'Open to male & female candidates.',
            'Basic computer knowledge and communication skills needed.',
            'Vacancies in hotels, hospitals, schools & corporate offices.',
        ],
        tags: ['Receptionist', 'Front Desk', 'Admin Executive', 'Office Assistant', 'Female Office Jobs'],
        location: 'Pan India – Tier 1, 2 & 3 cities',
        salary: '₹12,000 - ₹35,000/month',

        responsibilities: [
            'Welcome guests and visitors at the front desk.',
            'Handle phone calls, emails, and walk-in queries.',
            'Schedule meetings, appointments, and maintain records.',
            'Maintain office supplies and reception area decorum.',
            'Assist admin team with daily operations and documentation.',
        ],

        qualifications: [
            '12th pass or Graduate (preferred).',
            'Basic computer knowledge (MS Office).',
            'Good communication in English/Hindi.',
            'Pleasing personality and customer-friendly attitude.',
            'Freshers and experienced candidates welcome.',
        ],

        benefits: [
            'Fixed working hours (mostly day shifts).',
            'Opportunities in hospitals, hotels, corporates & more.',
            'Training provided for freshers.',
            'Growth path to Admin Manager/HR Assistant roles.',
            'Professional work environment with team support.',
        ],

        workType: 'Full-Time / Part-Time',
        shift: 'Day Shift / Rotational (for hotels and hospitals)',

        metadata: {
            title: 'Front Office Jobs | Receptionist & Admin Roles - JobHub.world',
            description:
                '👔 1200+ Front Office Jobs for Males & Females | Receptionist, Admin Executive, Front Desk Roles | ₹12K-35K/month | English Communication | Immediate Hiring | Apply Today!',
            keywords:
                'front office jobs, receptionist jobs, admin executive jobs, front desk jobs, office assistant jobs, male receptionist jobs, female receptionist jobs, hotel front office jobs, corporate receptionist, fresher admin jobs',
            author: 'JobHub.world - India\'s Leading Office Jobs Platform',
            canonical: 'https://www.jobhub.world/frontoffice',
            og: {
                title: '💼 1200+ Front Office Jobs (Male/Female) - Hiring Now | JobHub.world',
                description:
                    'Urgent openings for receptionists & front office executives in hotels, corporates & hospitals. Good communication skills required. Salary up to ₹35K. Both freshers & experienced can apply.',
                image: 'https://www.jobhub.world/images/og/front-office-jobs-og.jpg',
                url: 'https://www.jobhub.world/frontoffice',
            },
            twitter: {
                title: 'Front Office Jobs - Male & Female Candidates Welcome',
                description:
                    '1200+ receptionist & admin executive positions available across India. Good English/Hindi communication required. #FrontOfficeJobs #HiringNow',
                image: 'https://www.jobhub.world/images/twitter/front-office-jobs-card.jpg',
            },
        },

        structuredData: [
            {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                title: "Front Office Executive",
                description:
                    "Handling front desk operations, greeting visitors, managing calls and appointments. Open to both male and female candidates with good communication skills.",
                hiringOrganization: {
                    "@type": "Organization",
                    name: "JobHub.world",
                    sameAs: "https://www.jobhub.world",
                    logo: "https://www.jobhub.world/Jobhub%20logo.png"
                },
                industry: "Administration",
                jobLocation: {
                    "@type": "Place",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Multiple Locations",
                        addressRegion: "India",
                        addressCountry: "IN"
                    }
                },
                baseSalary: {
                    "@type": "MonetaryAmount",
                    currency: "INR",
                    value: {
                        "@type": "QuantitativeValue",
                        minValue: 12000,
                        maxValue: 35000,
                        unitText: "MONTH"
                    }
                },
                datePosted: "2025-07-23",
                validThrough: "2025-10-23",
                employmentType: ["FULL_TIME", "PART_TIME"],
                experienceRequirements: {
                    "@type": "OccupationalExperienceRequirements",
                    monthsOfExperience: 0
                },
                skills: ["Communication", "MS Office", "Customer Service", "Multi-tasking"],
                qualifications: "12th pass/Graduate, Basic computer knowledge"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Admin Jobs",
                        "item": "https://www.jobhub.world/frontoffice"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Front Office Jobs",
                        "item": "https://www.jobhub.world/frontoffice"
                    }
                ]
            }
        ]
    },

    // Back office profile and the all inside for staic site
    'backoffice': {
        title: 'Back Office & Data Entry Jobs',
        description:
            'Explore 1800+ back office job opportunities across India, including data entry, admin support, and MIS executive roles. Work from home and office-based jobs available. Apply today with basic computer skills!',

        image: '/images/jobprofile/9.png',
        insights: [
            '1800+ active jobs in back office and support roles.',
            'Roles include Data Entry, Admin Support, MIS Executive.',
            'Openings in banking, healthcare, e-commerce & more.',
            'Work-from-home and in-office options available.',
            'Freshers with basic computer knowledge can apply.',
        ],
        tags: ['Data Entry', 'Back Office', 'MIS Executive', 'Admin Support', 'Non-voice Process'],
        location: 'Pan India (including Tier 1, 2 & 3 cities)',
        salary: '₹10,000 - ₹40,000/month',

        responsibilities: [
            'Enter and manage data in company systems with accuracy.',
            'Support document processing, records keeping & filing.',
            'Generate MIS reports and daily/weekly data summaries.',
            'Coordinate with front office or operations team.',
            'Maintain email communication and internal updates.',
        ],

        qualifications: [
            '12th pass or Graduate (preferred).',
            'Typing speed: 25–30 WPM (preferred).',
            'Basic knowledge of MS Office (Word, Excel, Outlook).',
            'Good attention to detail and accuracy.',
            'Freshers and experienced both eligible.',
        ],

        benefits: [
            'Remote & work-from-office roles available.',
            'Fixed day shifts for most jobs.',
            'Training provided for data entry and admin tools.',
            'Stable income with weekly/monthly payouts.',
            'Career growth to MIS Analyst or Admin Lead roles.',
        ],

        workType: 'Full-Time / Part-Time / Work From Home',
        shift: 'Day Shift / Flexible (remote)',

        metadata: {
            title: 'Back Office Jobs | Data Entry & Admin Support Roles - JobHub.world',
            description:
                '📊 1800+ Back Office Jobs | Data Entry, Admin Support, MIS Executive | ₹10K-40K/month | Freshers Welcome | Work from Home Options | Apply Today!',
            keywords:
                'back office jobs, data entry jobs, admin support jobs, work from home back office, MIS executive jobs, computer operator jobs, office assistant jobs, document processing jobs, non-voice process jobs, fresher back office jobs',
            author: 'JobHub.world - India\'s Leading Back Office Job Portal',
            canonical: 'https://www.jobhub.world/backoffice',
            og: {
                title: '🖥️ 1800+ Back Office Jobs - Hiring Now | JobHub.world',
                description:
                    'Urgent hiring for back office executives: Data Entry (₹10K-25K), Admin Support (₹12K-30K), MIS Executives (₹18K-40K). Work from home options available. Basic computer skills required.',
                image: 'https://www.jobhub.world/images/og/back-office-jobs-og.jpg',
                url: 'https://www.jobhub.world/backoffice',
            },
            twitter: {
                title: 'Back Office Jobs - WFH & Office Roles Available',
                description:
                    '1800+ back office positions in data entry, admin support & MIS reporting. Freshers can apply. #BackOfficeJobs #WFHJobs',
                image: 'https://www.jobhub.world/images/twitter/back-office-jobs-card.jpg',
            },
        },

        structuredData: [
            {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                "title": "Back Office Executive",
                "description": "Handling data processing, documentation, and administrative support tasks. Positions available in banking, healthcare, e-commerce and other sectors. Work from home options for qualified candidates.",
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": "JobHub.world",
                    "sameAs": "https://www.jobhub.world",
                    "logo": "https://www.jobhub.world/Jobhub%20logo.png"
                },
                "industry": "Administrative Services",
                "jobLocationType": "TELECOMMUTE",
                "applicantLocationRequirements": {
                    "@type": "Country",
                    "name": "India"
                },
                "baseSalary": {
                    "@type": "MonetaryAmount",
                    "currency": "INR",
                    "value": {
                        "@type": "QuantitativeValue",
                        "minValue": 10000,
                        "maxValue": 40000,
                        "unitText": "MONTH"
                    }
                },
                "datePosted": "2025-07-23",
                "validThrough": "2025-10-23",
                "employmentType": ["FULL_TIME", "PART_TIME", "REMOTE"],
                "experienceRequirements": {
                    "@type": "OccupationalExperienceRequirements",
                    "monthsOfExperience": 0
                },
                "skills": ["MS Office", "Typing", "Data Accuracy", "Email Communication"],
                "qualifications": "12th pass/Graduate, Basic computer knowledge"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Admin Jobs",
                        "item": "https://www.jobhub.world/backoffice"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Back Office Jobs",
                        "item": "https://www.jobhub.world/backoffice"
                    }
                ]
            }
        ]
    },

    // Housekeeping profile and the all inside for static site
    'housekeeping': {
        title: 'Housekeeping Jobs in Hotels, Hospitals & Offices',
        description:
            'Find 900+ housekeeping jobs in hotels, hospitals, and corporate facilities. Hiring room attendants, cleaners, and supervisors with salaries up to ₹35K/month. Apply now for immediate joining and free accommodation at select jobs.',

        image: '/images/jobprofile/10.png',
        insights: [
            '900+ active housekeeping roles across India.',
            'Jobs available in hotels, hospitals, offices & commercial buildings.',
            'Free meals, accommodation, and uniform for many hotel roles.',
            'Openings for Room Attendants, Cleaners, Supervisors.',
            'Freshers welcome — training provided at many facilities.',
        ],
        tags: ['Cleaner', 'Room Attendant', 'Housekeeping', 'Sanitation', 'Supervisor'],
        location: 'Pan India (Hotel Chains, Hospitals, Offices)',
        salary: '₹9,000 - ₹35,000/month',

        responsibilities: [
            'Ensure cleanliness of rooms, lobbies, restrooms, and facilities.',
            'Change linens, replenish supplies, and manage laundry.',
            'Operate cleaning machines and safely handle chemicals.',
            'Follow safety and hygiene protocols at all times.',
            'Support senior housekeeping staff and shift supervisors.',
        ],

        qualifications: [
            'No formal education required; 8th/10th pass preferred.',
            'Basic understanding of cleaning tools and hygiene.',
            'Ability to work on feet for long hours.',
            'Willingness to work in shifts, including weekends.',
            'Fresher or experienced candidates both welcome.',
        ],

        benefits: [
            'Free accommodation & meals at many hotel jobs.',
            'Uniform and safety gear provided.',
            'Weekly or monthly salary payouts.',
            'On-the-job training for fresher candidates.',
            'Growth path to housekeeping supervisor or facility manager roles.',
        ],

        workType: 'Full-Time / Part-Time',
        shift: 'Rotational / Day & Night Shifts',

        metadata: {
            title: 'Housekeeping Jobs | Hotel & Facility Cleaning Roles - JobHub.world',
            description:
                '🧹 900+ Housekeeping Jobs in Hotels, Hospitals & Offices | Room Attendant, Cleaner, Supervisor Roles | ₹10K-35K/month | Immediate Hiring | Apply Today!',
            keywords:
                'housekeeping jobs, hotel housekeeping jobs, cleaner jobs, room attendant jobs, housekeeping supervisor jobs, hospital cleaning jobs, office cleaning jobs, house maid jobs, facility maintenance jobs, sanitation worker jobs',
            author: 'JobHub.world - India\'s Leading Hospitality Job Platform',
            canonical: 'https://www.jobhub.world/housekeeping',
            og: {
                title: '🧽 900+ Housekeeping Jobs - Hotels/Hospitals Hiring | JobHub.world',
                description:
                    'Urgent hiring for housekeeping staff: Room Attendants (₹10K-20K), Cleaners (₹9K-18K), Supervisors (₹18K-35K). Free accommodation + meals at many hotels. Freshers welcome.',
                image: 'https://www.jobhub.world/images/og/housekeeping-jobs-og.jpg',
                url: 'https://www.jobhub.world/housekeeping',
            },
            twitter: {
                title: 'Housekeeping Jobs - Hotel & Hospital Openings',
                description:
                    '900+ housekeeping positions available with accommodation benefits. #HousekeepingJobs #HotelJobs',
                image: 'https://www.jobhub.world/images/twitter/housekeeping-jobs-card.jpg',
            },
        },

        structuredData: [
            {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                "title": "Housekeeping Staff",
                "description": "Maintaining cleanliness and hygiene standards in hotels, hospitals, and corporate facilities. Positions available for cleaners, room attendants, and supervisors.",
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": "JobHub.world",
                    "sameAs": "https://www.jobhub.world",
                    "logo": "https://www.jobhub.world/Jobhub%20logo.png"
                },
                "industry": "Hospitality",
                "jobLocation": {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Multiple Locations",
                        "addressRegion": "India",
                        "addressCountry": "IN"
                    }
                },
                "baseSalary": {
                    "@type": "MonetaryAmount",
                    "currency": "INR",
                    "value": {
                        "@type": "QuantitativeValue",
                        "minValue": 9000,
                        "maxValue": 35000,
                        "unitText": "MONTH"
                    }
                },
                "jobBenefits": "Accommodation, Meals, Uniform",
                "datePosted": "2025-07-23",
                "validThrough": "2025-10-23",
                "employmentType": ["FULL_TIME", "PART_TIME"],
                "experienceRequirements": {
                    "@type": "OccupationalExperienceRequirements",
                    "monthsOfExperience": 0
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Hospitality Jobs",
                        "item": "https://www.jobhub.world/housekeeping"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Housekeeping Jobs",
                        "item": "https://www.jobhub.world/housekeeping"
                    }
                ]
            }
        ]
    },

    // Delivery profile and the all inside for static site
    'delivery': {
        title: 'Delivery & Transport Jobs – Bike, Car & Truck Drivers',
        description:
            'Explore 3000+ delivery and transport job openings in India across food, grocery, courier, and logistics sectors. Roles for bike riders, truck drivers & couriers. Salary ₹15K–50K/month with flexible shifts. Apply today!',

        image: '/images/jobprofile/11.png',
        insights: [
            '3000+ openings across food, grocery, logistics, and courier delivery.',
            'Roles available for bike riders, auto drivers, truck operators, and last-mile delivery agents.',
            'Daily payout and fuel allowance options at select companies.',
            'Flexible shifts and part-time availability for many roles.',
            'Opportunities with top platforms like Swiggy, Zomato, Dunzo, Porter & eCommerce brands.',
        ],
        tags: ['Delivery', 'Rider', 'Driver', 'Transport', 'Logistics'],
        location: 'Pan India (Urban & Semi-Urban Regions)',
        salary: '₹15,000 - ₹50,000/month',

        responsibilities: [
            'Pickup and deliver goods (food, groceries, parcels) to customers on time.',
            'Plan efficient delivery routes based on traffic and order priority.',
            'Ensure vehicle safety and documentation (license, insurance).',
            'Use mobile apps for real-time tracking, navigation, and order updates.',
            'Follow hygiene, safety, and company protocols while on duty.',
        ],

        qualifications: [
            'Valid Driving License (2-wheeler/4-wheeler).',
            'Own vehicle preferred (bike, scooter, or car); some roles offer company vehicles.',
            'Smartphone with Android/iOS (for app-based delivery).',
            'Basic reading and navigation skills (Google Maps, App usage).',
            'Freshers and experienced drivers both welcome.',
        ],

        benefits: [
            'Daily/weekly payouts available with top platforms.',
            'Fuel allowance & performance incentives.',
            'Flexible working hours — part-time & full-time both.',
            'Insurance coverage and bonuses at select employers.',
            'Work with leading brands in eCommerce, food, and retail.',
        ],

        workType: 'Full-Time / Part-Time / Contract',
        shift: 'Flexible Shifts / Day & Night Delivery Slots',

        metadata: {
            title: 'Delivery Jobs | Driver, Rider & Logistics Roles - JobHub.world',
            description:
                '🚚 3000+ Delivery & Transportation Jobs | Food/Grocery Delivery, Logistics, Courier Services | ₹15K-50K/month | Bike/Car/Truck Drivers | Apply Today!',
            keywords:
                'delivery jobs, food delivery jobs, Swiggy Zomato delivery, grocery delivery jobs, logistics jobs, truck driver jobs, bike rider jobs, courier jobs, transport jobs, last mile delivery jobs',
            author: 'JobHub.world - India\'s Largest Delivery Job Platform',
            canonical: 'https://www.jobhub.world/delivery',
            og: {
                title: '🛵 3000+ Delivery/Transport Jobs - Immediate Hiring | JobHub.world',
                description:
                    'Urgent openings: Food Delivery (₹15K-35K), Grocery Delivery (₹18K-30K), Truck Drivers (₹25K-50K), Courier Executives (₹15K-28K). Vehicle & DL required for most roles.',
                image: 'https://www.jobhub.world/images/og/delivery-jobs-og.jpg',
                url: 'https://www.jobhub.world/delivery',
            },
            twitter: {
                title: 'Delivery/Transport Jobs - 3000+ Openings',
                description:
                    'Food/grocery delivery, logistics & courier jobs available. Daily payout options. #DeliveryJobs #DriverJobs',
                image: 'https://www.jobhub.world/images/twitter/delivery-jobs-card.jpg',
            },
        },

        structuredData: [
            {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                "title": "Delivery & Transport Professional",
                "description": "Multiple roles available in food delivery, grocery delivery, logistics and courier services. Requires valid driving license and own/company vehicle depending on position.",
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": "JobHub.world",
                    "sameAs": "https://www.jobhub.world",
                    "logo": "https://www.jobhub.world/Jobhub%20logo.png"
                },
                "industry": "Transportation",
                "jobLocation": {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Multiple Locations",
                        "addressRegion": "India",
                        "addressCountry": "IN"
                    }
                },
                "baseSalary": {
                    "@type": "MonetaryAmount",
                    "currency": "INR",
                    "value": {
                        "@type": "QuantitativeValue",
                        "minValue": 15000,
                        "maxValue": 50000,
                        "unitText": "MONTH"
                    }
                },
                "jobBenefits": "Daily Payouts, Fuel Allowance, Flexible Hours",
                "datePosted": "2025-07-23",
                "validThrough": "2025-10-23",
                "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
                "experienceRequirements": {
                    "@type": "OccupationalExperienceRequirements",
                    "monthsOfExperience": 0
                },
                "requirements": "Valid Driving License, Own Vehicle (for some roles)"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Logistics Jobs",
                        "item": "https://www.jobhub.world/delivery"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Delivery & Transport Jobs",
                        "item": "https://www.jobhub.world/delivery"
                    }
                ]
            }
        ]
    },

    // Secruity guard profile and the all inside for static site
    securityguard: {
        title: 'Security Guard Jobs – Hotels, Malls & Corporate Security',
        description:
            '🛡️ 1500+ security guard jobs across hotels, malls, IT parks & residential societies. Salary ₹12K-40K/month. Ex-servicemen preferred but freshers can apply. Immediate hiring. Apply now!',

        image: '/images/jobprofile/12.png',
        insights: [
            '1500+ openings for unarmed guards, armed guards, and supervisors.',
            'Ex-servicemen preferred but many roles open to freshers.',
            'Jobs available in hotels, malls, corporate offices, IT parks, and residential complexes.',
            'Multiple shifts with overtime and shift allowances.',
            'PSARA licensed positions and physical fitness often required.',
        ],
        tags: [
            'Security Guard',
            'Hotel Security',
            'Mall Security',
            'Corporate Security',
            'Armed Guard',
            'Security Supervisor',
            'Ex-servicemen Jobs',
        ],
        location: 'Multiple Locations Across India',
        salary: '₹12,000 - ₹40,000/month',

        responsibilities: [
            'Patrolling assigned premises to ensure safety and security.',
            'Monitoring CCTV cameras and checking entry/exit logs.',
            'Managing visitor access and maintaining visitor records.',
            'Responding promptly to security breaches and emergencies.',
            'Coordinating with law enforcement and emergency responders as needed.',
        ],

        qualifications: [
            'PSARA license for armed guard roles (as applicable).',
            'Physical fitness and ability to stand/ walk for long shifts.',
            'Prior experience or ex-servicemen preferred but freshers can apply.',
            'Good communication and observation skills.',
            'Willingness to work in shifts including night shifts.',
        ],

        benefits: [
            'Uniform and safety equipment provided.',
            'Overtime pay and shift allowances.',
            'Job security with reputed hotels, malls, and corporate clients.',
            'Training and development opportunities.',
            'Career growth into supervisory and managerial roles.',
        ],

        workType: 'Full-Time / Part-Time',
        shift: 'Multiple shifts including day, night & rotational shifts',

        metadata: {
            title: 'Security Guard Jobs | Hiring for Hotels, Malls & Corporates - JobHub.world',
            description:
                '🛡️ 1500+ Security Guard Jobs | ₹12K-35K/month | Ex-Servicemen Preferred | Immediate Hiring for Hotels, Malls, IT Parks & Residential Societies | Apply Today!',
            keywords:
                'security guard jobs, hotel security jobs, mall security jobs, corporate security jobs, female security guard jobs, armed guard jobs, security supervisor jobs, bouncer jobs, event security jobs, fresher security jobs',
            author: "JobHub.world - India's Trusted Security Job Platform",
            canonical: 'https://www.jobhub.world/securityguard',
            og: {
                title: '👮 1500+ Security Guard Jobs - Immediate Hiring | JobHub.world',
                description:
                    'Urgent openings for security personnel: Unarmed Guards (₹12K-25K), Armed Guards (₹18K-35K), Supervisors (₹20K-40K). Ex-servicemen preferred but freshers can apply for many positions.',
                image: 'https://www.jobhub.world/images/og/security-jobs-og.jpg',
                url: 'https://www.jobhub.world/securityguard',
            },
            twitter: {
                title: 'Security Guard Jobs - 1500+ Openings',
                description: 'Hotel, mall & corporate security jobs available. Ex-servicemen preferred. #SecurityJobs #DefenseJobs',
                image: 'https://www.jobhub.world/images/twitter/security-jobs-card.jpg',
            },
        },

        structuredData: [
            {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                "title": "Security Guard",
                "description": "Providing security services at various establishments including hotels, malls, corporate offices and residential complexes. Multiple shifts available.",
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": "JobHub.world",
                    "sameAs": "https://www.jobhub.world",
                    "logo": "https://www.jobhub.world/Jobhub%20logo.png"
                },
                "industry": "Security Services",
                "jobLocation": {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Multiple Locations",
                        "addressRegion": "India",
                        "addressCountry": "IN"
                    }
                },
                "baseSalary": {
                    "@type": "MonetaryAmount",
                    "currency": "INR",
                    "value": {
                        "@type": "QuantitativeValue",
                        "minValue": 12000,
                        "maxValue": 40000,
                        "unitText": "MONTH"
                    }
                },
                "jobBenefits": "Uniform Provided, Overtime Pay, Shift Allowance",
                "datePosted": "2025-07-23",
                "validThrough": "2025-10-23",
                "employmentType": ["FULL_TIME", "PART_TIME"],
                "experienceRequirements": {
                    "@type": "OccupationalExperienceRequirements",
                    "monthsOfExperience": 0
                },
                "requirements": "PSARA License (for some roles), Physical Fitness"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Defense Jobs",
                        "item": "https://www.jobhub.world/securityguard"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Security Guard Jobs",
                        "item": "https://www.jobhub.world/securityguard"
                    }
                ]
            }
        ]
    },

    // Hotel Staff profile and the all inside for static site
    hotelstaff: {
        title: 'Hotel Staff Jobs – 2000+ Openings in 5-Star to Budget Hotels',
        description:
            '🏨 2000+ hotel staff jobs across front office, housekeeping, F&B service, chef & management roles. Salary ₹12K-80K/month with free accommodation and meals at most hotels. Apply today!',

        image: '/images/jobprofile/13.png',
        insights: [
            'Jobs available in leading hotel chains including Taj, Oberoi, Marriott, and more.',
            'Roles include receptionists, chefs, waiters, housekeeping staff, and management.',
            'Free accommodation and meals provided at many properties.',
            'Opportunities for freshers and experienced professionals.',
            'Positions across multiple locations in India.',
        ],
        tags: [
            'Hotel Staff',
            'Front Office Jobs',
            'Housekeeping',
            'Chef Jobs',
            'Waiter Jobs',
            'Hotel Management',
            'Banquet Staff',
            'Hospitality Jobs',
        ],
        location: 'Multiple Locations Across India',
        salary: '₹12,000 - ₹80,000/month',

        responsibilities: [
            'Managing front desk operations and guest check-ins/check-outs.',
            'Ensuring cleanliness and maintenance of rooms and public areas.',
            'Serving food and beverages with high customer service standards.',
            'Preparing and cooking meals in kitchen departments.',
            'Coordinating banquet and event services.',
        ],

        qualifications: [
            'Relevant experience or hospitality training preferred but freshers welcome.',
            'Good communication and interpersonal skills.',
            'Ability to work flexible shifts including weekends and holidays.',
            'Team player with a customer-focused attitude.',
        ],

        benefits: [
            'Free accommodation and meals at most hotel properties.',
            'Uniforms and tips provided.',
            'Opportunities for career growth within hospitality chains.',
            'Training and skill development programs.',
        ],

        workType: 'Full-Time / Part-Time / Contract',
        shift: 'Flexible shifts including rotational and weekend shifts',

        metadata: {
            title: 'Hotel Staff Jobs | 2000+ Openings in 5-Star to Budget Hotels - JobHub.world',
            description:
                '🏨 2000+ Hotel Staff Jobs | Front Office, Housekeeping, F&B Service, Chef & Management Roles | ₹12K-80K/month | Free Accommodation+Meals | Apply Today!',
            keywords:
                'hotel jobs, front office jobs, housekeeping jobs, chef jobs, waiter jobs, hotel management jobs, banquet staff jobs, hospitality jobs, fresher hotel jobs, 5-star hotel jobs',
            author: "JobHub.world - India's Leading Hospitality Job Platform",
            canonical: 'https://www.jobhub.world/hotelstaff',
            og: {
                title: '✨ 2000+ Hotel Staff Jobs - 5-Star Chains Hiring | JobHub.world',
                description:
                    'Urgent hiring for Taj, Oberoi, Marriott & other chains: Receptionists (₹15K-35K), Chefs (₹25K-80K), Waiters (₹12K-25K). Free accommodation+meals at most properties.',
                image: 'https://www.jobhub.world/images/og/hotel-jobs-og.jpg',
                url: 'https://www.jobhub.world/hotelstaff',
            },
            twitter: {
                title: 'Hotel Staff Jobs - 2000+ Openings Across India',
                description: 'Front office, housekeeping, F&B service and chef positions available. #HotelJobs #HiringNow',
                image: 'https://www.jobhub.world/images/twitter/hotel-jobs-card.jpg',
            },
        },

        structuredData: [
            {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                "title": "Hotel Staff",
                "description": "Various positions available in leading hotel chains including front office, food & beverage service, housekeeping, and kitchen departments.",
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": "JobHub.world",
                    "sameAs": "https://www.jobhub.world",
                    "logo": "https://www.jobhub.world/Jobhub%20logo.png"
                },
                "industry": "Hospitality",
                "jobLocation": {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Multiple Locations",
                        "addressRegion": "India",
                        "addressCountry": "IN"
                    }
                },
                "baseSalary": {
                    "@type": "MonetaryAmount",
                    "currency": "INR",
                    "value": {
                        "@type": "QuantitativeValue",
                        "minValue": 12000,
                        "maxValue": 80000,
                        "unitText": "MONTH"
                    }
                },
                "jobBenefits": "Accommodation, Meals, Uniform, Tips",
                "datePosted": "2025-07-23",
                "validThrough": "2025-10-23",
                "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACT"],
                "experienceRequirements": {
                    "@type": "OccupationalExperienceRequirements",
                    "monthsOfExperience": 0
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Hospitality Jobs",
                        "item": "https://www.jobhub.world/hotelstaff"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Hotel Staff Jobs",
                        "item": "https://www.jobhub.world/hotelstaff"
                    }
                ]
            }
        ]
    },

    // WareHouse profile and the all inside for static site
    warehousestaff: {
        title: 'Warehouse Jobs | Hiring Packers, Loaders & Supervisors',
        description:
            '📦 1800+ warehouse staff jobs including packers, loaders, forklift operators with ₹12K-45K/month salary. Amazon/Flipkart vendors hiring urgently. Immediate openings, apply today!',

        image: '/images/jobprofile/14.png',
        insights: [
            'Hiring for major e-commerce warehouses including Amazon & Flipkart vendors.',
            'Roles include Packers, Loaders, Forklift Operators, Inventory & Supervisors.',
            'Flexible day and night shifts available.',
            'Freshers can apply for many roles.',
            'Positions across multiple locations in India.',
        ],
        tags: [
            'Warehouse Jobs',
            'Packer Jobs',
            'Loader Jobs',
            'Forklift Operator',
            'Inventory Jobs',
            'Warehouse Supervisor',
            'Logistics Jobs',
            'E-commerce Warehouse',
            'Night Shift Warehouse',
        ],
        location: 'Multiple Locations Across India',
        salary: '₹12,000 - ₹45,000/month',

        responsibilities: [
            'Packing and preparing goods for shipment.',
            'Loading and unloading materials and products.',
            'Operating forklifts and other warehouse equipment.',
            'Managing inventory and stock levels.',
            'Supervising warehouse floor operations and staff.',
        ],

        qualifications: [
            'Basic physical fitness and ability to handle manual labor.',
            'Forklift certification preferred for operator roles.',
            'Good teamwork and communication skills.',
            'Ability to work flexible shifts including night shifts.',
            'Prior warehouse experience is a plus but not mandatory.',
        ],

        benefits: [
            'Shift allowance and overtime pay.',
            'Provision of safety gear and uniforms.',
            'Opportunities for contract, part-time and full-time employment.',
            'Work with leading e-commerce logistics companies.',
        ],

        workType: 'Full-Time / Part-Time / Contract',
        shift: 'Day and Night Shifts',

        metadata: {
            title: 'Warehouse Jobs | Hiring Packers, Loaders & Supervisors - JobHub.world',
            description:
                '📦 1800+ Warehouse Staff Jobs | Packers, Loaders, Forklift Operators | ₹12K-45K/month | Amazon/Flipkart Vendors Hiring | Immediate Openings | Apply Today!',
            keywords:
                'warehouse jobs, packer jobs, loader jobs, forklift operator jobs, inventory jobs, warehouse supervisor jobs, logistics jobs, e-commerce warehouse jobs, fresher warehouse jobs, night shift warehouse jobs',
            author: "JobHub.world - India's Leading Logistics Job Platform",
            canonical: 'https://www.jobhub.world/warehousestaff',
            og: {
                title: '🚛 1800+ Warehouse Staff Jobs - Urgent Hiring | JobHub.world',
                description:
                    'Hiring for Amazon/Flipkart warehouses: Packers (₹12K-25K), Forklift Operators (₹18K-35K), Supervisors (₹25K-45K). Day/Night shifts available. Freshers welcome for many roles.',
                image: 'https://www.jobhub.world/images/og/warehouse-jobs-og.jpg',
                url: 'https://www.jobhub.world/warehousestaff',
            },
            twitter: {
                title: 'Warehouse Jobs - E-commerce & Logistics Hiring',
                description: '1800+ warehouse openings with flexible shifts. #WarehouseJobs #LogisticsJobs',
                image: 'https://www.jobhub.world/images/twitter/warehouse-jobs-card.jpg',
            },
        },

        structuredData: [
            {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                "title": "Warehouse Staff",
                "description": "Multiple roles available in e-commerce and logistics warehouses including packing, loading, inventory management and equipment operation.",
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": "JobHub.world",
                    "sameAs": "https://www.jobhub.world",
                    "logo": "https://www.jobhub.world/Jobhub%20logo.png"
                },
                "industry": "Logistics",
                "jobLocation": {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Multiple Locations",
                        "addressRegion": "India",
                        "addressCountry": "IN"
                    }
                },
                "baseSalary": {
                    "@type": "MonetaryAmount",
                    "currency": "INR",
                    "value": {
                        "@type": "QuantitativeValue",
                        "minValue": 12000,
                        "maxValue": 45000,
                        "unitText": "MONTH"
                    }
                },
                "jobBenefits": "Shift Allowance, Overtime Pay, Safety Gear",
                "datePosted": "2025-07-23",
                "validThrough": "2025-10-23",
                "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACT"],
                "experienceRequirements": {
                    "@type": "OccupationalExperienceRequirements",
                    "monthsOfExperience": 0
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Logistics Jobs",
                        "item": "https://www.jobhub.world/warehousestaff"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Warehouse Jobs",
                        "item": "https://www.jobhub.world/warehousestaff"
                    }
                ]
            }
        ]
    },

    // Factory profile and the all inside for static site
    factoryworker: {
        title: 'Factory Worker Jobs | Production & Manufacturing Roles',
        description:
            '🏭 2500+ Factory Worker Jobs | Machine Operators, Assemblers, Packers | ₹12K-50K/month | Textile, Automotive, FMCG Factories Hiring | Apply Today!',

        image: '/images/jobprofile/15.png',
        insights: [
            'Urgent hiring in manufacturing units across textiles, automotive, FMCG sectors.',
            'Positions available for Machine Operators, Assemblers, Quality Inspectors, Packers.',
            'Overtime pay and shift allowances offered.',
            'Freshers will receive on-job training.',
            'Multiple locations across India.',
        ],
        tags: [
            'Factory Jobs',
            'Production Worker',
            'Machine Operator',
            'Assembly Line Jobs',
            'Textile Factory Jobs',
            'FMCG Factory Jobs',
            'Automotive Factory Jobs',
            'Packaging Jobs',
            'Fresher Factory Jobs',
            'Industrial Jobs',
        ],
        location: 'Multiple Locations Across India',
        salary: '₹12,000 - ₹50,000/month',

        responsibilities: [
            'Operate machinery and production equipment.',
            'Assemble products on the production line.',
            'Inspect quality of finished goods.',
            'Maintain safety standards and follow procedures.',
            'Package and prepare products for shipment.',
        ],

        qualifications: [
            'Basic physical fitness for factory work.',
            'Ability to learn and operate production machinery.',
            'Attention to detail for quality control.',
            'Willingness to work shifts including overtime.',
            'No prior experience necessary; training provided.',
        ],

        benefits: [
            'Overtime pay and shift allowance.',
            'Safety training and protective equipment provided.',
            'Opportunities for full-time, part-time, and contract roles.',
            'Work across reputed manufacturing companies.',
        ],

        workType: 'Full-Time / Part-Time / Contract',
        shift: 'Flexible shifts with overtime',

        metadata: {
            title: 'Factory Worker Jobs | Production & Manufacturing Roles - JobHub.world',
            description:
                '🏭 2500+ Factory Worker Jobs | Machine Operators, Assemblers, Packers | ₹12K-50K/month | Textile, Automotive, FMCG Factories Hiring | Apply Today!',
            keywords:
                'factory jobs, production worker jobs, machine operator jobs, assembly line jobs, textile factory jobs, FMCG factory jobs, automotive factory jobs, packaging jobs, fresher factory jobs, industrial jobs',
            author: "JobHub.world - India's Leading Manufacturing Job Platform",
            canonical: 'https://www.jobhub.world/factory',
            og: {
                title: '⚙️ 2500+ Factory Worker Jobs - Immediate Hiring | JobHub.world',
                description:
                    'Urgent openings in manufacturing units: Machine Operators (₹15K-35K), Assemblers (₹12K-25K), Quality Inspectors (₹18K-40K). Overtime pay available. Freshers trained.',
                image: 'https://www.jobhub.world/images/og/factory-jobs-og.jpg',
                url: 'https://www.jobhub.world/factory',
            },
            twitter: {
                title: 'Factory Worker Jobs - Production & Assembly Roles',
                description: '2500+ manufacturing jobs available with overtime pay. #FactoryJobs #IndustrialJobs',
                image: 'https://www.jobhub.world/images/twitter/factory-jobs-card.jpg',
            },
        },

        structuredData: [
            {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                "title": "Factory Worker",
                "description": "Production, assembly and quality control roles in manufacturing facilities across industries including textiles, automotive and consumer goods.",
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": "JobHub.world",
                    "sameAs": "https://www.jobhub.world",
                    "logo": "https://www.jobhub.world/Jobhub%20logo.png"
                },
                "industry": "Manufacturing",
                "jobLocation": {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Multiple Locations",
                        "addressRegion": "India",
                        "addressCountry": "IN"
                    }
                },
                "baseSalary": {
                    "@type": "MonetaryAmount",
                    "currency": "INR",
                    "value": {
                        "@type": "QuantitativeValue",
                        "minValue": 12000,
                        "maxValue": 50000,
                        "unitText": "MONTH"
                    }
                },
                "jobBenefits": "Overtime Pay, Shift Allowance, Safety Training",
                "datePosted": "2025-07-23",
                "validThrough": "2025-10-23",
                "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACT"],
                "experienceRequirements": {
                    "@type": "OccupationalExperienceRequirements",
                    "monthsOfExperience": 0
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Industrial Jobs",
                        "item": "https://www.jobhub.world/factory"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Factory Worker Jobs",
                        "item": "https://www.jobhub.world/factory"
                    }
                ]
            }
        ]
    },

    // Factory worker profile and it's all meta data and the contene inside the site
    // factoryworker: {
    //     title: 'Factory Worker Jobs | Production & Manufacturing Roles',
    //     description:
    //         '🏭 2500+ Factory Worker Jobs | Machine Operators, Assemblers, Packers | ₹12K-50K/month | Textile, Automotive, FMCG Factories Hiring | Apply Today!',

    //     image: '/images/jobprofile/factoryworker.png',
    //     insights: [
    //         'Urgent hiring in manufacturing units across textiles, automotive, FMCG sectors.',
    //         'Positions available for Machine Operators, Assemblers, Quality Inspectors, Packers.',
    //         'Overtime pay and shift allowances offered.',
    //         'Freshers will receive on-job training.',
    //         'Multiple locations across India.',
    //     ],
    //     tags: [
    //         'Factory Jobs',
    //         'Production Worker',
    //         'Machine Operator',
    //         'Assembly Line Jobs',
    //         'Textile Factory Jobs',
    //         'FMCG Factory Jobs',
    //         'Automotive Factory Jobs',
    //         'Packaging Jobs',
    //         'Fresher Factory Jobs',
    //         'Industrial Jobs',
    //     ],
    //     location: 'Multiple Locations Across India',
    //     salary: '₹12,000 - ₹50,000/month',

    //     responsibilities: [
    //         'Operate machinery and production equipment.',
    //         'Assemble products on the production line.',
    //         'Inspect quality of finished goods.',
    //         'Maintain safety standards and follow procedures.',
    //         'Package and prepare products for shipment.',
    //     ],

    //     qualifications: [
    //         'Basic physical fitness for factory work.',
    //         'Ability to learn and operate production machinery.',
    //         'Attention to detail for quality control.',
    //         'Willingness to work shifts including overtime.',
    //         'No prior experience necessary; training provided.',
    //     ],

    //     benefits: [
    //         'Overtime pay and shift allowance.',
    //         'Safety training and protective equipment provided.',
    //         'Opportunities for full-time, part-time, and contract roles.',
    //         'Work across reputed manufacturing companies.',
    //     ],

    //     workType: 'Full-Time / Part-Time / Contract',
    //     shift: 'Flexible shifts with overtime',

    //     metadata: {
    //         title: 'Factory Worker Jobs | Production & Manufacturing Roles - JobHub.world',
    //         description:
    //             '🏭 2500+ Factory Worker Jobs | Machine Operators, Assemblers, Packers | ₹12K-50K/month | Textile, Automotive, FMCG Factories Hiring | Apply Today!',
    //         keywords:
    //             'factory jobs, production worker jobs, machine operator jobs, assembly line jobs, textile factory jobs, FMCG factory jobs, automotive factory jobs, packaging jobs, fresher factory jobs, industrial jobs',
    //         author: "JobHub.world - India's Leading Manufacturing Job Platform",
    //         canonical: 'https://www.jobhub.world/factory',
    //         og: {
    //             title: '⚙️ 2500+ Factory Worker Jobs - Immediate Hiring | JobHub.world',
    //             description:
    //                 'Urgent openings in manufacturing units: Machine Operators (₹15K-35K), Assemblers (₹12K-25K), Quality Inspectors (₹18K-40K). Overtime pay available. Freshers trained.',
    //             image: 'https://www.jobhub.world/images/og/factory-jobs-og.jpg',
    //             url: 'https://www.jobhub.world/factory',
    //         },
    //         twitter: {
    //             title: 'Factory Worker Jobs - Production & Assembly Roles',
    //             description: '2500+ manufacturing jobs available with overtime pay. #FactoryJobs #IndustrialJobs',
    //             image: 'https://www.jobhub.world/images/twitter/factory-jobs-card.jpg',
    //         },
    //     },

    //     structuredData: [
    //         {
    //             "@context": "https://schema.org",
    //             "@type": "JobPosting",
    //             "title": "Factory Worker",
    //             "description": "Production, assembly and quality control roles in manufacturing facilities across industries including textiles, automotive and consumer goods.",
    //             "hiringOrganization": {
    //                 "@type": "Organization",
    //                 "name": "JobHub.world",
    //                 "sameAs": "https://www.jobhub.world",
    //                 "logo": "https://www.jobhub.world/Jobhub%20logo.png"
    //             },
    //             "industry": "Manufacturing",
    //             "jobLocation": {
    //                 "@type": "Place",
    //                 "address": {
    //                     "@type": "PostalAddress",
    //                     "addressLocality": "Multiple Locations",
    //                     "addressRegion": "India",
    //                     "addressCountry": "IN"
    //                 }
    //             },
    //             "baseSalary": {
    //                 "@type": "MonetaryAmount",
    //                 "currency": "INR",
    //                 "value": {
    //                     "@type": "QuantitativeValue",
    //                     "minValue": 12000,
    //                     "maxValue": 50000,
    //                     "unitText": "MONTH"
    //                 }
    //             },
    //             "jobBenefits": "Overtime Pay, Shift Allowance, Safety Training",
    //             "datePosted": "2025-07-23",
    //             "validThrough": "2025-10-23",
    //             "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACT"],
    //             "experienceRequirements": {
    //                 "@type": "OccupationalExperienceRequirements",
    //                 "monthsOfExperience": 0
    //             }
    //         },
    //         {
    //             "@type": "BreadcrumbList",
    //             "itemListElement": [
    //                 {
    //                     "@type": "ListItem",
    //                     "position": 1,
    //                     "name": "Industrial Jobs",
    //                     "item": "https://www.jobhub.world/factory"
    //                 },
    //                 {
    //                     "@type": "ListItem",
    //                     "position": 2,
    //                     "name": "Factory Worker Jobs",
    //                     "item": "https://www.jobhub.world/factory"
    //                 }
    //             ]
    //         }
    //     ]
    // },


    /**
        @DynamicData you can add more jobs here `./app/jobprofiles/[slug]/page.js
        @UcanChange above file can be modified and do stuff what u want 
     * 
     */
};