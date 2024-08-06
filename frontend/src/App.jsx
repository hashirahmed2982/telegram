import { useEffect, useState } from 'react'

import './App.css'
import WebApp from '@twa-dev/sdk'
import axios from 'axios';

const initialUserData = {
  id: null,
  first_name: '',
  last_name: '',
  username: '',
  language_code: '',
  is_premium: false
}
function App() {
  const API_URL = 'http://localhost:4000/game';
  
  const [userData, setUserData] = useState(initialUserData);
  const [userData1, setUserData1] = useState({});

  const SaveUser = async () => {
    try {
     
      console.log("Attempting to save user data:", userData); // Debugging statement
      const response = await axios.post(`${API_URL}/loginuser`, userData);
      console.log("User data saved successfully:", response.data); // Debugging statement
      setUserData1(response.data);
      WebApp.showAlert(response.data.id)
    } catch (error) {
      console.error("Error saving user data:", error); // Debugging statement
    }
  };
  useEffect(() => {
    
    if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user);
      
      SaveUser();
     
    } else {
      console.error("WebApp.initDataUnsafe.user is not available"); // Debugging statement
    }
  }, [userData]);
  return (
    <>
      {userData1.id ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <ul>
            <li>ID: {userData1.id}</li>
            <li>First Name: {userData1.first_name}</li>
            <li>Last Name: {userData1.last_name || 'N/A'}</li>
            <li>Username: {userData1.username || 'N/A'}</li>
            <li>Language Code: {userData1.language_code}</li>
            <li>Is Premium: {userData1.is_premium ? 'Yes' : 'No'}</li>
          </ul>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App
