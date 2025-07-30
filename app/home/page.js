import HomePage from "@/components/Home";
import Script from "next/script";

export default function Home() {
    return (
        <>
            <HomePage />
            {/* Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-S3T466P5PT"
                strategy="afterInteractive"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-S3T466P5PT');
                    `,
                }}
            />
        </>
    );
}
