import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../widgets/Loading';

const Client = () => {
  const [clients, setClients] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/get-about');
        if (response.data.data.length > 0) {
          const aboutData = response.data.data[0]; // Ambil objek pertama
          const clientList = aboutData.clients
            .split(/[\n,]/) // Pisahkan dengan koma atau baris baru
            .map(client => client.trim().replace(/^\["|"]$|^"|"$|\\n/g, '')) // Hapus tanda kutip dan karakter tidak diinginkan
            .filter(client => client.length > 0); // Hilangkan elemen kosong
          setClients(clientList);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid md:grid-cols-1 sm:grid-cols-1 gap-4 mt-10 max-w-lg mx-auto">
      <div className="text-center space-y-2 pr-4 sm:pr-4 md:pr-0">
        <p className="font-bold text-sm sm:text-base md:text-lg">CLIENTS</p>
        {clients.map((client, index) => (
          <p key={index} className="text-sm sm:text-base md:text-lg font-medium text-gray-500">
            {client}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Client;