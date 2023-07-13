import React, { useContext, useEffect, useState } from 'react'
import { differenceInBusinessDays, differenceInCalendarDays } from "date-fns"
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const BookingWidget = ({ place }) => {
    const [checkIn, setCheckIn] = useState(0);
    const [checkOut, setCheckOut] = useState(0);
    const [numberOfGuests, setNumberOfGuests] = useState(1)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState("")
    const [redirect, setRedirect] = useState(null);
    const { user } = useContext(UserContext)

    if (user === null) {
        return "Loading..."
    }

    useEffect(() => {
        setName(user.name)
    }, [user])
    let numberOfNights = 0;
    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
    }

    const bookThisPlace = async (e) => {
        const res = await axios.post('/bookings', { checkIn, checkOut, numberOfGuests, name, phone, place: place._id, price: numberOfNights * place.price })
        const bookingId = res.data._id
        setRedirect(`/account/bookings/${bookingId}`)
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <>
            <div className="bg-white shadow p-4 rounded-2xl">
                <div className="text-2xl text-center">
                    Price : ${place.price} per night
                </div>
                <div className="border rounded-2xl mt-4">
                    <div className="flex">
                        <div className="py-3 px-4">
                            <label htmlFor="">Check In</label>
                            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                        </div>
                        <div className="py-3 px-4 border-l">
                            <label htmlFor="">Check Out</label>
                            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
                        </div>
                    </div>
                    <div className="py-3 px-4 border-t">
                        <label htmlFor="">Number of Guests</label>
                        <input type="number" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} min={1} max={place.maxGuests} />
                    </div>
                    {numberOfNights > 0 && (
                        <div className="py-3 px-4 border-t">
                            <label htmlFor="">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="">Phone Number</label>
                            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                    )}
                </div>
                <button onClick={bookThisPlace} className="primary mt-4">
                    Book this place
                    {numberOfNights > 0 && (
                        <span> for <b>${numberOfNights * place.price}</b> </span>
                    )}
                </button>
            </div>
        </>
    )
}

export default BookingWidget