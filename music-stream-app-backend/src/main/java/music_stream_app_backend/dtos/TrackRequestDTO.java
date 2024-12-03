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
public class TrackRequestDTO {

    @JsonProperty("artist_id")
    private Long artistId;

    private String title;

    private String duration;

    private String link;

    private String image;

    private String size;

    private String view;
}
