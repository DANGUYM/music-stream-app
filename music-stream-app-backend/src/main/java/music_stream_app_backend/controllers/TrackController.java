package music_stream_app_backend.controllers;

import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import music_stream_app_backend.dtos.TrackRequestDTO;
import music_stream_app_backend.dtos.TrackResponseDTO;
import music_stream_app_backend.services.TrackService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/tracks")
@RequiredArgsConstructor
public class TrackController {

    private final TrackService trackService;

    @PostMapping
    public ResponseEntity<TrackResponseDTO> insert(@RequestBody TrackRequestDTO trackRequestDTO) {
        TrackResponseDTO createTrack = trackService.createTrack(trackRequestDTO);
        return ResponseEntity.ok(createTrack);
    }

    @GetMapping
    public ResponseEntity<?> getAllTracks() {
        return ResponseEntity.ok(trackService.getAllTracks());
    }

}
