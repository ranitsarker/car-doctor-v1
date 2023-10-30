import registerImage from '../../assets/images/login/login.svg';
const Register = () => {
    return (
        <>
           <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-screen-lg bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row">
                    {/* Column 1: Image */}
                    <div className="lg:w-1/2">
                    <img src={registerImage} alt="Login Image" className="w-full" />
                    </div>
                    
                    {/* Column 2: Form */}
                    <div className="lg:w-1/2 p-4">
                    <h1 className="text-2xl font-semibold mb-4">Register</h1>
                    <form>
                        <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border rounded"
                            placeholder="Your Name"
                        />
                        </div>
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
                        <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo URL</label>
                        <input
                            type="url"
                            id="photo"
                            name="photo"
                            className="w-full p-2 border rounded"
                            placeholder="Your Photo URL"
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
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                        >
                        Register
                        </button>
                    </form>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default Register;