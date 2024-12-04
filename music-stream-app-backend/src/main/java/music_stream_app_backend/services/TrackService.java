package music_stream_app_backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import music_stream_app_backend.dtos.TrackRequestDTO;
import music_stream_app_backend.dtos.TrackResponseDTO;
import music_stream_app_backend.models.Track;
import music_stream_app_backend.repositories.ArtistRepository;
import music_stream_app_backend.repositories.TrackRepository;

@Service
@RequiredArgsConstructor
public class TrackService {
    private final TrackRepository trackRepository;
    private final ArtistRepository artistRepository;

    public TrackResponseDTO createTrack(TrackRequestDTO trackRequestDTO) {
        Track track = Track.builder()
                .title(trackRequestDTO.getTitle())
                .duration(trackRequestDTO.getDuration())
                .link(trackRequestDTO.getLink())
                .image(trackRequestDTO.getImage())
                .size(trackRequestDTO.getSize())
                .view(trackRequestDTO.getView())
                .artist(artistRepository.findById(trackRequestDTO.getArtistId())
                        .orElseThrow(() -> new RuntimeException("Artist not found")))
                .build();
        return TrackResponseDTO.fromEntity(trackRepository.save(track));
    }

    public Track getTrackById(Long id) {
        return trackRepository.findById(id).orElseThrow(() -> new RuntimeException("Track not found"));
    }

    public List<TrackResponseDTO> getAllTracks() {
        return trackRepository.findAll().stream()
                .map(track -> TrackResponseDTO.fromEntity(track))
                .toList();
    }

    public List<TrackResponseDTO> getTracksByArtistId(Long artistId) {
        return trackRepository.findByArtist_Id(artistId).stream()
                .map(track -> TrackResponseDTO.fromEntity(track))
                .toList();
    }

    public List<TrackResponseDTO> search(String searchText) {
        return trackRepository.search(searchText).stream()
                .map(track -> TrackResponseDTO.fromEntity(track))
                .toList();
    }
}
