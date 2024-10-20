import React, { useEffect, useState } from 'react';
import api from '../services/api';
import VehicleTracking from './VehicleTracking';

const BookingDetails: React.FC<{ bookingId: string }> = ({ bookingId }) => {
  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    const fetchBooking = async () => {
      const response = await api.get(`/bookings/${bookingId}`);
      setBooking(response.data);
    };

    fetchBooking();
  }, [bookingId]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Booking Details</h2>
      <p>Pickup Location: {booking.pickupLocation}</p>
      <p>Dropoff Location: {booking.dropoffLocation}</p>
      <p>Price: ${booking.price}</p>

      {/* Real-time vehicle tracking */}
      <VehicleTracking bookingId={bookingId} />
    </div>
  );
};

export default BookingDetails;
