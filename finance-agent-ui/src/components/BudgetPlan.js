import React from 'react';
import { Paper, Typography } from '@mui/material';

const BudgetPlan = ({ data }) => {
  if (!data) return null;

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Budget Plan
      </Typography>
      <Typography
        component="pre"
        sx={{
          whiteSpace: 'pre-wrap',
          fontFamily: 'monospace',
          fontSize: '0.9rem'
        }}
      >
        {data}
      </Typography>
    </Paper>
  );
};

export default BudgetPlan; 