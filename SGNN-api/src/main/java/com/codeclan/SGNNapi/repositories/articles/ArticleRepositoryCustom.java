package com.codeclan.SGNNapi.repositories.articles;

import com.codeclan.SGNNapi.models.Article;
import com.codeclan.SGNNapi.models.RegionName;

import java.util.List;

public interface ArticleRepositoryCustom {

    List<Article> sortArticlesByDate();
    List<Article> findArticlesByCategory(Long categoryId);
    List<Article> findArticlesByJournalist(Long journalistId);
    List<Article> findArticlesByRegion(RegionName region);
    List<Article> findArticlesByHeadline(String searchText);
}
