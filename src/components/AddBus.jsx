import React, { useState } from "react";
import api from "../api/api";
import { useNavigate } from 'react-router-dom';

function AddBus() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    busName: "",
    busNumber: "",
    busColor: "",
    busType: "",
    ownerName: "",
    ownerPhone: "",
    assistentPhone: "",
  });

  const validateForm = () => {
    const { busName, busNumber, busColor, busType, ownerName, ownerPhone, assistentPhone } = formData;
    if (!busName || !busNumber || !busColor || !busType || !ownerName || !ownerPhone || !assistentPhone) {
      alert("All fields are required.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await api.post("/add-bus", formData);
      console.log("Bus added:", response.data);
      alert("Bus added successfully!");
      //   clear form data
      setFormData({
        busName: "",
        busNumber: "",
        busColor: "",
        busType: "",
        ownerName: "",
        ownerPhone: "",
        assistentPhone: "",
      });
      //   redirect to /bus/:id
      
      navigate(`/bus/${response.data?.busDetails?.busId}`);
    } catch (error) {
      console.error("Add bus error:", error);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2 className="title">Add New Bus</h2>
        <p className="subtitle">Add a new bus to your fleet</p>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label htmlFor="busName">Bus Name</label>

            <input
              placeholder="Bus Name"
              onChange={(e) =>
                setFormData({ ...formData, busName: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="busNumber">Bus Number</label>
            <input
              placeholder="Bus Number"
              onChange={(e) =>
                setFormData({ ...formData, busNumber: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="busColor">Bus Color</label>
            <input
              placeholder="Bus Color"
              onChange={(e) =>
                setFormData({ ...formData, busColor: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="busType">Bus Type</label>
            <input
              placeholder="Bus Type"
              onChange={(e) =>
                setFormData({ ...formData, busType: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="ownerName">Owner Name</label>
            <input
              placeholder="Owner Name"
              onChange={(e) =>
                setFormData({ ...formData, ownerName: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="ownerPhone">Owner Phone</label>
            <input
              placeholder="Owner Phone"
              onChange={(e) =>
                setFormData({ ...formData, ownerPhone: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="assistentPhone">Assistant Phone</label>
            <input
              placeholder="Assistant Phone"
              onChange={(e) =>
                setFormData({ ...formData, assistentPhone: e.target.value })
              }
            />
          </div>

          <button type="submit" className="button">
            Add Bus
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBus;
