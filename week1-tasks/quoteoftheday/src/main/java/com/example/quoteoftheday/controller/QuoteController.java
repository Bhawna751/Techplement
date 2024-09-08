package com.example.quoteoftheday.controller;

import com.example.quoteoftheday.entity.Quote;
import com.example.quoteoftheday.service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import java.util.List;

@RestController
@RequestMapping("/api/quotes")
@CrossOrigin(origins = "http://localhost:3000")
public class QuoteController {
    @Autowired
    private final QuoteService quoteService;

    @Autowired
    public QuoteController(QuoteService quoteService){
        this.quoteService = quoteService;
    }

    @GetMapping("/randomQuote")
    public ResponseEntity<Quote> getRandomQuote(){
        return ResponseEntity.ok(quoteService.getRandomQuote());
    }

    @GetMapping("/author")
    public ResponseEntity<List<Quote>> getQuotesByAuthor(@RequestParam String author){
        return ResponseEntity.ok(quoteService.getQuotesByAuthor(author));
    }

}
