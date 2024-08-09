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
  const API_URL = ' https://5fe9-176-234-130-119.ngrok-free.app/game';
  
  const [userData, setUserData] = useState(initialUserData);
  const [userData1, setUserData1] = useState({});

  const SaveUser = async (user) => {
    try {
     
      console.log("Attempting to save user data:", userData); // Debugging statement
      const response = await axios.post(`${API_URL}/loginuser`, user);
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
      
      SaveUser(WebApp.initDataUnsafe.user);
     
    } else {
      console.error("WebApp.initDataUnsafe.user is not available"); // Debugging statement
    }
  }, []);
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
