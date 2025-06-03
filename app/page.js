'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[rgb(122,162,241)]">
      <Image src='https://res.cloudinary.com/dcnajwwea/image/upload/v1748933206/pngwing.com_1_fy8sa2.png' alt="Docker image from Jobhub" width={400} height={300} blurDataURL="data" placeholder="blur" />
    </div>
  )
}
