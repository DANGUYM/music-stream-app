package music_stream_app_backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import music_stream_app_backend.models.Track;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TrackResponseDTO {
    private Long id;

    private String artist;

    private String title;

    private String duration;

    private String link;

    private String image;

    private String size;

    private String view;

    public static TrackResponseDTO fromEntity(Track track) {
        return TrackResponseDTO.builder()
                .id(track.getId())
                .title(track.getTitle())
                .duration(track.getDuration())
                .link(track.getLink())
                .image(track.getImage())
                .size(track.getSize())
                .view(track.getView())
                .artist(track.getArtist().getName())
                .build();
    }
}
