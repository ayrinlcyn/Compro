import React, { useState, useEffect } from 'react';
import AboutDescription from './AboutDescription';
import Client from './ClientList';
import SocialMedia from './SocialMedia';
import Loading from '../widgets/Loading';

const WorkPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      setLoading(false); 
    };
    
    loadData();
  }, []);

  if (loading) {
    return <Loading />; 
  }

  return (
    <div>
      <AboutDescription setLoading={setLoading} />
      <Client setLoading={setLoading} />
      <SocialMedia />
    </div>
  );
};

export default WorkPage;
