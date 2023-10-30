

const BookingRow = ({booking, handleBookingDelete, handleBookingConfirm}) => {
    const {_id, customerInfo, email, date, service, due, img, status} = booking;

    return (
        <>
            {/* row 1 */}
            <tr>
            <th>
                <button onClick={() => handleBookingDelete(_id)} className="btn btn-xs btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-12 h-12">
                       {img && <img src={img} alt={customerInfo} />}
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>
            {customerInfo}
            </td>
            <td>{email}</td>
            <td>{due}</td>
            <td>{date}</td>
            <th>
            { status === 'confirm' ? <button className="btn btn-ghost btn-xs text-green-400">Confirmed</button> :
                <button onClick={() => handleBookingConfirm(_id)} className="text-red-400 btn btn-ghost btn-xs">Pending</button>
            }
            </th>
        </tr>
        </>
    );
};

export default BookingRow;