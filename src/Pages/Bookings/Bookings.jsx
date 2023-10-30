import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import toast from "react-hot-toast";
import axios from "axios";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        // do with axios 
        axios.get(url, {withCredentials: true})
        .then(data => {
            setBookings(data.data);
        })
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookings(data))
    }, [url]);

    const handleBookingDelete = id => {
        const proceed = confirm("are you sure want to delete?");
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success('Deleted successfully.');
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining);
                }
            })
        }
    }
    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }
    return (
        <>
            <h3 className="text-xl text-center my-4 font-bold">My Total Bookings: {bookings.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <th>Service Image</th>
                            <th>Service Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                               bookings.map(booking => <BookingRow
                               key={booking._id}
                               booking={booking}
                               handleBookingDelete={handleBookingDelete}
                               handleBookingConfirm={handleBookingConfirm}
                               ></BookingRow>) 
                            }
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </>
    );
};

export default Bookings;