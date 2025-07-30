import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  title: "JobHub - Best Job Portal in Chandigarh | Hire & Get Hired",
  description:
    "JobHub - Find the best jobs in Chandigarh, India. Post jobs, hire candidates, and manage recruitment with our employer & admin dashboard services.",
  keywords:
    "jobs in Chandigarh, job portal, recruitment, employer dashboard, admin dashboard, hiring, fresher jobs, experienced jobs, Chandigarh jobs",
  authors: [{ name: "JobHub", url: "https://www.jobhub.world" }],
  robots: "index, follow",
  metadataBase: new URL("https://www.jobhub.world"),
  icons: {
    icon: "/log.ico",
    shortcut: "/log.ico",
    apple: "/log.ico",
  },
  openGraph: {
    title: "JobHub - Best Job Portal in Chandigarh | Hire & Get Hired",
    description:
      "Find top jobs in Chandigarh or post vacancies for free. Manage recruitment with our employer & admin dashboard services.",
    url: "https://www.jobhub.world",
    siteName: "JobHub",
    images: [
      {
        url: "https://raw.githubusercontent.com/Vrecruiter-Project/socialAssests/refs/heads/main/socialMediaOG.png",
        width: 1200,
        height: 630,
        alt: "JobHub OG Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobHub - Best Job Portal in Chandigarh | Hire & Get Hired",
    description:
      "Find top jobs in Chandigarh or post vacancies for free. Manage recruitment with our employer & admin dashboard services.",
    site: "@JobHub_world",
    creator: "@JobHub_world",
    images: [
      "https://raw.githubusercontent.com/Vrecruiter-Project/socialAssests/refs/heads/main/socialMediaOG.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Extra Meta */}
        <meta name="geo.region" content="IN-CH" />
        <meta name="geo.placename" content="Chandigarh" />
        <meta
          name="geo.position"
          content="30.638151602504394;76.82510128606455"
        />
        <meta
          name="ICBM"
          content="30.638151602504394;76.82510128606455"
        />
        <link rel="canonical" href="https://www.jobhub.world" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JobHub",
              url: "https://www.jobhub.world/",
              logo: "https://www.jobhub.world/Jobhub%20logo.png",
              description:
                "Leading job portal in Chandigarh, India, connecting employers and job seekers with advanced dashboard services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "25th Unit, 3rd Floor, Sushma infinium",
                addressLocality: "Zirakpur",
                addressRegion: "Chandigarh",
                postalCode: "140603",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8512827174",
                contactType: "customer service",
                email: "info.jobhubworld@gmail.com",
              },
              sameAs: [
                "https://www.facebook.com/people/JobHubworld/61575148695953/",
                "https://www.linkedin.com/in/jobhub-world-5559a7361/",
                "https://www.instagram.com/jobhub_world?igsh=a2hsb3dmdDV1azYw",
              ],
            }),
          }}
        />
      </head>
      <body>
        {/* <Banner /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
