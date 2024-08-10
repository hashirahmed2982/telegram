/* eslint-disable react/prop-types */

import { Box, Typography } from '@mui/material';
import { MonetizationOn } from '@mui/icons-material';

const InviteCard = ({ image, title, points }) => {
  return (
    <Box display="flex" alignItems="center" mb={2} pr={1} pl={1} sx={{
      bgcolor: '#294d86b8',
      borderRadius: 3,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
      transform: 'scale(1.05)',
      border: '0.1px solid rgba(255, 255, 255, 0.3)',
    }}>
      <img src={image} alt="Invite Icon" style={{ width: 110, height: 110, marginRight: 10 }} />
      <Box>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: '14px' }}>{title}</Typography>
        <Box display="flex" alignItems="center" >
          <MonetizationOn sx={{ color: '#FFD700', mr: 1, fontSize: '14px' }} />
          <Typography variant="subtitle1" sx={{ color: '#FFD700', fontSize: '14px' }}>{points}</Typography>
          <Typography variant="subtitle1" sx={{ ml: 1, fontSize: '14px' }}>for you and your friend</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InviteCard;
