package music_stream_app_backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import music_stream_app_backend.dtos.ArtistResponseDTO;
import music_stream_app_backend.dtos.TrackResponseDTO;
import music_stream_app_backend.models.Artist;
import music_stream_app_backend.repositories.ArtistRepository;

@Service
@RequiredArgsConstructor
public class ArtistService {

    private final ArtistRepository artistRepository;
    private final TrackService trackService;

    public Artist createArtist(Artist artist) {
        return artistRepository.save(artist);
    }

    public ArtistResponseDTO getArtistById(Long id) {
        Artist artist = artistRepository.findById(id).orElseThrow(() -> new RuntimeException("Artist not found"));
        List<TrackResponseDTO> tracks = trackService.getTracksByArtistId(id);
        return ArtistResponseDTO.builder()
                .id(artist.getId())
                .name(artist.getName())
                .image(artist.getImage())
                .description(artist.getDescription())
                .tracks(tracks)
                .build();
    }

    public List<ArtistResponseDTO> getAllArtists() {
        return artistRepository.findAll().stream()
                .map(artist -> ArtistResponseDTO.builder()
                        .id(artist.getId())
                        .name(artist.getName())
                        .image(artist.getImage())
                        .description(artist.getDescription())
                        .tracks(trackService.getTracksByArtistId(artist.getId()))
                        .build())
                .toList();
    }
}
