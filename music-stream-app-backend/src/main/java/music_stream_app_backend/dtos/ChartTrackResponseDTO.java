package music_stream_app_backend.dtos;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChartTrackResponseDTO {

    @JsonProperty("chart_id")
    private Long chartId;

    private String title;

    private String image;

    private List<TrackResponseDTO> tracks;
}
