import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs , setDisplayJobs] = useState([]);

  const handleJobsFilter = filter => {
    if(filter === 'All'){
      setDisplayJobs(appliedJobs);
    }
    else if(filter === 'Remote'){
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remoteJobs);
    }
    else if (filter === 'Onsite'){
      const onsiteJobs = appliedJobs.filter(job=> job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobIds = getStoredApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h2>Jobs i applied: {appliedJobs.length}</h2>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=>handleJobsFilter('All')}>
            <a>All</a>
          </li>
          <li onClick={()=>handleJobsFilter('Remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=>handleJobsFilter('Onsite')}>
            <a>onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((appliedJob) => (
          <li key={appliedJob.id}>
            <span>{appliedJob.job_title}:{appliedJob.remote_or_onsite}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
