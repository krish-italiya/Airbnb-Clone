import React, { useEffect, useState } from "react";
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

const PlacesFormPage = () => {
  const { id } = useParams();
  console.log(id);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) return;
    axios.get(`/places/${id}`).then((response) => {
      const { data } = response;
      //   console.log(data);
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
    });
  }, [id]);

  const inputHeader = (label) => {
    return <h2 className="text-2xl mt-4">{label}</h2>;
  };

  const inputDescription = (desc) => {
    return <p className="text-gray-500 text-sm">{desc}</p>;
  };

  const preInput = (label, desc) => {
    return (
      <>
        {inputHeader(label)} {inputDescription(desc)}
      </>
    );
  };
  const savePlace = async (e) => {
    e.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    };
    if (id) {
      await axios.put("/places", { id, ...placeData });
      setRedirect(true);
    } else {
      await axios.post("/places", placeData);
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <>
      <AccountNav />
      <div>
        <form action="" onSubmit={savePlace}>
          {preInput(
            "Title",
            "Title for your place,should be short and catchy as in advertisement"
          )}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title, for Example My lovely Apt"
          />
          {preInput("Address", "Address to your Place")}
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Address"
          />
          {preInput("Photos", "More=Better")}

          {/* <h2 className="text-2xl mt-4">Description</h2>
            <p className="text-gray-500 text-sm">
              Add Description About Your Place
            </p> */}
          <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
          {preInput("Description", "Add Description About Your Place")}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <h2 className="text-2xl mt-4">Perks</h2>
          <p className="text-gray-500 text-sm">
            Select All Perks Available At Your Place
          </p>
          <Perks selected={perks} onChange={setPerks} />
          {preInput("Extra Info", "House rules,etc")}
          <textarea
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
          />
          {preInput(
            "Check In & Check Out times",
            "Add Check In & Check Out times remember to have some time window to cleaning the room between guests"
          )}
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mt-2 -mb-1 ">Check In Time</h3>
              <input
                type="text"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                placeholder="14:00"
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1 ">Check Out Time</h3>
              <input
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                type="text"
                placeholder="14:00"
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1 ">Maximum Number of Guest</h3>
              <input
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
                type="number"
                // placeholder="5"
                min={1}
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1 ">Price Per Night</h3>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                // placeholder="5"
                min={100}
              />
            </div>
          </div>
          <button className="primary my-4">Save</button>
        </form>
      </div>
    </>
  );
};

export default PlacesFormPage;
