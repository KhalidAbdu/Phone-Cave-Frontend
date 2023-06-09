import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PhonesList from './components/PhonesList';
import PhoneDetails from './components/PhoneDetails';

function App() {
  const [phones, setPhones] = useState([]);
  const [specificPhone, setSpecificPhone] = useState('');

  useEffect(() => {
    const fetchedPhones = async () => {
      try {
        const response = await axios.get('http://localhost:5005/phones');
        setPhones(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchedPhones();
  }, []);
  return (
    <div>
      <PhonesList phones={phones} setSelectedPhone={setSpecificPhone} />
      <PhoneDetails specificPhone={specificPhone} />
    </div>
  );
}

export default App;
