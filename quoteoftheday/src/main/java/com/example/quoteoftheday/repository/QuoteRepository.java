package com.example.quoteoftheday.repository;

import com.example.quoteoftheday.entity.Quote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuoteRepository extends JpaRepository<Quote, Long> {
    List<Quote> findByAuthor(String author);
}
