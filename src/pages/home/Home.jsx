import Footer from "../../components/footer/Footer";
import Banner from "../../components/header/Banner";
import Contact from "../contact/Contact";
import OurTeam from "../ourTeam/OurTeam";
import Service from "../service/Service";

const Home = () => {
    return (
        <div className="">
            <Banner/>
            {/* service section */}
            <Service />

            {/* our team section */}
            <OurTeam />

            {/* contact section */}
            <Contact />

            {/* footer part here */}
            <Footer/>
        </div>
    );
};

export default Home;