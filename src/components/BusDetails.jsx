import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/BusDetails.css";
import api from "../api/api";

function BusDetails() {
  const { busId } = useParams();
  const [bus, setBus] = useState(null);

  useEffect(() => {
    const fetchBus = async () => {
      try {
        const response = await api.get(`/get-bus/${busId}`);
        setBus(response.data.bus);
      } catch (error) {
        console.error("Get bus error:", error);
      }
    };
    fetchBus();
  }, [busId]);

  if (!bus) return <div className="loading">Loading...</div>;

  console.log(bus);

  return (
    <div className="container">
      <div className="box">
        <h2 className="title">Bus Details</h2>
        <div className="bus-card">
          <p>
            <strong>Name:</strong> {bus.busName}
          </p>
          <p>
            <strong>Number:</strong> {bus.busNumber}
          </p>
          <p>
            <strong>Color:</strong> {bus.busColor}
          </p>
          <p>
            <strong>Type:</strong> {bus.busType}
          </p>
          <p>
            <strong>Owner:</strong> {bus.ownerName}
          </p>
          <p>
            <strong>Owner Phone:</strong> {bus.ownerMobile}
          </p>
          <p>
            <strong>Assistant Phone:</strong> {bus.assistendPhone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BusDetails;
