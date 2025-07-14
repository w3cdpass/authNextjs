'use client';
import { useEffect, useState } from 'react';
import JobCard from '@/components/JobCard';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch('/api/candidate/jobs', {
        method: 'GET',
        credentials: "include"
      }); // Make sure this route returns all jobs
      const data = await res.json();
      setJobs(data.jobs);
    };

    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
      {jobs.map(job => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}
