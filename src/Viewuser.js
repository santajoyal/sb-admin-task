import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Viewuser() {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    userdata();
  }, []);

  let userdata = async () => {
    try {
      const data = await axios.get(
        `https://6346c13f9eb7f8c0f884b683.mockapi.io/users/${params.id}`
      );
      console.log(data);
      setData(data.data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="App">
      <h3>id: {data.id}</h3>
      <h3>Name: {data.name}</h3>
    <h3>Email: {data.email}</h3>
    <h3>country: {data.country}</h3>
    <h3>State: {data.state}</h3>
    <h3>City: {data.city}</h3>
    <h3>dob: {data.dob}</h3>
    </div>
  );
}

export default Viewuser;
