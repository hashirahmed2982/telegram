import React from 'react';
import { Container, Box, Typography, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { ArrowBack, MoreVert, CheckCircle } from '@mui/icons-material';
import { Telegram, YouTube, Twitter, AccountBalance, Group } from '@mui/icons-material';
import Galaxy from '../Components/Galaxy';

const tasks = [
  { title: 'Join our TG channel', points: '+10,000', icon: <Telegram /> },
  { title: 'Get exclusive listing info', points: '+8,000', icon: <YouTube /> },
  { title: 'Follow our X account', points: '+6,000', icon: <Twitter /> },
  { title: 'Choose your exchange', points: '+8,000', icon: <AccountBalance /> },
  { title: 'Invite 3 friends', points: '+20,000', icon: <Group /> },
];

const Tasks = () => {
  return (
    <><Container maxWidth="sm"
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
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                  <IconButton sx={{ color: '#fff' }}>
                      <ArrowBack />
                  </IconButton>
                  <Typography variant="h6">VoteChain</Typography>
                  <IconButton sx={{ color: '#fff' }}>
                      <MoreVert />
                  </IconButton>
              </Box>

              {/* Title */}
              <Box textAlign="center" mb={4}>
                  <Typography variant="h4" fontWeight="bold">Earn more coins</Typography>
              </Box>
              <Box textAlign="left" mb={4}>
                  <Typography variant="h6" fontWeight="500">Daily Tasks</Typography>
              </Box>
              {/* Daily Reward */}
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={2} sx={{ p: 2 ,  bgcolor: '#294d86b8', borderRadius: 3, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
                        transform: 'scale(1.05)',
                        border: '0.1px solid rgba(255, 255, 255, 0.3)',}}>
                  <Typography variant="subtitle1">Daily reward</Typography>
                  <Box display="flex" alignItems="center">
                      <Typography variant="subtitle1" color="#0ddb7c" sx={{ mr: 1 }}>+6,000,000</Typography>
                      <CheckCircle sx={{ color: '#0ddb7c' }} />
                  </Box>
              </Box>
              <Box textAlign="left" mb={3} mt={3}>
                  <Typography variant="h6" fontWeight="500" >Tasks Set</Typography>
              </Box>
              {/* Tasks List */}
              <List>
                  {tasks.map((task, index) => (
                      <ListItem key={index} sx={{   bgcolor: '#294d86b8', borderRadius: 3, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
                        transform: 'scale(1.05)',
                        border: '0.1px solid rgba(255, 255, 255, 0.3)', mb: 2 }}>
                          <ListItemAvatar>
                              <IconButton sx={{ color: '#fff' }}>
                                  {task.icon}
                              </IconButton>
                          </ListItemAvatar>
                          <ListItemText primary={task.title} secondary={task.points} />
                      </ListItem>
                  ))}
              </List>
          </Container></>
  );
};

export default Tasks;
