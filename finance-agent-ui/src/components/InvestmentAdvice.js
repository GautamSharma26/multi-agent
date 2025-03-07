import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, List, ListItem, ListItemText } from '@mui/material';

const InvestmentAdvice = ({ data }) => {
  if (!data) return null;

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Investment Strategy
      </Typography>
      <Typography paragraph>{data.summary}</Typography>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Recommended Investments
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Investment Type</TableCell>
              <TableCell>Amount (₹)</TableCell>
              <TableCell>Risk Level</TableCell>
              <TableCell>Expected Returns (%)</TableCell>
              <TableCell>Minimum Period</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.recommended_investments.map((investment, index) => (
              <TableRow key={index}>
                <TableCell>{investment.Investment_Type}</TableCell>
                <TableCell>{investment.Recommended_Amount}</TableCell>
                <TableCell>{investment.Risk_Level}</TableCell>
                <TableCell>{investment.Expected_Annual_Returns}</TableCell>
                <TableCell>{investment.Minimum_Investment_Period}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Key Recommendations
      </Typography>
      <List>
        {data.key_recommendations.map((rec, index) => (
          <ListItem key={index}>
            <ListItemText primary={rec} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Risk Management Tips
      </Typography>
      <List>
        {data.risk_management_tips.map((tip, index) => (
          <ListItem key={index}>
            <ListItemText primary={tip} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default InvestmentAdvice; 