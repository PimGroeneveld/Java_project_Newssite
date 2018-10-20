package com.codeclan.SGNNapi.repositories.regions;

import com.codeclan.SGNNapi.models.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegionRepository extends JpaRepository<Region, Long> {
}
