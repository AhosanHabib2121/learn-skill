import Footer from "../../components/footer/Footer";

const ContactPage = () => {
    return (
        <>
            <div className="my-16 max-w-6xl mx-auto">
                {/* head area */}
                <div className=" text-center mb-8">
                    <h2 className=" text-4xl font-poppins font-bold text-[#042754]">Contact us</h2>
                </div>
                {/* contact form here */}
                <div>
                    <div className=" ">
                        <div className=" max-w-2xl mx-auto">
                            <form className="card-body">
                                <div className=" grid grid-cols-2 gap-8">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg font-semibold font-poppins">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg font-semibold font-poppins">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder=" Your email" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold font-poppins">Message</span>
                                    </label>
                                    <textarea name="message" placeholder="Message" className="textarea textarea-bordered " cols="30" rows="6"></textarea>
                                    
                                </div>

                                <div className=" text-center mt-6">
                                    <button className=" bg-[#dfac04f4] text-white hover:bg-[#c0a652f4] text-lg px-4 py-2 rounded-lg font-medium ">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer section here */}
            <Footer/>
        </>
    );
};

export default ContactPage;
