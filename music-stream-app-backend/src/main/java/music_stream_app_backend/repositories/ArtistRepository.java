package music_stream_app_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import music_stream_app_backend.models.Artist;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long> {

}
