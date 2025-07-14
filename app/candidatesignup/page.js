"use client";

import CandidateSignUpPagination, {
  SignUpForm,
} from "@/components/CanidateSignUpPage/Pagination2";

export default function Canidate() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        dob: '',
        gender: '',
        address: ''|| null,
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
                router.push(`/canidate/${data.candiates.id}/dashboard`)
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
    return (
        <>
            <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Candidate Registration</h1>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label>
                                Full Name*:
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    required
                                    style={{ width: '100%', padding: '0.5rem' }}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Email*:
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    required
                                    style={{ width: '100%', padding: '0.5rem' }}
                                />
                            </label>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label>
                                Password* (min 6 characters):
                                <input
                                    type="password"
                                    value={form.password}
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                    required
                                    minLength={6}
                                    style={{ width: '100%', padding: '0.5rem' }}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Phone Number:
                                <input
                                    type="tel"
                                    value={form.phoneNumber}
                                    onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                                    style={{ width: '100%', padding: '0.5rem' }}
                                />
                            </label>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label>
                                Date of Birth:
                                <input
                                    type="date"
                                    value={form.dob}
                                    onChange={(e) => setForm({ ...form, dob: e.target.value })}
                                    style={{ width: '100%', padding: '0.5rem' }}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Gender:
                                <select
                                    value={form.gender}
                                    onChange={(e) => setForm({ ...form, gender: e.target.value })}
                                    style={{ width: '100%', padding: '0.5rem' }}
                                >
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label>
                                Are you a fresher?
                                <select
                                    value={form.fresher}
                                    onChange={(e) => setForm({ ...form, fresher: e.target.value === 'true' })}
                                    style={{ width: '100%', padding: '0.5rem' }}
                                >
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label>
                            Address:
                            <textarea
                                value={form.address || null}
                                onChange={(e) => setForm({ ...form, address: e.target.value })}
                                style={{ width: '100%', padding: '0.5rem', minHeight: '80px' }}
                            />
                        </label>
                    </div>

                    {!form.fresher && (
                        <div>
                            <label>
                                Experience (if any):
                                <textarea
                                    value={form.experience || null}
                                    onChange={(e) => setForm({ ...form, experience: e.target.value })}
                                    style={{ width: '100%', padding: '0.5rem', minHeight: '80px' }}
                                    placeholder="Describe your work experience"
                                />
                            </label>
                        </div>
                    )}

                    <div>
                        <h3>Education Details</h3>
                        {form.education.map((edu, index) => (
                            <div key={index} style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem', borderRadius: '4px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <label>
                                            Qualification:
                                            <input
                                                type="text"
                                                value={edu.qualification}
                                                onChange={(e) => handleEducationChange(index, 'qualification', e.target.value)}
                                                style={{ width: '100%', padding: '0.5rem' }}
                                                placeholder="e.g., B.Tech, B.Sc, etc."
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Field of Study:
                                            <input
                                                type="text"
                                                value={edu.fieldOfStudy}
                                                onChange={(e) => handleEducationChange(index, 'fieldOfStudy', e.target.value)}
                                                style={{ width: '100%', padding: '0.5rem' }}
                                                placeholder="e.g., Computer Science, Mechanical Engineering"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label>
                                            Education Progress:
                                            <input
                                                type="text"
                                                value={edu.educationProgress}
                                                onChange={(e) => handleEducationChange(index, 'educationProgress', e.target.value)}
                                                style={{ width: '100%', padding: '0.5rem' }}
                                                placeholder="e.g., Completed, Pursuing"
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Year of Passing:
                                            <input
                                                type="text"
                                                value={edu.yearPass}
                                                onChange={(e) => handleEducationChange(index, 'yearPass', e.target.value)}
                                                style={{ width: '100%', padding: '0.5rem' }}
                                                placeholder="e.g., 2020"
                                            />
                                        </label>
                                    </div>
                                </div>
                                {index > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => removeEducationField(index)}
                                        style={{ marginTop: '0.5rem', padding: '0.3rem 0.6rem', background: '#ff4444', color: 'white', border: 'none', borderRadius: '4px' }}
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addEducationField}
                            style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
                        >
                            Add Another Education
                        </button>
                    </div>

                    <button
                        type="submit"
                        style={{ padding: '0.8rem', background: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1rem', cursor: 'pointer' }}
                    >
                        Create Account
                    </button>
                </form>
                <p style={{ marginTop: '1rem', color: message.includes('Error') ? 'red' : 'green', textAlign: 'center' }}>
                    {message}
                </p>
            </div>
        </>
    )
};