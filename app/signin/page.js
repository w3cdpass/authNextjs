'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
        
        if (res.ok) {
            router.push(`/user/${data.user.id}/dashboard`); // ✅ Redirect to dashboard
            user = res;
        } else {
            setMessage(`❌ ${data.message}`);
        }
    }

    return (
        <div>
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
    );
}
