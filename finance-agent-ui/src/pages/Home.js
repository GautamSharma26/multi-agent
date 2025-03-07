import React from 'react';
import { Container, Typography, Paper, Box, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShowChartIcon from '@mui/icons-material/ShowChart';

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Finance Agent
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Your AI-Powered Financial Planning Assistant
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <ShowChartIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Investment Planning
            </Typography>
            <Typography paragraph>
              Get personalized investment suggestions based on your financial profile.
              Our AI analyzes your data to provide optimal investment strategies.
            </Typography>
            <Box sx={{ mt: 'auto', pt: 2 }}>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => navigate('/planning')}
              >
                Start Planning
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <AccountBalanceIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Budget Management
            </Typography>
            <Typography paragraph>
              Create detailed budget plans that help you manage your finances effectively.
              Get insights on spending patterns and savings opportunities.
            </Typography>
            <Box sx={{ mt: 'auto', pt: 2 }}>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => navigate('/planning')}
              >
                Create Budget
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home; 