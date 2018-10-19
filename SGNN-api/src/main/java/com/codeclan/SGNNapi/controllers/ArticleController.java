package com.codeclan.SGNNapi.controllers;

import com.codeclan.SGNNapi.models.Article;
import com.codeclan.SGNNapi.models.Region;
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
    public List<Article> filterArticlesByCategory(@PathVariable Long categoryId){
        return articleRepository.findArticlesByCategory(categoryId);
    }

    @GetMapping(value = "/journalist/{journalistId}")
    public List<Article> filterArticlesByJournalist(@PathVariable Long journalistId){
        return articleRepository.findArticlesByJournalist(journalistId);
    }

    @GetMapping(value = "/region/{regionName}")
    public List<Article> findArticlesByRegion(@PathVariable String regionName){
        Region region = Region.valueOf(regionName.toUpperCase());
        return articleRepository.findArticlesByRegion(region);
    }
}
