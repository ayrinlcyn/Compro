import React, { useEffect, useState } from 'react';
import axios from 'axios';;

const ClientList = ({ setLoading }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true); 
        const response = await axios.get('http://localhost:8000/api/get-about');
        if (response.data.status) {
          const clientList = response.data.data.clients.split(',').map(client => client.trim());
          setClients(clientList);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchClients();
  }, [setLoading]);

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

export default ClientList;
