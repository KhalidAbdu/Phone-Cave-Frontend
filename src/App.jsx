import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [phones, setPhones] = useState([]);
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
      <h1>Home Page</h1>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>{phone.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
