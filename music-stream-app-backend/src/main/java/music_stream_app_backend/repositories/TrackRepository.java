package music_stream_app_backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import music_stream_app_backend.models.Track;

@Repository
public interface TrackRepository extends JpaRepository<Track, Long> {
    List<Track> findByArtist_Id(Long artistId);

    @Query("SELECT t FROM Track t WHERE t.title LIKE %:searchText% OR t.artist.name LIKE %:searchText%")
    List<Track> search(@Param("searchText") String searchText);
}
