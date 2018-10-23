package com.codeclan.SGNNapi.repositories.articles;

import com.codeclan.SGNNapi.models.Article;
import com.codeclan.SGNNapi.projections.ArticleProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = ArticleProjection.class)
public interface ArticleRepository extends JpaRepository<Article, Long>, ArticleRepositoryCustom {
}
