import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../BookingWidget";
import PlaceGallary from "../PlaceGallary";
import AddressLink from "../AddressLink";

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  useEffect(() => {
    if (!id) return;
    axios.get(`/places/${id}`).then((response) => setPlace(response.data));
  }, [id]);
  if (!place) return "Loading...";



  return (
    <div className="mt-4 py-8 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">{place.title}</h1>
      <AddressLink >{place.address}</AddressLink>
      <PlaceGallary place={place} />
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          Check In: {place.checkIn}<br />
          Check Out: {place.checkOut}<br />
          Maximum Guests: {place.maxGuests}<br />
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Description</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-800 leading-6">
          {place.extraInfo}
        </div>
      </div>
    </div>

  );
};

export default PlacePage;
