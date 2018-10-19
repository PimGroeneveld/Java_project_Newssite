package com.codeclan.SGNNapi.projections;

import com.codeclan.SGNNapi.models.Article;
import com.codeclan.SGNNapi.models.Category;
import com.codeclan.SGNNapi.models.CategoryName;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "categoryProjection", types = Category.class)
public interface CategoryProjection {
    Long getId();
    CategoryName getCategoryName();
    List<Article> getArticles();

}
