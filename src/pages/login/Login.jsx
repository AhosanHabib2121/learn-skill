import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const { loginAccount, googleSignIN } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errMessage, setErrMessage] = useState(null)

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        // error message clear
        setErrMessage('')
        
        if (password.length < 6) {
            setErrMessage('Password must be 6 characters!');
            return;
        }
        // loginAccount
        loginAccount(email, password)
            .then(() => {
                e.target.reset()
                Swal.fire({
                    icon: 'success',
                    title: 'Good',
                    text: 'Login successfully',
                })
                navigate('/');
            })
            .catch(()=> {
                setErrMessage("Your email and password  doesn't match")
            })
     
    }
    // signIn with google
    const handleGoogle = () => {
        googleSignIN()
            .then(() => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-center',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                icon: 'success',
                title: 'Google Login successfully'
                })
                navigate('/')
            })
            .catch()
    }

    return (
        <div className='bg-animation'>
            <div className="pb-20 pt-14 px-8 md:px-0">
                <div className="flex-col py-5 border border-blue-500 rounded-md max-w-lg mx-auto ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold pt-6 text-white">Login now!</h1>
                    </div>
                    <div className=' px-8 py-5'>
                        {
                            errMessage?<p className=' text-red-500'>{errMessage }</p>:''
                        }
                        
                    </div>
                    <div className="card w-full">
                        <form onSubmit={handleLogin} className=" px-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-poppins font-medium text-white">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text text-lg font-poppins font-medium text-white">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered mb-2" required />
                                <label className="">
                                    <a href="#" className=" text-base font-poppins font-medium  text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white border-0 bg-[#dfac04f4] hover:bg-[#dfac04b4] normal-case text-xl">Login</button>
                            </div>
                        </form>
                        <div className=' text-center pt-3'>
                            <h4 className=' text-white'>Don’t have an account? <Link to='/register' className=' text-[#dfac04f4]'>Create an account</Link></h4>
                        </div>
                        {/* google button */}
                        <div className=" relative text-center mt-5">
                             <FcGoogle className=" text-3xl absolute top-2 left-16 md:left-36 text-cyan-600"/>
                            <button onClick={handleGoogle} className="btn bg-inherit hover:bg-inherit text-white outline-1  normal-case rounded-full w-64 border-gray-400">Continue with Google</button>
                            
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;