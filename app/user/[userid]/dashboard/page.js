"use client";
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function DashboardPage() {
  const { userid } = useParams();
  const router = useRouter()
  const srchParams = useSearchParams()
  const getrole = srchParams.get('role');
  const [form, setForm] = useState({
    companyName: '',
    jobtitle: '',
    contactNumber: '',
    jobRole: '',
    noPosition: 1,
    jobType: [],
    workType: [],
    benefits: [],
    salary: '',
    jobLocation: '',
    description: ''
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
        setName('Guest');
      }
    }
    fetchUser();
  }, []);

  async function fetchAllJobs() {
    const res = await fetch('/api/jobs', { method: 'GET' });
    const data = await res.json();
    setAllJobs(data.jobs);
  }

  useEffect(() => {
    if (role === 'admin') {
      fetchAllJobs();
    }
  }, [role]);

  useEffect(() => {
    // Basic client-side protection
    if (!userid || !getrole) {
      router.push('/signin')
    }
  }, [userid, getrole, router])

  if (!userid || !getrole) {
    return <div>Loading...</div>
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleArrayChange(e) {
    const { name, value, checked } = e.target;
    setForm(prev => {
      if (checked) {
        return { ...prev, [name]: [...prev[name], value] };
      } else {
        return { ...prev, [name]: prev[name].filter(item => item !== value) };
      }
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...form, user: userid })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setMessage('✅ Job created successfully!');
      setForm({
        companyName: '',
        jobtitle: '',
        contactNumber: '',
        jobRole: '',
        noPosition: 1,
        jobType: [],
        workType: [],
        benefits: [],
        salary: '',
        jobLocation: '',
        description: ''
      });

      // Refresh job list
      const updatedRes = await fetch(`/api/jobs/${userid}`);
      const updatedJobs = await updatedRes.json();
      await fetchAllJobs();
      setJobs(updatedJobs);

    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  }

  const jobTypeOptions = ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship', 'Volunteer'];
  const workTypeOptions = ['On-site', 'Hybrid', 'Remote'];

  return (
    <div className="p-6">
      <div className='flex justify-end mb-6 text-sm text-gray-500'>Hello {name}</div>

      <h2 className="text-2xl font-bold mb-4">Create a Job</h2>
      <form className='mb-8' onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Column 1 */}
          <div>
            <label htmlFor='companyName'>Company Name</label>
            <input
              className='border my-1 p-2 w-full rounded'
              type='text'
              name='companyName'
              value={form.companyName}
              onChange={handleChange}
              placeholder='Enter company name'
              required
            />

            <label htmlFor='jobtitle'>Job Title</label>
            <input
              className='border my-1 p-2 w-full rounded'
              type='text'
              name='jobtitle'
              value={form.jobtitle}
              onChange={handleChange}
              placeholder='Enter job title'
              required
            />

            <label htmlFor='contactNumber'>Contact Number</label>
            <input
              className='border my-1 p-2 w-full rounded'
              type='text'
              name='contactNumber'
              value={form.contactNumber}
              onChange={handleChange}
              placeholder='Enter contact number'
            />

            <label htmlFor='jobRole'>Job Role</label>
            <input
              className='border my-1 p-2 w-full rounded'
              type='text'
              name='jobRole'
              value={form.jobRole}
              onChange={handleChange}
              placeholder='Enter job role'
            />

            <label htmlFor='noPosition'>Number of Positions</label>
            <input
              className='border my-1 p-2 w-full rounded'
              type='number'
              name='noPosition'
              value={form.noPosition}
              onChange={handleChange}
              min='1'
            />
          </div>

          {/* Column 2 */}
          <div>
            <label>Job Type</label>
            <div className="grid grid-cols-2 gap-2 my-1">
              {jobTypeOptions.map(option => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    name="jobType"
                    value={option}
                    checked={form.jobType.includes(option)}
                    onChange={handleArrayChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            <label className="mt-4 block">Work Type</label>
            <div className="grid grid-cols-2 gap-2 my-1">
              {workTypeOptions.map(option => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    name="workType"
                    value={option}
                    checked={form.workType.includes(option)}
                    onChange={handleArrayChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            <label htmlFor='salary'>Salary</label>
            <input
              className='border my-1 p-2 w-full rounded'
              type='text'
              name='salary'
              value={form.salary}
              onChange={handleChange}
              placeholder='Enter salary'
            />

            <label htmlFor='jobLocation'>Job Location</label>
            <input
              className='border my-1 p-2 w-full rounded'
              type='text'
              name='jobLocation'
              value={form.jobLocation}
              onChange={handleChange}
              placeholder='Enter job location'
            />
          </div>
        </div>

        <label htmlFor='description' className="block mt-4">Description</label>
        <textarea
          className='border my-1 p-2 w-full rounded'
          name='description'
          value={form.description}
          onChange={handleChange}
          placeholder='Enter job description'
          rows={5}
        />

        <button className='bg-green-500 text-white p-2 mt-3 rounded hover:bg-green-600' type='submit'>
          Submit Job
        </button>
      </form>

      {message && <p className='mb-6 text-sm'>{message}</p>}
      
      <div className='flex flex-col md:flex-row gap-6'>
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-3">Jobs You Created</h2>
          {jobs.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            <ul className="space-y-3">
              {jobs.map((job) => (
                <li key={job._id} className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100">
                  <h3 className="font-bold text-lg">{job.jobtitle}</h3>
                  <p className="text-gray-700"><span className="font-semibold">Company:</span> {job.companyName}</p>
                  <p className="text-gray-700"><span className="font-semibold">Role:</span> {job.jobRole}</p>
                  <p className="text-gray-700"><span className="font-semibold">Location:</span> {job.jobLocation}</p>
                  <p className="text-gray-700"><span className="font-semibold">Salary:</span> {job.salary}</p>
                  <p className="text-gray-700"><span className="font-semibold">Work Type:</span> {job.workType.join(', ')}</p>
                  <p className="text-gray-700"><span className="font-semibold">Job Type:</span> {job.jobType.join(', ')}</p>
                  <p className="mt-2 text-gray-600">{job.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {role === 'admin' && (
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-3">All Jobs (Admin View)</h2>
            {allJobs.length === 0 ? (
              <p>No jobs found.</p>
            ) : (
              <ul className="space-y-3">
                  {allJobs.map((job) => (
                  <li key={job._id} className="p-4 border rounded-lg bg-gray-100 hover:bg-gray-200">
                    <h3 className="font-bold text-lg">{job.jobtitle}</h3>
                    <p className="text-gray-700"><span className="font-semibold">Company:</span> {job.companyName}</p>
                    <p className="text-gray-700"><span className="font-semibold">Posted By:</span> {job.user?.name || 'Unknown'}</p>
                    <p className="mt-2 text-gray-600">Employer Email: {job?.user?.email}</p>
                    <p className="text-gray-700"><span className="font-semibold">Contact:</span> {job.contactNumber}</p>
                    <p className="text-gray-700"><span className="font-semibold">Positions:</span> {job.noPosition}</p>
                    <p className="text-gray-700"><span className="font-semibold">Work Type:</span> {job.workType.join(', ')}</p>
                    <p className="mt-2 text-gray-600">Description: {job.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}