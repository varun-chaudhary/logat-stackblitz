import { useEffect, useState } from 'react'

import './App.css'
import React from 'react'
import BookingForm from './components/BookingForm';
import BookingDetails from './components/BookingDetails';

function App() {
    const [bookingId, setBookingId] = useState<string | null>(null);

  
    return (
      <div>
        <h1>Logistics Platform</h1>
        {!bookingId ? (
          <BookingForm />
        ) : (
          <BookingDetails bookingId={bookingId} />
        )}
      </div>
    );
}

export default App