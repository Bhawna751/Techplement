package com.example.quoteoftheday.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Quotes")
public class Quote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String author;
    private String quote;
    public Quote(String quote, String author){
        this.author=author;
        this.quote=quote;
    }

}
