import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const Booking = () => {
    const [booking, setBooking] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/booking?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }

        })
        .then(res => res.json())
        .then(data => setBooking(data))
    }, []);
    return (
        <div>
            <h2>You have {booking.length} number of booking Booking</h2>
            {
                booking.map( bk => <li>{bk.name} from: {new Date(bk.checkIn).toDateString('dd/MM/yy')} to: {new Date(bk.checkOut).toDateString('dd/MM/yy')}</li>)

            }
        </div>
    );
};

export default Booking;