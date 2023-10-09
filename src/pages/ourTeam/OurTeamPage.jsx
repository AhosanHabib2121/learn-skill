import { useEffect, useState } from "react";
import SingleTeam from "./singleTeam/SingleTeam";
import './OurTeam.css'
import Footer from "../../components/footer/Footer";

const OurTeamPage = () => {
    const [ourTeam, setOurTeam] = useState([])

    useEffect(() => {
        fetch('/OurTeam.json')
            .then(res => res.json())
            .then(ourTeamData => setOurTeam(ourTeamData))
    }, [])

    return (
        <>
            <div className="ourTeam-bg-image py-20">
                <div className=" max-w-6xl mx-auto px-8 lg:px-0">
                    
                    {/* head area */}
                    <div className=" text-center mb-16">
                        <h2 className=" text-4xl font-poppins font-bold text-[#fff]">Our Team</h2>
                        <p className=" text-lg font-poppins font-semibold text-[#fff]">The short identity of those who are supporting you</p>
                    </div>
                    {/* card area */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            ourTeam.map(singleTeam => <SingleTeam key={singleTeam.id} singleTeam={ singleTeam} />)   
                        }
                    </div>
                </div>
            </div>  

            {/* footer section here */}
            <Footer/>
        </>
    );
};

export default OurTeamPage;
