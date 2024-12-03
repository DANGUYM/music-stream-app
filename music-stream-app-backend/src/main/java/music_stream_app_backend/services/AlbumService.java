package music_stream_app_backend.services;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import music_stream_app_backend.models.Album;
import music_stream_app_backend.repositories.AlbumRepository;

@Service
@RequiredArgsConstructor
public class AlbumService {
    private final AlbumRepository albumRepository;

    public Album createAlbum(Album album) {
        return albumRepository.save(album);
    }
}
