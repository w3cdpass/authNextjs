"use client";

import CandidateSignUpPagination, {
    SignUpForm,
} from "@/components/CanidateSignUpPage/Pagination2";
import { useRouter } from "next/navigation";
import { useState } from "react";
import confetti from "canvas-confetti";
export default function Canidate() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        dob: '',
        gender: '',
        address: '' || null,
        education: [{
            qualification: '',
            fieldOfStudy: '',
            educationProgress: '',
            yearPass: ''
        }],
        fresher: true,
        experience: '' || null
    });
    const [message, setMessage] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        setMessage('');
        try {
            const res = await fetch('/api/candidate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            })
            const data = await res.json();
            console.log(data)
            if (res.ok) {
                setTimeout(router.push(`/canidate/${data.candiates.id}/dashboard`), 3000)
                setMessage('Candiate Created Successfully');
                setForm({
                    name: '',
                    email: '',
                    password: '',
                    phoneNumber: '',
                    dob: '',
                    gender: '',
                    address: '',
                    education: [{
                        qualification: '',
                        fieldOfStudy: '',
                        educationProgress: '',
                        yearPass: ''
                    }],
                    fresher: true,
                    experience: ''
                })
            } else {
                setMessage(`${data.message || `Failed to create Candiate User`}`)
            }

        // function randomInRange(min, max) {
        //     return Math.random() * (max - min) + min;
        // }
        // confetti({
        //     angle: randomInRange(55, 125),
        //     spread: randomInRange(90, 150),
        //     particleCount: randomInRange(60, 100),
        //     origin: { y: 1 },
        // });
        } catch (error) {
            setMessage(`❌ Error: ${error.message}`);
        }
    }
    const handleEducationChange = (index, field, value) => {
        const updatedEducation = [...form.education];
        updatedEducation[index][field] = value;
        setForm({ ...form, education: updatedEducation });
    };

    const addEducationField = () => {
        setForm({
            ...form,
            education: [
                ...form.education,
                {
                    qualification: '',
                    fieldOfStudy: '',
                    educationProgress: '',
                    yearPass: ''
                }
            ]
        });
    };

    const removeEducationField = (index) => {
        const updatedEducation = form.education.filter((_, i) => i !== index);
        setForm({ ...form, education: updatedEducation });
    };

    const handleClick = () => {
        // e.preventDefault()
        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }
        confetti({
            angle: randomInRange(55, 125),
            spread: randomInRange(90, 150),
            particleCount: randomInRange(100, 300),
            origin: { y: 1 },
        });
    };
    return (
        <>
            <div className="mt-1.5 p-8 max-w-4xl mx-auto font-sans bg-gray-50 rounded-lg shadow-md">
                <div className="text-center mb-8 pb-4 border-b border-gray-200">
                    <h1 className="max-sm:text-2xl m-0 text-gray-800 text-3xl font-semibold">Candidate Registration Form</h1>
                    <p className="max-sm:text-sm text-gray-500 mt-2">Complete your profile to access exclusive job opportunities</p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid gap-6 bg-white p-8 rounded-lg shadow-sm"
                >
                    {/* Row 1: Full Name & Email (2 columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Full Name*
                            </label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Email*
                            </label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md"
                                placeholder="your.email@example.com"
                            />
                        </div>
                    </div>

                    {/* Row 2: Password & Phone (2 columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Password* (min 6 characters)
                            </label>
                            <input
                                type="password"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                required
                                minLength={6}
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                value={form.phoneNumber}
                                onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-md"
                                placeholder="+1 234 567 8900"
                            />
                        </div>
                    </div>

                    {/* Row 3: DOB/Gender (2 cols) & Fresher (1 col) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* DOB and Gender combined in 2 columns */}
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    value={form.dob}
                                    onChange={(e) => setForm({ ...form, dob: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Gender
                                </label>
                                <select
                                    value={form.gender}
                                    onChange={(e) => setForm({ ...form, gender: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-md appearance-none bg-select-arrow bg-no-repeat bg-right-2 bg-[length:16px]"
                                >
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                </select>
                            </div>
                        </div>

                        {/* Fresher status in its own column */}
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Are you a fresher?
                            </label>
                            <select
                                value={form.fresher}
                                onChange={(e) => setForm({ ...form, fresher: e.target.value === 'true' })}
                                className="w-full p-3 border border-gray-300 rounded-md appearance-none bg-select-arrow bg-no-repeat bg-right-2 bg-[length:16px]"
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                    </div>

                    {/* Address (full width) */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Address
                        </label>
                        <textarea
                            value={form.address || ''}
                            onChange={(e) => setForm({ ...form, address: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-md min-h-[100px]"
                            placeholder="Street, City, State, ZIP Code"
                        />
                    </div>

                    {/* Experience (conditional) */}
                    {!form.fresher && (
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Experience (if any)
                            </label>
                            <textarea
                                value={form.experience || ''}
                                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-md min-h-[100px]"
                                placeholder="Describe your work experience, including company names, positions, and duration"
                            />
                        </div>
                    )}

                    {/* Education Section */}
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                        <h3 className="mt-0 mb-6 text-gray-800 text-xl font-semibold flex items-center">
                            <span className="mr-3 text-blue-500 text-2xl">🎓</span>
                            Education Details
                        </h3>
                        {form.education.map((edu, index) => (
                            <div key={index} className="relative border border-gray-200 p-5 mb-5 rounded-lg bg-white">
                                {index > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => removeEducationField(index)}
                                        className="absolute top-2 right-2 px-2 py-1 bg-red-600 text-white border-none rounded text-sm flex items-center"
                                    >
                                        <span className="mr-1">×</span> Remove
                                    </button>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                                    <div>
                                        <label className="block mb-2 font-medium text-gray-700 text-sm">
                                            Qualification
                                        </label>
                                        <input
                                            type="text"
                                            value={edu.qualification}
                                            onChange={(e) => handleEducationChange(index, 'qualification', e.target.value)}
                                            className="w-full p-2.5 border border-gray-300 rounded-md text-sm"
                                            placeholder="e.g., B.Tech, B.Sc, etc."
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 font-medium text-gray-700 text-sm">
                                            Field of Study
                                        </label>
                                        <input
                                            type="text"
                                            value={edu.fieldOfStudy}
                                            onChange={(e) => handleEducationChange(index, 'fieldOfStudy', e.target.value)}
                                            className="w-full p-2.5 border border-gray-300 rounded-md text-sm"
                                            placeholder="e.g., Computer Science, Mechanical Engineering"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block mb-2 font-medium text-gray-700 text-sm">
                                            Education Progress
                                        </label>
                                        <select
                                            value={edu.educationProgress}
                                            onChange={(e) => handleEducationChange(index, 'educationProgress', e.target.value)}
                                            className="w-full p-2.5 border border-gray-300 rounded-md text-sm appearance-none bg-select-arrow bg-no-repeat bg-right-2 bg-[length:16px]"
                                        >
                                            <option value="">Select</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Pursuing">Pursuing</option>
                                            <option value="Dropped">Dropped</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block mb-2 font-medium text-gray-700 text-sm">
                                            Year of Passing
                                        </label>
                                        <input
                                            type="text"
                                            value={edu.yearPass}
                                            onChange={(e) => handleEducationChange(index, 'yearPass', e.target.value)}
                                            className="w-full p-2.5 border border-gray-300 rounded-md text-sm"
                                            placeholder="e.g., 2020"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addEducationField}
                            className="max-sm:text-[0.7rem] w-full px-5 py-3 bg-green-500 text-white border-none rounded flex items-center justify-center transition-colors hover:bg-green-600"
                        >
                            <span className="mr-2 text-xl ">+</span> Add Another Education
                        </button>
                    </div>
                    <div className="text-center">
                        <a
                            className="review-btn border-solid border-b-4 rounded-sm border-b-blue-300 text-xl text-center text-green-500"
                            href="http://search.google.com/local/writereview?placeid=ChIJtzfCMXJuNCQRkPYiWBYEXaw"
                            target="_blank"
                        >
                            🌟Leave a Google Review🌟
                        </a>
                    </div>
                    {/* Submit Button */}
                    <button
                        onClick={() => handleClick()}
                        type="submit"
                        className="w-full p-4 bg-gradient-to-r from-green-500 to-green-800 text-white font-semibold rounded-lg shadow transition-shadow hover:shadow-md"
                    >
                        Complete Registration
                    </button>
                </form>
                    {/* <div className="p-3 bg-amber-300" onClick={() => handleClick()}>Confetti</div> */}
                {/* Status Message */}
                {message && (
                    <p className={`mt-6 text-center p-3 rounded font-medium ${message.includes('Error')
                        ? 'text-red-600 bg-red-50'
                        : 'text-green-600 bg-green-50'
                        }`}>
                        {message}
                    </p>
                )}
            </div>
        </>
    )
};