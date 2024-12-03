package music_stream_app_backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import music_stream_app_backend.models.ChartTrack;
import music_stream_app_backend.models.ChartTrackId;
import music_stream_app_backend.models.Track;

@Repository
public interface ChartTrackRepository extends JpaRepository<ChartTrack, ChartTrackId> {

    @Query("SELECT ct.track FROM ChartTrack ct WHERE ct.chart.id = :chartId ORDER BY ct.rank")
    List<Track> findTracksByChartId(@Param("chartId") Long chartId);
}
