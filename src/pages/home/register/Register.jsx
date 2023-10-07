import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {
    const { registration } = useContext(AuthContext)
     const navigate = useNavigate()
    
    // create account
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const imageUrl = form.get('image_url');
        const email = form.get('email');
        const password = form.get('password');

        registration(email, password)
            .then((data) => {
                console.log(data.user)
                alert('Account create successfully')
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })

        
    }
    return (
       <div className='bg-animation'>
            <div className=" pt-14 pb-24 px-8 md:px-0">
                <div className="flex-col py-5 border border-blue-500 rounded-md max-w-lg mx-auto ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold pt-6 text-white">Register</h1>
                    </div>
                    <div className="card w-full">
                        <form onSubmit={handleRegister} className=" px-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-poppins font-medium text-white">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-poppins font-medium text-white">Image-url</span>
                                </label>
                                <input type="text" name='image_url' placeholder="image url" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white border-0 bg-[#dfac04f4] hover:bg-[#dfac04b4] normal-case text-xl">Register</button>
                            </div>
                        </form>
                        <div className=' text-center pt-3'>
                            <h4 className=' text-white'>Already have an account? <Link to='/login' className=' text-[#dfac04f4]'>Login</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;