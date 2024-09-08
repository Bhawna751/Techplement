import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomQuote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/quotes/randomQuote')
      .then((response) => {
        setQuote(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the quote: ", error);
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full max-w-md p-6 bg-white bg-opacity-80 rounded-lg shadow-lg backdrop-blur-sm">
        {loading ? (
          <div className="flex justify-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-semibold text-center text-gray-800">Quote of the Day</h1>
            <p className="mt-4 text-lg font-medium text-center text-gray-600 italic">
              "{quote.quote}"
            </p>
            <p className="mt-2 text-sm text-center text-gray-500">- {quote.author}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default RandomQuote;
