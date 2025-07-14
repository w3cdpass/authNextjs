'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SignIn({ user }) {
    const router = useRouter();
    const [form, setForm] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setMessage('');
        
        const res = await fetch('/api/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        // console.log(res);
        const data = await res.json();
        // console.log(data)
        if (res.ok) {
            router.push(`/user/${data.user.id}/dashboard?role=${data.user.role}`); // ✅ Redirect to dashboard
            user = res;
        } else {
            setMessage(`❌ ${data.message}`);
        }
    }

    return (

        <div className='w-full flex justify-end  bg-green-600'>
            <div className='w-[95%] flex gap-5 my-20 justify-between'>
                <div className='bg-gray-300 rounded-lg p-5 w-[30%] '>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="Email"
                            required
                        /><br />
                        <input
                            type="password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            placeholder="Password"
                            required
                        /><br />
                        <button type="submit">Sign In</button>
                    </form>
                    <p>{message}</p>
                </div>
                <div className='w-[60%] overflow-hidden'>
                    <div className='overflow-hidden bg-green-300 gap  rounded-tl-lg '>
                        <div className='slider-track flex w-full  '>
                            <Image src={'/images/SLIDESIMAGES/SLIDE_1.jpg'} alt='slider one' width={800} height={800} className='slider2 ' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_1.jpg'} alt='slider one' width={800} height={800} className='slider2 ' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_1.jpg'} alt='slider one' width={800} height={800} className='slider2 ' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_1.jpg'} alt='slider one' width={800} height={800} className='slider2 ' />
                            {/* <Image src={'/images/SLIDESIMAGES/SLIDE_1.jpg'} alt='slider one' width={800} height={800} className='slider2' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_1.jpg'} alt='slider one' width={800} height={800} className='slider2' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_1.jpg'} alt='slider one' width={800} height={800} className='slider2' /> */}
                        </div>
                    </div>
                    <div className='overflow-hidden bg-green-300 gap w-[100%]'>
                        <div className='flex '>
                            <Image src={'/images/SLIDESIMAGES/SLIDE_1.jpg'} alt='slider one' width={800} height={800} className='slider2 ' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_1.jpg'} alt='slider one' width={800} height={800} className='slider2 ' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_1.jpg'} alt='slider one' width={800} height={800} className='slider2 ' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_1.jpg'} alt='slider one' width={800} height={800} className='slider2 ' />
                        </div>
                    </div>
                    <div className='overflow-hidden bg-green-300 gap w-[100%]'>
                        <div className='flex '>
                            <Image src={'/images/SLIDESIMAGES/SLIDE_3.jpg'} alt='slider one' width={800} height={800} className='slider2' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_3.jpg'} alt='slider one' width={800} height={800} className='slider2' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_3.jpg'} alt='slider one' width={800} height={800} className='slider2' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_3.jpg'} alt='slider one' width={800} height={800} className='slider2' />
                        </div>
                    </div>
                    <div className='overflow-hidden bg-green-300 gap w-[100%]'>
                        <div className='flex '>
                            <Image src={'/images/SLIDESIMAGES/SLIDE_3.jpg'} alt='slider one' width={800} height={800} className='slider2' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_3.jpg'} alt='slider one' width={800} height={800} className='slider2' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_3.jpg'} alt='slider one' width={800} height={800} className='slider2' />
                            <Image src={'/images/SLIDESIMAGES/SLIDE_3.jpg'} alt='slider one' width={800} height={800} className='slider2' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
