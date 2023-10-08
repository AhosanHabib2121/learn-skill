import Footer from "../../components/footer/Footer";
import eventPhoto from '../../assets/image/event-photo.jpg'
import { useEffect, useState } from "react";

const Event = () => {

    const [service, setService] = useState([])

    useEffect(() => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(serviceData => setService(serviceData))
    }, [])

    return (
        <div>
            <div className=" max-w-6xl mx-auto my-20 px-8 lg:px-0">
                {/* upcoming events here */}
                <div >
                    <h1 className=" text-[#042754] text-4xl font-poppins font-bold mb-8">Upcoming Events</h1>

                    <div className="card card-compact md:w-96  border border-[#042754]">
                        <figure><img src={eventPhoto} className=" w-full" alt="not found" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Product training</h2>
                            <p className=" card-title">Date: 02.09.2023</p>
                            <div className="card-actions justify-end">
                            <button className="btn bg-[#dfac04f4] text-white normal-case">Join now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* On Demand Events here */}
                <div className="mt-10">
                    <h1 className=" text-[#042754] text-4xl font-poppins font-bold mb-8">On Diamond Events</h1>

                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                         {
                        service.slice(0, 3).map(singleData => <>
                            <div className="card card-compact  border border-[#042754]">
                                <figure><img src={singleData?.image} className=" w-full h-60" alt="not found" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">{singleData?.name}</h2>
                                </div>
                            </div>
                        </>)
                    }
                   </div>
                </div>
            </div>

            {/* footer section */}
            <Footer/>
        </div>
    );
};

export default Event;