"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Toast from "../Toast/Snackbar";

export default function SubscribeMail() {
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
                setToast({ show: true, message: 'Subscribed to Jobhub.world!', type: 'success' });
                formRef.current.reset();
            },
            () => {
                setToast({ show: true, message: 'Failed to subscribe.', type: 'error' });
            }
        );
    };

    const closeToast = () => setToast(prev => ({ ...prev, show: false }));

    return (
        <>
            <form className='p-4' ref={formRef} onSubmit={sendEmail}>
                <input type='email' placeholder='Get Latest Newsletter from JobHub world' className='w-full p-3  rounded-lg outline-lime-300 border' />
                <button type='submit' className='text-2xl bg-green-400 p-2 rounded-lg mt-3 '>Subscribe News</button>
            </form>
            <Toast show={toast.show} message={toast.message} type={toast.type} onClose={closeToast} />
        </>
    )
}