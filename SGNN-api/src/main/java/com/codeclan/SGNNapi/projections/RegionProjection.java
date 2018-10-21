package com.codeclan.SGNNapi.projections;

import com.codeclan.SGNNapi.models.Article;
import com.codeclan.SGNNapi.models.Region;
import com.codeclan.SGNNapi.models.RegionName;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "regionProjection", types = Region.class)
public interface RegionProjection {
    Long getId();
    RegionName getRegionName();
    List<Article> getArticles();
}
