package com.codeclan.SGNNapi.projections;

import com.codeclan.SGNNapi.models.Article;
import com.codeclan.SGNNapi.models.Category;
import com.codeclan.SGNNapi.models.Journalist;
import com.codeclan.SGNNapi.models.RegionName;
import org.springframework.data.rest.core.config.Projection;

import java.time.LocalDateTime;
import java.util.List;

@Projection(name = "articleProjection", types = Article.class)
public interface ArticleProjection {
    Long getId();
    String getHeadline();
    String getSummary();
    String getFullStory();
    LocalDateTime getPublishDate();
    String getImageUrl();
    RegionName getRegion();
    List<Journalist> getJournalists();
    List<Category> getCategories();
}
