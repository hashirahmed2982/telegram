
import { CardContent, Typography, Button, Box } from '@mui/material';
import { MonetizationOn } from '@mui/icons-material';

const SmallCard = () => {
  return (

    <><CardContent sx={{

      padding: 0,
    }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 2,


        }}
      >
        <img
          src="/boost.png"
          alt="Lightning"
          style={{ width: 40, height: 40 }} />
      </Box>
      <Typography variant="bod2" gutterBottom sx={{ fontSize: '14px' }}>
        increase your level and get 2x profits.
      </Typography>
      <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '14px', mt: 1, mb: 1 }}>
        LV 1
      </Typography>
    </CardContent>
      <Button
        variant="contained"
        sx={{
          width: '100%',
          backgroundColor: '#5f61a58f',
          '&:hover': {
            backgroundColor: '#222466d9',
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 0.5,
        }}
      >
        <Typography variant="subtitle1" sx={{ color: '#fff', marginBottom: -1, fontSize: '15px' }}>
          Upgrade
        </Typography>
        <Box display="flex" alignItems="center">
          <MonetizationOn sx={{ color: '#FFD700', fontSize: '12px', }} />
          <Typography variant="subtitle1" sx={{ color: '#FFD700', fontSize: '12px' }}>100</Typography>
        </Box>
      </Button></>

  );
};

export default SmallCard;
