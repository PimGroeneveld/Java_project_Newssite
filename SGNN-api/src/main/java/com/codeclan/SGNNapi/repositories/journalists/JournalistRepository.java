package com.codeclan.SGNNapi.repositories.journalists;

import com.codeclan.SGNNapi.models.Journalist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JournalistRepository extends JpaRepository<Journalist, Long> {
}
