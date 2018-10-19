package com.codeclan.SGNNapi.repositories.journalists;

import com.codeclan.SGNNapi.models.Journalist;
import com.codeclan.SGNNapi.projections.JournalistProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = JournalistProjection.class)
public interface JournalistRepository extends JpaRepository<Journalist, Long> {
}
