import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const id = parseInt(serviceId)
    const singleServiceData = useLoaderData()
    const singleData = singleServiceData.find(singleService => singleService.id === id);

    return (
        <>
            <div className=" max-w-4xl mx-auto my-16">
                <div className="card  glass card-compact bg-[#042754] text-white ">
                    <figure><img src={singleData.image} className=" w-full p-4" alt="not found" /></figure>
                    <div className="card-body">
                        <h2 className=" text-xl font-semibold font-poppins">{singleData.name}</h2>
                        <h2 className="text-lg font-semibold font-poppins">{singleData.price}$</h2>
                        <p className=" text-base font-semibold font-poppins">{singleData.short_description}</p>
                </div>
            </div>

            </div>
            {/* footer section */}
            <Footer/>
        </>
    );
};

export default ServiceDetails;