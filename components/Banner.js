import Link from "next/link"

export default function Banner() {
    return (
        <div className="hidden  md:flex   justify-around w-full p-5  bg-[#008000] ">
            <div className="w-[85%] flex justify-between  sm:text-[18px] lg:text-[20px] text-stone-50">
                <p>Your dream job is just a click away</p>
                <p>Have any questions? +91 8512827174</p>
                <div className="flex gap-4 ">
                    <Link href=""><i className="fa-brands fa-facebook-f" /></Link>
                    <Link href=""><i className="fa-brands fa-linkedin-in" /></Link>
                    <Link href=""><i className="fa-brands fa-instagram" /></Link>
                </div>
            </div>
        </div>
    )
}