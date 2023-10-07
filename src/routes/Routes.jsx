import {createBrowserRouter} from "react-router-dom";
import Root from "../mainLayout/Root";
import ErrorMessage from "../pages/errorMessage/ErrorMessage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/home/register/Register";

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
        }
    ]
  },
]);

export default myCreateRouter;