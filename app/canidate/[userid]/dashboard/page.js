'use client';
import { useEffect, useState } from 'react';
import JobCard from '@/components/JobCard';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(6);
  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch('/api/jobs'); // Make sure this route returns all jobs
      const data = await res.json();
      setJobs(data.jobs.reverse());
      console.log(data.jobs)
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="sticky top-0 z-10 bg-gray-50 py-4 px-3 mb-6 text-center md:text-left shadow-sm">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">Available Jobs</h1>
          <p className="text-gray-600">Browse through our current job openings</p>
        </div>


        {/* Search and Filters (optional) */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>All Job Types</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>All Locations</option>
              <option>On-site</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.length > 0 ? (
            jobs.slice(0, visibleJobs).map(job => (
              <JobCard key={job._id} job={job} />
            ))
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center col-span-full">
              <div className="mx-auto w-24 h-24 text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No jobs available</h3>
              <p className="text-gray-500">Check back later for new job postings</p>
            </div>
          )}
        </div>


        {/* Pagination (optional) */}
        {visibleJobs < jobs.length && visibleJobs < 15 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setVisibleJobs(prev => Math.min(prev + 6, 15))}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

// export default function CanidateDshaboard() {
//     return (
//         <>
//         <h1>Gaber</h1>
//         </>
//     )
// }