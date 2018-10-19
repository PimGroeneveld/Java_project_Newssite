package com.codeclan.SGNNapi.repositories.articles;

import com.codeclan.SGNNapi.models.Article;

import java.util.List;

public interface ArticleRepositoryCustom {

    List<Article> sortArticlesByDate();
}
