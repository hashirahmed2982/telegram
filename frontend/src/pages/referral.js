"use client";
import React from 'react';
import { Container, Box, Typography, IconButton, Button, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { ArrowBack, MoreVert, EmojiEvents, CopyAll } from '@mui/icons-material';
import InviteCard from '../Components/InviteCaed';
import { useState } from 'react';
import Galaxy from '../Components/Galaxy';

const Refferal = () => {
  const [showBonuses, setShowBonuses] = useState(false);

  const bonuses = [
    { level: 'Silver', friend: '+20,000', premium: '+25,000', image: '/1.webp' },
    { level: 'Gold', friend: '+30,000', premium: '+50,000', image: '/1.webp' },
    { level: 'Platinum', friend: '+40,000', premium: '+75,000', image: '/1.webp' },
    { level: 'Diamond', friend: '+60,000', premium: '+100,000', image: '/1.webp' },
    { level: 'Epic', friend: '+100,000', premium: '+150,000', image: '/1.webp' },
    { level: 'Legendary', friend: '+250,000', premium: '+500,000', image: '/1.webp' },
  ];

  return (
    <>
      
      <Container maxWidth="sm" sx={{ color: '#fff', minHeight: '100vh', py: 2, pb: 8, position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Galaxy />
      </Box>
        {/* Header */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <IconButton sx={{ color: '#fff' }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">VoteChain</Typography>
          <IconButton sx={{ color: '#fff' }}>
            <MoreVert />
          </IconButton>
        </Box>

        {/* Referrals Section */}
        <Box textAlign="center" mb={2}>
          <Typography variant="h4" fontWeight="bold">1 Referrals</Typography>
          <Typography variant="h5" color="#0ddb7c">+17 000</Typography>
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
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="subtitle1">Nofil Iqbal</Typography>
              <Typography variant="subtitle1" color="#0ddb7c">+17 000</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <EmojiEvents sx={{ color: 'gold', mr: 1 }} />
              <Typography variant="subtitle1" sx={{ color: 'gold' }}>gold</Typography>
              <Typography variant="subtitle1" sx={{ ml: 2 }}>194 069</Typography>
            </Box>
            <Box>
              <Box sx={{ bgcolor: '#3b3b4f', height: 10, borderRadius: 5 }}>
                <Box sx={{ bgcolor: '#000850', height: '100%', width: '100%', borderRadius: 5 }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Refferal;
