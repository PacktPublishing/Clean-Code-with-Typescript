import { useGetJobs } from '@devjobs/api-client';

export function Jobs() {
  const jobsQuery = useGetJobs();
  console.log(jobsQuery.data)
  const jobs = jobsQuery.data?.data ?? [];



  if (jobsQuery.isLoading) {
    return <div className="p-4">Loading jobs...</div>;
  }

  if (jobsQuery.isError) {
    return <div className="p-4">Failed to load jobs.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl space-y-4">
        <h1 className="text-xl font-semibold">Jobs</h1>

        {jobs.length === 0 ? (
          <p className="text-sm">No jobs found.</p>
        ) : (
          <ul className="space-y-2">
            {jobs.map((job) => (
              <li key={job.id} className="border rounded p-3">
                <div className="font-medium">{job.title}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

