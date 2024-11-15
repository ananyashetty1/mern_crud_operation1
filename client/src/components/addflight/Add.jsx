import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
import "./add.css";

const Add = () => {
  const flights = {
    "name": "",
    "source": "",
    "destination": "",
    "fare": "",
    "duration": ""
  };

  const [flight, setflight] = useState(flights)
  const navigate = useNavigate();
  
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setflight({...flight,[name]:value})
    
  }
  
  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create", flight)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <Link to={"/"}>Back</Link>
      <h3>Add New flight</h3>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={inputHandler}
            id="name"
            name="name"
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="source">Source</label>
          <input
            type="text"
            onChange={inputHandler}
            id="source"
            name="source"
            placeholder="source"
          />
        </div>
        <div>
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            onChange={inputHandler}
            id="destination"
            name="destination"
            placeholder="destination"
          />
        </div>
        <div>
          <label htmlFor="fare">Fare</label>
          <input
            type="text"
            onChange={inputHandler}
            id="fare"
            name="fare"
            placeholder="fare"
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            onChange={inputHandler}
            id="duration"
            name="duration"
            placeholder="duration"
          />
        </div>
        <div>
          <button type="submit">ADD FLIGHT</button>
        </div>
      </form>
    </div>
  );

}

export default Add;