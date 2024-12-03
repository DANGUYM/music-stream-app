package music_stream_app_backend.models;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChartTrackId implements Serializable {

    @Column(name = "chart_id")
    private Long chartId;

    @Column(name = "track_id")
    private Long trackId;
}