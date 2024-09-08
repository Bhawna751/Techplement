package com.example.quoteoftheday.service;

import com.example.quoteoftheday.entity.Quote;
import com.example.quoteoftheday.repository.QuoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class QuoteService {
    @Autowired
    private QuoteRepository quoteRepository;

    public Quote getRandomQuote(){
        List<Quote> quotes = quoteRepository.findAll();
        System.out.println(quotes.size());
        if(quotes.isEmpty()) return null;
        int randomIndex = (int)(Math.random()*quotes.size());
        return quotes.get(randomIndex);
    }
    public List<Quote> getQuotesByAuthor(String author){
        return quoteRepository.findByAuthor(author);
    }
}
