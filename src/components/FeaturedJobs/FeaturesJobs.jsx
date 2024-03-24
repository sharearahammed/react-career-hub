import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturesJobs = () => {
  const [jobs, setJobs] = useState([]);
  // this is not the best way to load show all data
  const [datalength , setDatalength] = useState(4);


  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mt-[130px] mb-[130px]">

      <div className="text-center mb-[32px]">
        <h2 className="text-5xl mb-[16px] font-bold">Featured Jobs: {jobs.length}</h2>
        <p className="text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {
            jobs.slice(0 , datalength).map(job => <Job key={job.id}
                job={job}></Job>)
        }

      </div>
      
      <div className={datalength === jobs.length && 'hidden'}>
      <div className="flex justify-center items-center mt-[40px]">
      <button 
      onClick={()=>setDatalength(jobs.length)} 
      className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#FFFFFF]">Show All Jobs</button>
      </div>
      </div>
      <p></p>
    </div>
  );
};

export default FeaturesJobs;
