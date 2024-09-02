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
public class QuoteController {
    @Autowired
    private final QuoteService quoteService;

    @Autowired
    public QuoteController(QuoteService quoteService){
        this.quoteService = quoteService;
    }

    @GetMapping("/random")
    public ResponseEntity<Quote> getRandomQuote(){
        return ResponseEntity.ok(quoteService.getRandomQuote());
    }

    @GetMapping("/author")
    public ResponseEntity<List<Quote>> getQuotesByAuthor(@RequestBody String author){
        return ResponseEntity.ok(quoteService.getQuotesByAuthor(author));
    }

}
