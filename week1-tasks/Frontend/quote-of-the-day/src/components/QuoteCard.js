import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const QuoteCard = ({ quote }) => {
  return (
    <Card sx={{ backgroundColor: '#1b1b1b', color: '#fff', borderRadius: '12px', boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          "{quote.content}"
        </Typography>
        <Typography variant="subtitle1" color="cyan">
          - {quote.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
