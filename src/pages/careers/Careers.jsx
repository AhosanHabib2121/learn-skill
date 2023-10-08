import Footer from "../../components/footer/Footer";
import careers1 from '../../assets/image/careers-event1.jpg';
import careers2 from '../../assets/image/careers-innovation.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Careers = () => {
    useEffect(() => {
        AOS.init(
            {
                duration: 2000
            }
        );
    }, [])

    return (
        <div>
            <div className="max-w-6xl mx-auto my-20 px-8 lg:px-0">
                <div className="md:flex gap-4" data-aos="fade-down">
                    <div className=" flex-1 " >
                        <img src={careers1} alt="not found"  />
                    </div>
                    <div className=" flex-1 space-y-4" >
                        <h2 className=" text-[#042754] text-4xl font-poppins font-bold mt-4 md:mt-0">Connecting Passion and Innovation</h2>
                        <h4 className=" font-poppins text-lg text-gray-500">
                            Innovation
                            At Stova, we are as committed to each other as we are to our clients. We work hard, as a team, to ensure we deliver innovative products and solutions to our clients. We also try not to take ourselves too seriously. We laugh together, lend a helping hand when needed, and celebrate our successes. We’re seeking people with optimism, passion, and a sense of humor to join our dynamic Stova team.
                        </h4>
                    </div>
                </div>
                <div className="md:flex flex-row-reverse gap-4 mt-14" data-aos="fade-up">
                    <div className="flex-1" >
                        <img src={careers2} alt="not found" />
                    </div>
                    <div className=" flex-1 space-y-4" >
                        <h2 className=" text-[#042754] text-4xl font-poppins font-bold mt-4 md:mt-0">Our Global Community</h2>
                        <h4 className=" font-poppins text-lg text-gray-500">
                            With a presence in over 12 international locations, we deliver excellence across the globe. Our work requires a diverse set of people, opinions, and experiences, because our clients and their events span cultures, languages, and beliefs. Our diverse employee community is what makes Stova a leading event technology company that understands our client’s unique needs.
                        </h4>
                    </div>
                </div>
            </div>
            {/* footer section here */}
            <Footer/>
        </div>
    );
};

export default Careers;