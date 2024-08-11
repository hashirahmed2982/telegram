/* eslint-disable react/prop-types */

import { Container, Box, Typography, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';
import InviteCard from '../Components/InviteCaed';
import { useEffect, useState } from 'react';
import Galaxy from '../Components/Galaxy';


// eslint-disable-next-line react/prop-types
const Refferal = ({ userdata }) => {
  const [showBonuses, setShowBonuses] = useState(false);
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalRewards, setTotalRewards] = useState(0);
  const [totalReferrals, setTotalReferrals] = useState(0);
  const bonuses = [
    { level: 'Silver', friend: '+20,000', premium: '+25,000', image: '/1.webp' },
    { level: 'Gold', friend: '+30,000', premium: '+50,000', image: '/1.webp' },
    { level: 'Platinum', friend: '+40,000', premium: '+75,000', image: '/1.webp' },
    { level: 'Diamond', friend: '+60,000', premium: '+100,000', image: '/1.webp' },
    { level: 'Epic', friend: '+100,000', premium: '+150,000', image: '/1.webp' },
    { level: 'Legendary', friend: '+250,000', premium: '+500,000', image: '/1.webp' },
  ];
  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        console.log("dada", userdata.id);
        const id = userdata.id;
        console.log("dadas", id);
        
        // Make a GET request to your API endpoint
        const response = await fetch(`https://5fe9-176-234-130-119.ngrok-free.app/referal/referalslist/${id}`);
    
        // Check if the response is okay
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        // Parse the JSON data from the response
        const fetchedReferrals = await response.json();
    
        // Safely handle the case where the fetchedReferrals array is empty
        const totalRewards = fetchedReferrals.length > 0
          ? fetchedReferrals.reduce((acc, referral) => acc + referral.reward, 0)
          : 0;
    
        const totalReferrals = fetchedReferrals.length;
    
        // Update the state with the fetched data
        setReferrals(fetchedReferrals);
        setTotalRewards(totalRewards);
        setTotalReferrals(totalReferrals);
        setLoading(false);
      } catch (error) {
        setError('Error fetching referrals');
        setLoading(false);
        console.error("Error fetching referrals:", error); // Log the error for debugging
      }
    };

    fetchReferrals();
  }, []);
  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>{error}</Typography>;
  return (
    <>

      <Container maxWidth="sm" sx={{ color: '#fff', minHeight: '100vh', py: 2, pb: 8, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Galaxy />
        </Box>

        {/* Referrals Section */}
        <Box textAlign="center" mb={2}>
          <Typography variant="h4" fontWeight="bold">{totalReferrals} Referrals</Typography>
          <Typography variant="h5" color="#0ddb7c">+{totalRewards}</Typography>
        </Box>

        {/* Invite Cards Section */}
        <Box mb={2}>
          <InviteCard
            image="/usagift.png"
            title="Invite a friend"
            points="+5,000"
          />
          <InviteCard
            image="/usagift.png"
            title="Invite a friend with Telegram Premium"
            points="+25,000"
          />
        </Box>
        <Box textAlign="center" mb={2}>
          <Typography variant="h4" fontWeight="bold" onClick={() => setShowBonuses(!showBonuses)}>
            {showBonuses ? 'Hide Bonuses' : 'Show Bonuses'}
          </Typography>
        </Box>

        {/* Bonuses List */}
        {showBonuses && (
          <Box mb={2} p={2} sx={{ bgcolor: '#2b2b3f', borderRadius: 2 }}>
            <List>
              {bonuses.map((bonus, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <img src={bonus.image} alt={`${bonus.level} bonus`} style={{ width: 50, height: 50, borderRadius: '50%' }} />
                  </ListItemAvatar>
                  <ListItemText primary={bonus.level} secondary={`Friend: ${bonus.friend}, Premium: ${bonus.premium}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        {/* My Referrals */}
        <Box>
          <Typography variant="subtitle1" mb={1}>My Referrals:</Typography>
          <Box p={2} sx={{
            bgcolor: '#294d86b8',
            borderRadius: 3,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
            transform: 'scale(1.05)',
            border: '0.1px solid rgba(255, 255, 255, 0.3)',
          }}>
            {referrals.length > 0 ? (
            referrals.map((referral, index) => (
            <><Box key={index} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="subtitle1">{referral.referredName}</Typography>
                <Typography variant="subtitle1" color="#0ddb7c">+{referral.reward}</Typography>
              </Box><Box display="flex" alignItems="center" mb={1}>
                  <EmojiEvents sx={{ color: 'gold', mr: 1 }} />
                  <Typography variant="subtitle1" sx={{ color: 'gold' }}>gold</Typography>
                </Box>
                <Box>
                </Box></>
            ))
          ) : (
            <Typography>No referrals found.</Typography>
          )}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Refferal;
