import { useEffect, useState } from 'react'

import './App.css'
import WebApp from '@twa-dev/sdk'
import axios from 'axios';
import TapSwapPage from './pages/TapSwapPage'
import Boost from './pages/boost'
import Tasks from './pages/tasks'
import Refferal from './pages/referral'
import BottomBar from './Components/BottomBar'


const initialUserData = {
  id: null,
  first_name: '',
  last_name: '',
  username: '',
  language_code: '',
  is_premium: false,
  refferallink: '',
}
function App() {
  const API_URL = ' https://5fe9-176-234-130-119.ngrok-free.app/game';

  const [userData, setUserData] = useState(initialUserData);
  const [userData1, setUserData1] = useState({});

  const SaveUser = async (user) => {
    try {

      console.log("Attempting to save user data:", userData);
      user.refferallink = 'https://t.me/vote2982_bot?start=${'+userData.id +'}'; // Debugging statement
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
  const [currentPage, setCurrentPage] = useState('earn');

  const renderPage = () => {
    switch (currentPage) {
      case 'referral':
        return <Refferal />;
      case 'tasks':
        return <Tasks />;
      case 'earn':
        return <TapSwapPage userdata={userData1} />;
      case 'boosts':
        return <Boost />;
      default:
        return <TapSwapPage />;
    }
  };
  return (
    <>
      {userData1.id ? (
        <>
          {renderPage()}
          <BottomBar onNavigate={setCurrentPage} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App
