import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const Checkout = () => {
  const service = useLoaderData();
  const {_id, title, price, img } = service;
  const {user} = useContext(AuthContext);

  const handleCheckOut = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const phone = form.phone.value;
    const date = form.date.value;
    const due = form.due.value;
    const booking = {
        customerInfo:
        name,
        email,
        phone,
        img,
        date,
        due,
        service: title,
        service_id: _id,
    }
    console.log(booking);

    // sent those information to server 
    fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            toast.success('Booking confirmed successfully!')

        }
    })
  }

  return (
    <>
      <div>
        <h3 className="text-lg text-center my-4 font-bold">{title}</h3>
      </div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-screen-lg bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4">Please confirm your order</h1>
          <form onSubmit={handleCheckOut} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded"
                placeholder="Your name"
                defaultValue={user?.displayName}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded"
                placeholder="Your Email"
                defaultValue={user?.email}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full p-2 border rounded"
                placeholder="Your Phone"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="due" className="block text-sm font-medium text-gray-700">
                Due Amount
              </label>
              <input
                type="text"
                id="due"
                name="due"
                className="w-full p-2 border rounded"
                placeholder="Service price"
                defaultValue={"$ " + price}

              />
            </div>
            <div className="mb-4">
              <label htmlFor="img" className="block text-sm font-medium text-gray-700">
                Service photo
              </label>
              <input
                type="text"
                id="img"
                name="img"
                className="w-full p-2 border rounded"
                placeholder="Your Service photo"
                defaultValue={img}
              />
            </div>
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <button
                type="submit"
                className="bg-[#ff3811] text-white py-2 px-4 rounded hover:bg-[#ff3811] transition duration-300"
              >
                Order Confirmed
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
