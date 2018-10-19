package com.codeclan.SGNNapi.models;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;

public class Journalist {

    private Long id;

    private String name;

    private List<Article> articles;

    public Journalist() {
    }

    public Journalist(String name) {
        this.name = name;
        this.articles = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }
}
