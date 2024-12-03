package music_stream_app_backend.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChartTrackRequestDTO {

    @JsonProperty("chart_id")
    private Long chartId;
    @JsonProperty("track_id")
    private Long trackId;
    private long rank;
}
