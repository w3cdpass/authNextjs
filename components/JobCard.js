'use client';
import { useState } from 'react';

export default function JobCard({ job }) {
  const [message, setMessage] = useState('');

  const handleApply = async () => {
    setMessage('');
    try {
      const res = await fetch(`/api/jobs/${job._id}/apply`, {
        method: 'POST',
        credentials: 'include' // important to send cookies (token)
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`✅ ${data.message}`);
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="border p-4 mb-4">
      <h2 className="text-xl font-bold">{job.jobtitle}</h2>
      <p>{job.companyName}</p>
      <button onClick={handleApply} className="bg-blue-500 text-white px-4 py-2 mt-2">
        Apply
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}