import { Link, useRouteError } from "react-router-dom";

const ErrorMessage = () => {
    const errorMessage = useRouteError();
    return (
        <div className=" grid justify-center mt-64 text-center">
            <h2 className=" text-2xl font-bold">{errorMessage?.statusText}</h2>
            <Link to='/' className=" text-[#dfac04f4] underline text-lg font-semibold ">Home</Link>
        </div>
    );
};

export default ErrorMessage;