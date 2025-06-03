'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CandidateLogin() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const router = useRouter();

    async function handleLogin(e) {
        e.preventDefault();
        setMessage('');

        try {
            const res = await fetch('/api/candidate/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                router.push(`/canidate/${data.candidate.id}/dashboard`);
            } else {
                setMessage(data.message || 'Login failed');
            }
        } catch (err) {
            setMessage('❌ Error: ' + err.message);
        }
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Candidate Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email:<br />
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />
                </label>
                <br /><br />
                <label>
                    Password:<br />
                    <input
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        required
                    />
                </label>
                <br /><br />
                <button type="submit">Login</button>
            </form>
            <p style={{ marginTop: '1rem' }}>{message}</p>
        </div>
    );
}
