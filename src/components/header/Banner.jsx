import './Banner.css'

const Banner = () => {
    return (
        <div className="min-h-screen bg-image flex justify-center text-center">
            <div className=' text-white mt-32 mx-2 md:max-w-2xl md:mt-44  lg:max-w-3xl lg:mt-56 space-y-3'>
                <h2 className=' text-4xl lg:text-5xl font-poppins font-bold '>Best Programming learn For Skill</h2>
                <p className=' text-lg'>Discover the best programming courses and tutorials to master essential coding skills.Elevate your expertise and excel in your career with comprehensive coding education.</p>
                <div>
                    <button className='px-5 py-3 font-medium mt-5 text-lg font-poppins rounded-lg bg-[#dfac04f4]'>Service</button>
                </div>
            </div>
        </div> 
            
    );
};

export default Banner;