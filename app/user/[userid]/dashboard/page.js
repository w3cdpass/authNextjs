"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardPage() {

  const { userid } = useParams();

  const [form, setForm] = useState({
    jobtitle: '',
    description: '',
    numberOfPositions: '',
    location: '',
  });

  const [message, setMessage] = useState('');
  const [jobs, setJobs] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [allJobs, setAllJobs] = useState([]);

  // Fetch jobs created by the user
  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch(`/api/jobs/${userid}`);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      }
    }


    if (userid) {
      fetchJobs();
    }
  }, [userid]);
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch('/api/users/me');
      const data = await res.json();
      if (res.ok) {
        setName(data.user.name);
        setRole(data.user.role);
      } else {
        setName('Guest'); // fallback
      }
    }
    fetchUser();
  }, []);


  async function fetchAllJobs() {
    const res = await fetch('/api/jobs', { method: 'GET' }); // assume this endpoint returns ALL jobs
    const data = await res.json();
    setAllJobs(data.job);
  }

  useEffect(() => {
    if (role === 'admin') {
      fetchAllJobs();
    }
  }, [role]);

  // Handle form field changes
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  // Submit form and create job
  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...form, user: userid })  // include user id here
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setMessage('✅ Job created successfully!');
      setForm({
        jobtitle: '',
        description: '',
        numberOfPositions: '',
        location: '',
      });

      // Refresh job list
      const updatedRes = await fetch(`/api/jobs/${userid}`);
      const updatedJobs = await updatedRes.json();
      await fetchAllJobs()
      setJobs(updatedJobs);

    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  }

  return (
    <div className="p-6">
      <div className='flex justify-end mb-6 text-sm text-gray-500'>Hello{name}</div>

      <h2 className="text-2xl font-bold mb-4">Create a Job</h2>
      <form className='mb-8' onSubmit={handleSubmit}>
        <label htmlFor='jobtitle'>Job Title</label><br />
        <input
          className='border my-1 p-1 w-full'
          type='text'
          name='jobtitle'
          value={form.jobtitle}
          onChange={handleChange}
          placeholder='Enter job title'
          required
        /><br />

        <label htmlFor='description'>Description</label><br />
        <textarea
          className='border my-1 p-1 w-full'
          name='description'
          value={form.description}
          onChange={handleChange}
          placeholder='Enter job description'
          required
        /><br />

        <label htmlFor='numberOfPositions'>Number of Positions</label><br />
        <input
          className='border my-1 p-1 w-full'
          type='number'
          name='numberOfPositions'
          value={form.numberOfPositions}
          onChange={handleChange}
          min='1'
          required
        /><br />

        <label htmlFor='location'>Location</label><br />
        <input
          className='border my-1 p-1 w-full'
          type='text'
          name='location'
          value={form.location}
          onChange={handleChange}
          placeholder='Enter job location'
          required
        /><br />

        <button className='bg-green-500 text-white p-2 mt-3 rounded' type='submit'>Submit</button>
      </form>

      {message && <p className='mb-6 text-sm'>{message}</p>}
      <div className='flex justify-around'>
        <div>
          <h2 className="text-xl font-semibold mb-3">Jobs You Created</h2>
          {jobs.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            <ul>
              {jobs.map((job) => (
                <li key={job._id} className="mb-2 p-3 border rounded bg-gray-100">
                  <h3 className="font-bold">{job.jobtitle}</h3>
                  <p>{job.description}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Positions:</strong> {job.numberOfPositions}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          {role === 'admin' && (
            <div>
              <h2 className="text-xl font-semibold mb-3">All Jobs (Admin View)</h2>
              {allJobs.length === 0 ? (
                <p>No jobs found.</p>
              ) : (
                <ul>
                  {allJobs.map((job) => (
                    <li key={job._id} className="mb-2 p-3 border rounded bg-gray-200">
                      <h3 className="font-bold">{job.jobtitle}</h3>
                      <p>{job.description}</p>
                      <p><strong>Location:</strong> {job.location}</p>
                      <p><strong>Positions:</strong> {job.numberOfPositions}</p>
                      <p><strong>Created By:</strong> {job.user?.name || 'Unknown'}</p>
                      <p><strong>Email id:</strong> {job.user?.email || 'Unknown'}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
