package com.codeclan.SGNNapi.controllers;

import com.codeclan.SGNNapi.models.Article;
import com.codeclan.SGNNapi.models.RegionName;
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

//    @GetMapping(path = "/date")
//    public List<Article> getSortedArticles(@PathVariable String date){
//        return articleRepository.sortArticlesByDate();
//    }

    @GetMapping(value = "/category/{categoryId}")
    public List<Article> filterArticlesByCategory(@PathVariable Long categoryId){
        return articleRepository.findArticlesByCategory(categoryId);
    }

    @GetMapping(value = "/journalist/{journalistId}")
    public List<Article> filterArticlesByJournalist(@PathVariable Long journalistId){
        return articleRepository.findArticlesByJournalist(journalistId);
    }

    @GetMapping(value = "/region/{regionName}")
    public List<Article> filterArticlesByRegion(@PathVariable String regionName){
        RegionName region = RegionName.valueOf(regionName.toUpperCase());
        return articleRepository.findArticlesByRegion(region);
    }

    @GetMapping(value = "/search/{searchText}")
    public List<Article> filterArticlesBySearchHeadline(@PathVariable String searchText){
        return articleRepository.findArticlesByHeadline(searchText);
    }
}
