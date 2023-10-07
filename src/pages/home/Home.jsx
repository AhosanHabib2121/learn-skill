import Contact from "../contact/Contact";
import OurTeam from "../ourTeam/OurTeam";
import Service from "../service/Service";

const Home = () => {
    return (
        <div className=" my-5">
            {/* service section */}
            <Service />
            {/* our team section */}
            <OurTeam />
            {/* contact section */}
            <Contact/>
        </div>
    );
};

export default Home;