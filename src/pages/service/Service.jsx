import { key } from "localforage";
import { useEffect, useState } from "react";

const Service = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(serviceData => setService(serviceData))
    }, [])

    return (
        <div className="my-16 max-w-6xl mx-auto px-8 lg:px-0">
            {/* head area */}
            <div className=" text-center mb-16">
                <h2 className=" text-4xl font-poppins font-bold text-[#042754]">Service</h2>
                <p className=" text-lg font-poppins font-semibold text-[#042754]">Best learn skill service provide here</p>
            </div>
            {/* card area */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    service.map(singleData => <>
                        <div className="card card-compact bg-[#042754] text-white ">
                            <figure><img src={singleData.image} className=" h-52 w-full p-4" alt="not found" /></figure>
                            <div className="card-body">
                                <h2 className=" text-xl font-semibold font-poppins">{singleData.name}</h2>
                                <h2 className="text-lg font-semibold font-poppins">{singleData.price}$</h2>
                                <p className=" text-base font-semibold font-poppins">{singleData.short_description}</p>
                                <div className="card-actions justify-center py-2">
                                 <button className=" bg-[#dfac04f4] text-lg px-4 py-2 rounded-lg font-medium ">Details</button>
                                </div>
                            </div>
                        </div>
                    
                    </>)
                }
            </div>
        </div>
    );
};

export default Service;