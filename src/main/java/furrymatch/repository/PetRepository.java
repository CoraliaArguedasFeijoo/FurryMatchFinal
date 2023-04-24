package furrymatch.repository;

import furrymatch.domain.Pet;
import furrymatch.domain.Photo;
import furrymatch.domain.SearchCriteria;
import java.util.List;
import java.util.Set;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Pet entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {
    @Query(value = "SELECT * FROM Pet WHERE owner_user_id = :ownerId", nativeQuery = true)
    List<Pet> findAllByOwnerID(@Param("ownerId") Long ownerId);
}
