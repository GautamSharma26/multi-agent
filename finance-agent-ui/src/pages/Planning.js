import React, { useState } from 'react';
import { Container, Alert, Snackbar } from '@mui/material';
import FinanceForm from '../components/FinanceForm';
import InvestmentAdvice from '../components/InvestmentAdvice';
import BudgetPlan from '../components/BudgetPlan';
import { getFinanceAdvice } from '../services/api';

function Planning() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      setError(null);
      const result = await getFinanceAdvice(data);
      setResponse(result);
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <FinanceForm onSubmit={handleSubmit} disabled={loading} />
      {response?.suggestions && (
        <InvestmentAdvice data={response.suggestions} />
      )}
      {response?.budget_planning && (
        <BudgetPlan data={response.budget_planning} />
      )}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
      >
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Planning; 