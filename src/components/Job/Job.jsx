import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    id,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
  } = job;
  return (
    <div className="border border-[#E8E8E8] rounded-lg">
      <div className="card-body">
      <div className="lg:mb-[32px]">
        <img className="flex justify-start items-center" src={logo} alt="" />
      </div>
        <h2 className="card-title text-[24px] text-[#474747] font-bold mb-[8px]">{job_title}</h2>
        <p className="text-[#757575] lg:text-[20px] mb-[16px]">{company_name}</p>
        <div className=" flex gap-3 text-[#7E90FE] mb-[16px]">
          <button className="px-5 py-2 font-bold border rounded border-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-bold border rounded border-[#7E90FE]">{job_type}</button>
        </div>
        <div className="lg:text-[20px] text-[#757575] flex gap-[24px] items-center mb-[24px]">
        <div className="flex gap-[8px]">
          <p><IoLocationOutline /></p>
          <p>{location}</p>
        </div>
        <div className="flex gap-[8px]">
          <p><AiOutlineDollarCircle /></p>
          <p>Salary : {salary}</p>
        </div>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/job/${id}`}>
          <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#FFFFFF]">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
