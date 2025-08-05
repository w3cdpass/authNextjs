'use client';
import { useState } from 'react';

export default function JobCard({ job }) {
  const [message, setMessage] = useState('');
  const [showMore, setShowMore] = useState(false)

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
    <div className="border border-gray-200 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{job.jobtitle}</h2>
          <p className="text-lg text-gray-600">{job.companyName}</p>
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {new Date(job.postDate).toLocaleDateString()}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div>
            <span className="font-medium text-gray-700">
              <i className="fas fa-briefcase mr-2"></i> Job Role:
            </span>
            <p className="text-gray-600">{job.jobRole}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">
              <i className="fas fa-map-marker-alt mr-2"></i> Location:
            </span>
            <p className="text-gray-600">{job.jobLocation}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">
              <i className="fas fa-users mr-2"></i> Positions Available:
            </span>
            <p className="text-gray-600">{job.noPosition}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <span className="font-medium text-gray-700">
              <i className="fas fa-dollar-sign mr-2"></i> Salary:
            </span>
            <p className="text-gray-600">₹{job.salary} per hour</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">
              <i className="fas fa-briefcase mr-2"></i> Job Type:
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {job.jobType.map((type, index) => (
                <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="font-medium text-gray-700">
              <i className="fas fa-laptop mr-2"></i> Work Type:
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {job.workType.map((type, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <span className="font-medium text-gray-700">Job Description:</span>
        {job.description.length > 190 ? (
          showMore ? (
            <p onClick={() => setShowMore(false)}>
              {job.description}{" "}
              <span className="text-xs bg-green-300 px-1 py-0.5 font-medium rounded-lg cursor-pointer">
                Read Less
              </span>
            </p>
          ) : (
            <p onClick={() => setShowMore(true)}>
              {job.description.slice(0, 190)}
              <span className="text-xs bg-green-300 px-1 py-0.5 font-medium rounded-lg cursor-pointer">
                Read More
              </span>
            </p>
          )
        ) : (
          <p>{job.description}</p>
        )}
      </div>


      <div className="mt-6 flex justify-between items-center">
        <div>
          <span className="font-medium text-gray-700">
            <i className="fas fa-phone-alt mr-2"></i> Contact:
          </span>
          <p className="text-gray-600">{job.contactNumber}</p>
        </div>

        <button
          onClick={handleApply}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Apply Now
        </button>
      </div>

      {message && (
        <div className={`mt-4 p-3 rounded-md ${message.includes('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
          }`}>
          <p className="text-sm">{message}</p>
        </div>
      )}
    </div>

  );
}