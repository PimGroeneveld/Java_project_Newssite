package com.codeclan.SGNNapi.projections;

import com.codeclan.SGNNapi.models.Article;
import com.codeclan.SGNNapi.models.Journalist;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "journalistProjection", types = Journalist.class)
public interface JournalistProjection {
    Long getId();
    String getName();
    List<Article> getArticles();
}
