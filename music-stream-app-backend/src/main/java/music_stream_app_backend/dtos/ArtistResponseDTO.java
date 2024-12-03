package music_stream_app_backend.dtos;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import music_stream_app_backend.models.Artist;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArtistResponseDTO {
    private Long id;

    private String name;

    private String image;

    private String description;

    private List<TrackResponseDTO> tracks;

    public static ArtistResponseDTO fromEntity(Artist artist) {
        return ArtistResponseDTO.builder()
                .id(artist.getId())
                .name(artist.getName())
                .image(artist.getImage())
                .description(artist.getDescription())
                .build();
    }
}
