package com.codeclan.SGNNapi.repositories.articles;

import com.codeclan.SGNNapi.models.Article;
import com.codeclan.SGNNapi.models.Category;
import com.codeclan.SGNNapi.models.CategoryName;
import com.codeclan.SGNNapi.models.Region;

import java.util.List;

public interface ArticleRepositoryCustom {

    List<Article> sortArticlesByDate();
    List<Article> findArticlesByCategory(Long categoryId);
    List<Article> findArticlesByJournalist(Long journalistId);
    List<Article> findArticlesByRegion(Region region);
}
