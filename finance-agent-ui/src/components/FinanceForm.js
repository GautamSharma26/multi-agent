import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Paper,
  Grid,
} from '@mui/material';

const FinanceForm = ({ onSubmit, disabled }) => {
  const [formData, setFormData] = useState({
    username: '',
    income_amount: '',
    expenses: '',
    savings: '',
    income_frequency: 'monthly',
    investments: [{ type: '', amount: '' }],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInvestmentChange = (index, field, value) => {
    const newInvestments = [...formData.investments];
    newInvestments[index][field] = value;
    setFormData({ ...formData, investments: newInvestments });
  };

  const addInvestment = () => {
    setFormData({
      ...formData,
      investments: [...formData.investments, { type: '', amount: '' }],
    });
  };

  const removeInvestment = (index) => {
    const newInvestments = formData.investments.filter((_, i) => i !== index);
    setFormData({ ...formData, investments: newInvestments });
  };

  const handleSubmit = (type) => {
    const payload = {
      selected_input: type,
      user_data: {
        ...formData,
        income_amount: Number(formData.income_amount),
        expenses: Number(formData.expenses),
        savings: Number(formData.savings),
        investments: formData.investments.map(inv => ({
          ...inv,
          amount: Number(inv.amount)
        }))
      }
    };
    onSubmit(payload);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Financial Information
      </Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Income Frequency</InputLabel>
              <Select
                name="income_frequency"
                value={formData.income_frequency}
                onChange={handleChange}
                label="Income Frequency"
              >
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="yearly">Yearly</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Income Amount"
              name="income_amount"
              type="number"
              value={formData.income_amount}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Expenses"
              name="expenses"
              type="number"
              value={formData.expenses}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Savings"
              name="savings"
              type="number"
              value={formData.savings}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
          Investments
        </Typography>
        {formData.investments.map((investment, index) => (
          <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label="Investment Type"
                value={investment.type}
                onChange={(e) => handleInvestmentChange(index, 'type', e.target.value)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label="Amount"
                type="number"
                value={investment.amount}
                onChange={(e) => handleInvestmentChange(index, 'amount', e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="outlined"
                color="error"
                onClick={() => removeInvestment(index)}
                disabled={formData.investments.length === 1}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        ))}

        <Button variant="outlined" onClick={addInvestment} sx={{ mb: 3 }}>
          Add Investment
        </Button>

        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            onClick={() => handleSubmit('Investment Suggestions')}
          >
            Get Investment Advice
          </Button>
          <Button
            variant="contained"
            onClick={() => handleSubmit('Budget Planning')}
          >
            Get Budget Plan
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default FinanceForm; 