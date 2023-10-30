import { BsArrowRightSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, title, price, img} = service;
    return (
        <>
            <div className="bg-white p-4 shadow-md">
                <img src={img} alt="Item 1" className="w-full h-48 object-cover" />
                <h2 className="text-lg font-semibold mt-2 text-[#ff3811]">{title}</h2>
                <div className='flex items-center justify-between'>
                    <p className="text-gray-600">Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                    <BsArrowRightSquare className='text-[#ff3811] text-2xl'></BsArrowRightSquare>
                    </Link>

                </div>

            </div>
        </>

    );
};

export default ServiceCard;