import React, { useState } from 'react';
import api from '../services/api';

const BookingForm: React.FC = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [price, setPrice] = useState<number | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = {
      userId: 'some-user-id',  // Replace with actual user ID
      pickupLocation,
      dropoffLocation,
      vehicleId: 'some-vehicle-id',  // Replace with selected vehicle ID
      price,  // Replace with price estimation logic
    };

    try {
      const response = await api.post('/bookings/book', bookingData);
      if (response.status === 201) {
        setBookingConfirmed(true);
      }
    } catch (error) {
      console.error('Error booking vehicle:', error);
    }
  };

  const handlePriceEstimation = async () => {
    // Call API to get estimated price
    const response = await api.post('/bookings/estimate-price', {
      pickupLocation,
      dropoffLocation,
      vehicleType,
    });
    setPrice(response.data.price);
  };

  return (
    <div>
      <h2>Book a Vehicle</h2>
      <form onSubmit={handleBooking}>
        <div>
          <label>Pickup Location:</label>
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Dropoff Location:</label>
          <input
            type="text"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Vehicle Type:</label>
          <input
            type="text"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="button" onClick={handlePriceEstimation}>
            Estimate Price
          </button>
          {price && <p>Estimated Price: ${price}</p>}
        </div>
        <button type="submit">Book Vehicle</button>
      </form>
      {bookingConfirmed && <p>Booking confirmed!</p>}
    </div>
  );
};

export default BookingForm;
