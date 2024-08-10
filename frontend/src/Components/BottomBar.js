import React from 'react';
import { Container, Box, Typography, IconButton, LinearProgress } from '@mui/material';
import { ArrowBack, MoreVert, EmojiEvents, Assignment, TouchApp, LocalFireDepartment, BarChart } from '@mui/icons-material';

const BottomBar = ({ onNavigate }) => {
  return (
    <Box position="fixed" bottom={0} width="100%"  display="flex" justifyContent="space-around"  py={2}>
        <IconButton onClick={() => onNavigate('referral')} sx={{ color: '#fff', flexDirection: 'column', alignItems: 'center' , bgcolor: '#699ae842',
        borderRadius: 3,
        width:'60px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
        transform: 'scale(1.05)',
        border: '0.1px solid rgba(255, 255, 255, 0.3)',}}>
          <EmojiEvents sx={{fontSize:'30px' ,mb:0.5}}/>
          <Typography>Ref</Typography>
        </IconButton>
        <IconButton onClick={() => onNavigate('tasks')} sx={{ color: '#fff', flexDirection: 'column', alignItems: 'center' , bgcolor: '#699ae842',
        borderRadius: 3,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
        width:'60px',
        transform: 'scale(1.05)',
        border: '0.1px solid rgba(255, 255, 255, 0.3)',}}>
          <Assignment sx={{fontSize:'30px' ,mb:0.5}}/>
          <Typography>Tasks</Typography>
        </IconButton>
        <IconButton  onClick={() => onNavigate('earn')} sx={{ color: '#fff', flexDirection: 'column', alignItems: 'center' , bgcolor: '#699ae842',
        borderRadius: 3,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
        width:'60px',
        transform: 'scale(1.05)',
        border: '0.1px solid rgba(255, 255, 255, 0.3)',}}>
          <TouchApp sx={{fontSize:'30px' ,mb:0.5}}/>
          <Typography>Earn</Typography>
        </IconButton>
        <IconButton  onClick={() => onNavigate('boosts')} sx={{ color: '#fff', flexDirection: 'column', alignItems: 'center' , bgcolor: '#699ae842',
        borderRadius: 3,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
        width:'60px',
        transform: 'scale(1.05)',
        border: '0.1px solid rgba(255, 255, 255, 0.3)',}}>
          <LocalFireDepartment sx={{fontSize:'30px' ,mb:0.5}}/>
          <Typography>Boosts</Typography>
        </IconButton>
        
      </Box>
  );
};

export default BottomBar;
