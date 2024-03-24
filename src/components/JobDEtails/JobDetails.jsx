import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id == idInt)
    console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully')
    }
    return (
        <div>
            <h2>Job details of: {jobs.length}</h2>
            <div className="grid grid-cols-4">
            <div className="text-[#1A1919] col-span-3 font-bold">
                <p className="mb-[24px]">Job Description: <span className="text-[#757575] font-light">{job.job_description}</span></p>
                <p>Job Responsibility: <span className="text-[#757575] font-light">{job.job_responsibility}</span></p>
            </div>

            <div className="w-[424px] h-[461px] p-[30px] bg-gradient-to-t from-[#7E90FE] to-[#9873FF]">
                <p>Job Details</p>
                <hr />
                <div>
                    <p><AiOutlineDollarCircle/></p>
                    <p>Salary : {job.salary}(per Month)</p>
                    <button onClick={handleApplyJob} className="btn">Apply Now</button>
                </div>
            </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default JobDetails;