/* eslint-disable react/prop-types */

import { Box, Typography } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const BoostCards = ({ item }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={2}
            mb={2}
            sx={{
                width: 120,
                height: 160,
                bgcolor: '#294d86b8', borderRadius: 3, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
                transform: 'scale(1.05)',
                border: '0.1px solid rgba(255, 255, 255, 0.3)',
                color: '#fff',
            }}
        >
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <SportsSoccerIcon sx={{ color: '#fff', fontSize: 36 }} />
                <Box display="flex" flexDirection="column" alignItems="flex-end">
                    <Typography variant="subtitle2" sx={{ fontSize: 14, fontWeight: 'bold' }}>
                        {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: 10, color: '#a0a0a0' }}>
                        Profit per hour
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" width="100%">
                <Typography variant="body2" sx={{ fontSize: 12 }}>
                    lvl {item.level}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 12, color: '#FFD700' }}>
                    {item.price}
                </Typography>
            </Box>
        </Box>
    );
};

export default BoostCards;
