/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { Container, Box, Typography, LinearProgress } from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';
import Galaxy from '../Components/Galaxy';
import axios from 'axios';

const Earn = ({ userdata }) => {

  const [userdata1, setUserData1] = useState(userdata);


  const [isPressedCoin1, setIsPressedCoin1] = useState(false);
  const [pointsCoin1, setPointsCoin1] = useState(userdata.taps);
  const [clicksCoin1, setClicksCoin1] = useState([]);
  const [totalVotesCoin1, setTotalVotesCoin1] = useState(0);

  const [isPressedCoin2, setIsPressedCoin2] = useState(false);
  const [pointsCoin2, setPointsCoin2] = useState(0);
  const [clicksCoin2, setClicksCoin2] = useState([]);
  const [totalVotesCoin2, setTotalVotesCoin2] = useState(0);

  const [energy, setEnergy] = useState(userdata.energy);
  const [totalenergy ,settotalenergy] = useState(userdata.totalenergy);
  const API_URL = ' https://5fe9-176-234-130-119.ngrok-free.app/game';

  const pointsToAdd = userdata.pointsadd;
  const energyToReduce = 1;

  const handleMouseDown = (coin) => {
    if (coin === 1) setIsPressedCoin1(true);
    if (coin === 2) setIsPressedCoin2(true);
  };

  const handleMouseUp = (coin) => {
    if (coin === 1) setIsPressedCoin1(false);
    if (coin === 2) setIsPressedCoin2(false);
  };
  const handleClick = async (coin, e) => {
    const { points, setPoints, clicks, setClicks, totalVotes, setTotalVotes } = coin === 1
      ? { points: pointsCoin1, setPoints: setPointsCoin1, clicks: clicksCoin1, setClicks: setClicksCoin1, totalVotes: totalVotesCoin1, setTotalVotes: setTotalVotesCoin1 }
      : { points: pointsCoin2, setPoints: setPointsCoin2, clicks: clicksCoin2, setClicks: setClicksCoin2, totalVotes: totalVotesCoin2, setTotalVotes: setTotalVotesCoin2 };
    console.log(isPressedCoin2);
    if (energy - energyToReduce < 0) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newPoints = points + pointsToAdd;
    const newEnergy = Math.max(0, energy - energyToReduce);

    setPoints(newPoints);
    setEnergy(newEnergy);
    setClicks([...clicks, { id: Date.now(), x, y }]);
    setTotalVotes(totalVotes + 780923);
    await fetch(`https://5fe9-176-234-130-119.ngrok-free.app/game/user/${userdata1.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ taps: newPoints, energy: newEnergy }),
    });
  };

  // const handleAnimationEnd = (coin, id) => {
  //   const setClicks = coin === 1 ? setClicksCoin1 : setClicksCoin2;
  //   setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
  // };
  const getUser = async (id) => {
    try {
      const response = await axios.post(`${API_URL}/loginuser`, {id:id});
      console.log("User data saved successfully:", response.data); // Debugging statement
      setUserData1(response.data);
      setEnergy(response.data.energy);
      setPointsCoin1(response.data.taps);
      settotalenergy(response.data.totalenergy);
    } catch (error) {
      console.error("Error saving user data:", error); // Debugging statement
    }
  };
  useEffect(() => {
    getUser(userdata.id)
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => Math.min(prevEnergy + 1, totalenergy));
    }, 60000);
    fetch(`https://5fe9-176-234-130-119.ngrok-free.app/game/user/${userdata.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ energy: energy }),
    });

    return () => clearInterval(interval);
  }, []);
  return (
    <Container maxWidth="sm"
      sx={{
        color: '#fff',
        minHeight: '100vh',
        py: 2,
        pb: 8,
        position: 'relative'
      }}>
      {/* Header */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Galaxy />
      </Box>
      {/* Fixed White House Image */}
      <Box sx={{
        position: 'fixed',
        top: '9%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: -1,
        width: {
          xs: '100%', // Full width on extra small screens
          sm: '80%',  // 80% width on small screens
          md: '60%',  // 60% width on medium screens
        },
        textAlign: 'center'
      }}>
        <img src={'/white_house.png'} alt="White House" style={{ width: '100%', maxWidth: '900px' }} />
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" mt={0.5}>
        <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
          {pointsCoin1.toLocaleString()}
        </Typography>
        <Typography variant="subtitle1" color="primary">
          <EmojiEvents sx={{ verticalAlign: 'middle' }} /> Legendary
        </Typography>
      </Box>

      <Box mt={24} display="flex" justifyContent="center">
        <div onClick={(e) => handleClick(1, e)}
          onMouseDown={() => handleMouseDown(1)}
          onMouseUp={() => handleMouseUp(1)}
          onMouseLeave={() => handleMouseUp(1)}
          onTouchStart={() => handleMouseDown(1)}
          onTouchEnd={() => handleMouseUp(1)}
          onTouchCancel={() => handleMouseUp(1)}>
           <img src="/kamala_card.png" alt="Coin" draggable="false" style={{
            width: '190px', height: '90%', marginRight: '16px', pointerEvents: 'none',
            userSelect: 'none',
            transform: isPressedCoin1 ? 'translateY(4px)' : 'translateY(0px)',
            transition: 'transform 100ms ease'
          }} className='select-none' />
        </div>
      </Box>

      <Box mt={'auto'} display="flex" justifyContent="center">
        <LinearProgress variant="determinate" value={((energy / totalenergy) * 100)} sx={{
          width: '90%',
          height: 10,
          borderRadius: 5,
          bgcolor: 'grey.800',
          '& .MuiLinearProgress-bar': { bgcolor: 'blue' }
        }} />
      </Box>

      <Typography align="center" variant="body1" mt={1}>
        {energy}/{totalenergy}
      </Typography>
    </Container>
  );
};

export default Earn;