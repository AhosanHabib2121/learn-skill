import {createBrowserRouter} from "react-router-dom";
import Root from "../mainLayout/Root";
import ErrorMessage from "../pages/errorMessage/ErrorMessage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/home/register/Register";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";
import PrivateRoutes from "../privateRouter/PrivateRoutes";
import Event from "../pages/event/Event";
import Careers from "../pages/careers/Careers";
import ServicePage from "../pages/service/ServicePage";
import OurTeamPage from "../pages/ourTeam/OurTeamPage";
import ContactPage from "../pages/contact/ContactPage";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/serviceDetail/:serviceId',
        loader: () => fetch('/Service.json/'),
        element: <PrivateRoutes><ServiceDetails/></PrivateRoutes>
      },
      {
        path: '/service',
        element: <ServicePage/>
      },
      {
        path: '/ourTeam',
        element: <OurTeamPage/>
      },
      {
        path: '/event',
        element: <Event/>
      },
      {
        path: '/careers',
        element: <PrivateRoutes><Careers/></PrivateRoutes>
      },
      {
        path: '/contact',
        element: <ContactPage/>
      }
        
    ]
  },
]);

export default myCreateRouter;