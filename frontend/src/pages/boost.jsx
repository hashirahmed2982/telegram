
import { Container, Box, Typography, IconButton, Button } from '@mui/material';
import { ArrowBack, MoreVert } from '@mui/icons-material';
import SmallCard from '../Components/smallCard';
import Galaxy from '../Components/Galaxy';
import BoostCards from '../Components/boostcards';

const Boost = () => {
    const boosts = [
        { title: 'Silver', level: '1', price: '+25,000' },
        { title: 'Silver', level: '1', price: '+25,000' },
        { title: 'Silver', level: '1', price: '+25,000' },
        { title: 'Silver', level: '1', price: '+25,000' },
        { title: 'Silver', level: '1', price: '+25,000' },
        { title: 'Silver', level: '1', price: '+25,000' },


    ];
    return (
        <><Container
            maxWidth="sm"
            sx={{
                color: '#fff',
                minHeight: '100vh',
                py: 2,
                pb: 8,
                position: 'relative'
            }}
        >
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

            {/* Daily Combo */}
            <Box textAlign="center" mb={2}>
                <Typography variant="h5" fontWeight="bold">Level Up</Typography>
                <Typography variant="subtitle1">Increase your Levels to Earn more!</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
                <Box sx={{
                    bgcolor: '#294d86b8',
                    borderRadius: 3,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
                    transform: 'scale(1.05)',
                    border: '0.1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center', width: '30%'
                }}>
                    <SmallCard></SmallCard>
                </Box>
                <Box sx={{
                    bgcolor: '#294d86b8',
                    borderRadius: 3,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
                    transform: 'scale(1.05)',
                    border: '0.1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center', width: '30%'
                }}>
                    <SmallCard></SmallCard>
                </Box>
                <Box sx={{
                    bgcolor: '#294d86b8',
                    borderRadius: 3,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
                    transform: 'scale(1.05)',
                    border: '0.1px solid rgba(255, 255, 255, 0.3)', textAlign: 'center', width: '30%'
                }}>
                    <SmallCard></SmallCard>
                </Box>
            </Box>

            {/* Balance */}
            <Box textAlign="center" mb={2}>
                <Typography variant="h4" fontWeight="bold" sx={{ color: '#FFD700' }}>$5,846</Typography>
            </Box>

            {/* Tabs */}
            <Box display="flex" justifyContent="space-between" mb={2}>
                <Button sx={{ color: '#fff' }}>PR&Team</Button>
                <Button sx={{ color: '#fff' }}>Markets</Button>
                <Button sx={{ color: '#fff' }}>Legal</Button>
                <Button sx={{ color: '#fff' }}>Web3</Button>
                <Button sx={{ color: '#fff' }}>Specials</Button>
            </Box>

            {/* Boost Cards */}
            <Box mb={2} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
                {boosts.map((item, index) => (
                    <BoostCards item={item} key={index} />
                ))}
            </Box>

        </Container></>
    );
};

export default Boost;
