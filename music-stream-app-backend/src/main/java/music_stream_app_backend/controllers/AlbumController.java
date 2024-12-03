package music_stream_app_backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import music_stream_app_backend.models.Album;
import music_stream_app_backend.services.AlbumService;

@RestController
@RequestMapping("/albums")
@RequiredArgsConstructor
public class AlbumController {
    private final AlbumService albumService;

    @PostMapping
    public ResponseEntity<Album> insert(Album album) {
        Album createAlbum = albumService.createAlbum(album);
        return ResponseEntity.ok(createAlbum);
    }
}
