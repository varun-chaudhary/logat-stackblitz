import { useEffect, useState } from 'react'

import './App.css'
import React from 'react'

function App() {

  const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3010/api/data');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  return (
    <>
      hey
      <div>
            <h1>{data.message}</h1>
            <p>Timestamp: {data.timestamp}</p>
        </div>
    </>
  )
}

export default App