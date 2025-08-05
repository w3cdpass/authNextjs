"use client";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import Toast from "@/components/Toast/Snackbar";
export default function ContactUs() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [toast, setToast] = useState({ show: false, type: "success", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const closeToast  = () => setToast({ ...toast, show: false });

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate
        const newErrors = {};
        if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
        if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setToast({
                show: true,
                type: "error",
                message: "❗ Please fill in all required fields.",
            });
            return;
        }

        setErrors({});

        emailjs.send(
            "service_j46mlno",       // your service ID
            "template_f8jx8at",      // your template ID
            formData,
            "xGGiT_8LYxsZzpBz4"      // your public key
        )
            .then(() => {
                setToast({
                    show: true,
                    type: "success",
                    message: "✅ Your message has been sent to JobHub. We'll contact you soon.",
                });
                setFormData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            })
            .catch(() => {
                setToast({
                    show: true,
                    type: "error",
                    message: "⚠️ Failed to send message. Please try again later.",
                });
            });
    };
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Get in Touch</h1>
                    <p className="text-gray-600 text-sm">We’re here to answer all your questions and guide your journey with transparency and care.</p>
                </div>

                {/* Services/Resources Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">What We Offer</h2>
                        <ul className="text-gray-700 list-disc pl-5 space-y-2 text-sm">
                            <li>Mock Interviews with Feedback</li>
                            <li>Personalized Resume Guidance</li>
                            <li>Industry-Specific Preparation Resources</li>
                            <li>Career Counseling & Role Matching</li>
                            <li>Dedicated Support Team</li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Why W{`e'r`}e Different</h2>
                        <p className="text-sm text-gray-700 mb-2">
                            Our services are built on honesty, clarity, and practical value. We explain everything — no hidden processes, no vague answers.
                        </p>
                        <p className="text-sm text-gray-700">
                            Whether yo{`u'r`}e a fresher or a career switcher, we make sure every step is crystal clear and tailored to your path.
                        </p>
                    </div>
                </div>

                {/* Contact Form and Info */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <form onSubmit={sendEmail} className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600"
                                    placeholder="John"
                                />
                                {errors.first_name && <p className="text-sm text-red-600">{errors.first_name}</p>}
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600"
                                    placeholder="Doe"
                                />
                                {errors.last_name && <p className="text-sm text-red-600">{errors.last_name}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600"
                                placeholder="you@example.com"
                            />
                            {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600"
                                placeholder="123-456-7890"
                            />
                            {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600"
                                placeholder="How can we help you?"
                            ></textarea>
                            {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-lime-600 text-white py-2 px-4 rounded-md hover:bg-lime-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                    <Toast show={toast.show} message={toast.message} type={toast.type} onClose={closeToast} />

                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-xl shadow-md space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                        <p className="text-gray-600 text-sm">
                            Have questions or need help? Reach out to us through the details below.
                        </p>
                        <div className="text-sm text-gray-700 space-y-2">
                            <p><strong>Email:</strong> support@jobhubworld.com</p>
                            <p><strong>Phone:</strong> +91 98765 43210</p>
                            <p><strong>Location:</strong> Plot 27, Sector 42, Chandigarh, India</p>
                            <p><strong>Working Hours:</strong> Mon – Fri, 9:00 AM – 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
