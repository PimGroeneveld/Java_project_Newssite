package com.codeclan.SGNNapi.repositories.categories;

import com.codeclan.SGNNapi.models.Category;
import com.codeclan.SGNNapi.projections.CategoryProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = CategoryProjection.class)
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
