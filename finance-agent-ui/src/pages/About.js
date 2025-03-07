import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

function About() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          About Finance Agent
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography paragraph>
            Finance Agent is an AI-powered financial advisory platform that helps you make informed decisions 
            about your investments and budget planning.
          </Typography>
          <Typography paragraph>
            Our platform uses advanced AI models to analyze your financial data and provide personalized 
            recommendations based on your specific situation and goals.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Features:
          </Typography>
          <ul>
            <li>
              <Typography>Personalized Investment Suggestions</Typography>
            </li>
            <li>
              <Typography>Detailed Budget Planning</Typography>
            </li>
            <li>
              <Typography>Risk Analysis</Typography>
            </li>
            <li>
              <Typography>Portfolio Optimization</Typography>
            </li>
          </ul>
        </Box>
      </Paper>
    </Container>
  );
}

export default About; 