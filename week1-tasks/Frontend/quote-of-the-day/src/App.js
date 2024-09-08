import React from 'react';
import RandomQuote from './components/RandomQuotes';
import SearchQuote from './components/SearchQuotes';
import { Container, CssBaseline, Typography } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Quote of the Day
        </Typography>
        <RandomQuote />
        <SearchQuote />
      </Container>
    </>
  );
};

export default App;
