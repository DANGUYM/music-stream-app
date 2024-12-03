package music_stream_app_backend.models;

import java.io.Serializable;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "chart_track")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChartTrack implements Serializable {

    @EmbeddedId
    private ChartTrackId id;

    @MapsId("trackId")
    @ManyToOne
    @JoinColumn(name = "track_id")
    private Track track;

    @MapsId("chartId")
    @ManyToOne
    @JoinColumn(name = "chart_id")
    private Chart chart;

    private long rank;
}
