import Link from "next/link"

export default function Banner() {
    return (
        <div className="hidden  md:flex   justify-around w-full p-5  bg-[#008000] ">
            <div className="w-[85%] flex justify-between  sm:text-[18px] lg:text-[20px] text-stone-50">
                <p>Your dream job is just a click away</p>
                <p>Have any questions? +91 8512827174</p>
                <div className="flex gap-4 ">
                    <Link href="https://www.facebook.com/people/JobHubworld/61575148695953/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f" /></Link>
                    <Link href="https://www.linkedin.com/in/jobhub-world-5559a7361/" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
                    <Link href="https://www.instagram.com/jobhub_world?igsh=a2hsb3dmdDV1azYw" target="_blank"><i className="fa-brands fa-instagram" /></Link>
                </div>
            </div>
        </div>
    )
}