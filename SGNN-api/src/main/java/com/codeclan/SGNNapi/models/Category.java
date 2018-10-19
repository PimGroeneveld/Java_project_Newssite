package com.codeclan.SGNNapi.models;

import java.util.ArrayList;
import java.util.List;

public class Category {

    private Long id;

    private CategoryName name;

    private List<Article> articles;

    public Category() {
    }

    public Category(CategoryName name) {
        this.name = name;
        this.articles = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CategoryName getName() {
        return name;
    }

    public void setName(CategoryName name) {
        this.name = name;
    }

    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }
}
