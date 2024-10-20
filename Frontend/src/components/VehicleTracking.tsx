import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const VehicleTracking: React.FC<{ bookingId: string }> = ({ bookingId }) => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const socket = io('http://localhost:5000');

    socket.emit('joinBooking', { bookingId });

    socket.on('locationUpdate', (newLocation: { lat: number; lng: number }) => {
      setLocation(newLocation);
    });

    return () => {
      socket.disconnect();
    };
  }, [bookingId]);

  return (
    <div>
      <h3>Vehicle Tracking</h3>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
    </div>
  );
};

export default VehicleTracking;
