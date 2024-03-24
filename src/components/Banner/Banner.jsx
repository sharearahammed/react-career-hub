
const Banner = () => {
    return (
        <div className="mb-[130px] mt-[41px] grid grid-cols-2">
            <div className="flex flex-col justify-center">
                <h1 className="text-left text-[80px] font-bold mb-[24px]">One Step Closer To Your
                     <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent"> Dream Job</span>
                </h1>
                <p className="text-[#757575] text-[18px]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            </div>
            <div className="">
                <img className="h-[600px] w-[870px]" src="https://i.ibb.co/Y2SNyfn/user.jpg" />
            </div>
        </div>
    );
};

export default Banner;