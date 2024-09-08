import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField, Button, List, ListItem, ListItemText, Container, Typography, Card, CardContent
} from '@mui/material';

const SearchQuotes = () => {
  const [author, setAuthor] = useState('');
  const [quotes, setQuotes] = useState([]);

  const handleSearch = () => {
    axios.get(`http://localhost:8080/api/quotes/author?author=${author}`).then((response) => {
      setQuotes(response.data);
    });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <Card>
        <CardContent>
          <Typography variant="h6">Search Quotes by Author</Typography>
          <TextField
            label="Author Name"
            fullWidth
            variant="outlined"
            margin="normal"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>

          <List>
            {quotes.map((quote) => (
              <ListItem key={quote.id}>
                <ListItemText
                  primary={`"${quote.quote}"`}
                  secondary={`- ${quote.author}`}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SearchQuotes;
