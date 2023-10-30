import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //user login
        loginUser(email, password)
        .then(result => {
          const loggedInUser = result.user;
          console.log(loggedInUser);
          const user = { email };
        //   navigate(location?.state ? location?.state : '/');
        // get access token
        axios.post('http://localhost:5000/jwt', user, {withCredentials: 
        true})
        .then(data => {
            console.log(data.data)
            if(data.data.success){
                navigate(location?.state ? location?.state : '/');
            }
        })
        })
        .catch(error => console.log(error))
    }
    return (
        <>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-screen-lg bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row">
                    {/* Column 1: Image */}
                    <div className="lg:w-1/2">
                    <img src={loginImage} alt="Login Image" className="w-full" />
                    </div>
                    
                    {/* Column 2: Form */}
                    <div className="lg:w-1/2 p-4">
                    <h1 className="text-2xl font-semibold mb-4">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border rounded"
                            placeholder="example@example.com"
                        />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-2 border rounded"
                            placeholder="Password"
                        />
                        </div>
                        <button
                        type="submit"
                        className="bg-[#ff3811] text-white py-2 px-4 rounded hover:bg-[#ff3811] transition duration-300"
                        >
                        Log In
                        </button>
                    </form>
                    <p className='py-4 text-center'>New to Car Doctor <Link to='/register' className='underline text-[#ff3811]'>Register.</Link></p>
                    </div>
                    
                </div>

            </div>
        </>
    );
};

export default Login;