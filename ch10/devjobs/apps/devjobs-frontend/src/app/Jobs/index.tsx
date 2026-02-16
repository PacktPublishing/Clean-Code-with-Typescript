import { useGetJobs } from '@devjobs/api-client';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function Jobs() {
  const jobsQuery = useGetJobs();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const jobs = jobsQuery.data ?? [];

  if (jobsQuery.isLoading) {
    return <div className='p-4'>Loading jobs...</div>;
  }

  if (jobsQuery.isError) {
    return <div className='p-4'>Failed to load jobs.</div>;
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-2xl space-y-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-semibold'>Jobs</h1>
          <button
            onClick={handleLogout}
            className='text-sm border rounded px-3 py-1'
          >
            Logout
          </button>
        </div>

        {jobs.length === 0 ? (
          <p className='text-sm'>No jobs found.</p>
        ) : (
          <ul className='space-y-2'>
            {jobs.map((job) => (
              <li key={job.id} className='border rounded p-3'>
                <div className='font-medium'>{job.title}</div>
                <div className='text-sm text-gray-600'>{job.location}</div>
                <p className='text-sm text-gray-700 line-clamp-2'>
                  {job.description}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
