package com.codeclan.SGNNapi.controllers;

import com.codeclan.SGNNapi.models.Article;
import com.codeclan.SGNNapi.repositories.articles.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/articles")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepository;

    @GetMapping
    public List<Article> getSortedArticles(){
        return articleRepository.sortArticlesByDate();
    }

    @GetMapping(value = "/category/{categoryId}")
    public List<Article> findArticlesByCategory(@PathVariable Long categoryId){
        return articleRepository.findArticlesByCategory(categoryId);
    }

    @GetMapping(value = "/journalist/{journalistId}")
    public List<Article> findArticlesByJournalist(@PathVariable Long journalistId){
        return articleRepository.findArticlesByJournalist(journalistId);
    }
}
