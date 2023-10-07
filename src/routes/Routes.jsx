import {createBrowserRouter} from "react-router-dom";
import Root from "../mainLayout/Root";
import ErrorMessage from "../pages/errorMessage/ErrorMessage";
import Home from "../pages/home/Home";
import Service from "../pages/service/Service";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorMessage />,
    children: [
        {
            path: '/',
            element: <Home />,
        }
    ]
  },
]);

export default myCreateRouter;