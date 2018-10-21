package com.codeclan.SGNNapi.repositories.regions;

import com.codeclan.SGNNapi.models.Region;
import com.codeclan.SGNNapi.projections.RegionProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = RegionProjection.class)
public interface RegionRepository extends JpaRepository<Region, Long> {
}
