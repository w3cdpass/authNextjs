'use client';
import { useRouter } from "next/navigation"
import { useState } from "react";

export default function Canidate() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
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
                setForm({ name: '', email: '', password: '' })
            } else {
                setMessage(`${data.message || `Failed to create Candiate User`}`)
            }
        } catch (error) {
            setMessage(`❌ Error: ${error.message}`);
        }
    }
    return (
        <>
            <div style={{ padding: '2rem' }}>
                <h1>Create New User</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name: <br />
                        <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                        />
                    </label>
                    <br /><br />
                    <label>
                        Email: <br />
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />
                    </label>
                    <br /><br />
                    <label>
                        Password: <br />
                        <input
                            type="password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            required
                        />
                    </label>
                    <br /> <br />
                    <br /><br />
                    <button type="submit">Create User</button>
                </form>
                <p style={{ marginTop: '1rem' }}>{message}</p>
            </div>
        </>
    )
};