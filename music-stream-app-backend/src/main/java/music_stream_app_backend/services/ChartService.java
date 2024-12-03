package music_stream_app_backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import music_stream_app_backend.dtos.ChartTrackRequestDTO;
import music_stream_app_backend.dtos.ChartTrackResponseDTO;
import music_stream_app_backend.dtos.TrackResponseDTO;
import music_stream_app_backend.models.Chart;
import music_stream_app_backend.models.ChartTrack;
import music_stream_app_backend.models.ChartTrackId;
import music_stream_app_backend.models.Track;
import music_stream_app_backend.repositories.ChartRepository;
import music_stream_app_backend.repositories.ChartTrackRepository;

@Service
@RequiredArgsConstructor
public class ChartService {
    private final ChartRepository chartRepository;
    private final ChartTrackRepository chartTrackRepository;
    private final TrackService trackService;

    public Chart createChart(Chart chart) {
        return chartRepository.save(chart);
    }

    public ChartTrackResponseDTO addTrackToChart(ChartTrackRequestDTO chartTrackRequestDTO) {
        Chart chart = chartRepository
                .findById(chartTrackRequestDTO.getChartId())
                .orElseThrow(() -> new RuntimeException("Chart not found"));

        Track track = trackService.getTrackById(chartTrackRequestDTO.getTrackId());

        ChartTrackId chartTrackId = ChartTrackId.builder()
                .chartId(chartTrackRequestDTO.getChartId())
                .trackId(chartTrackRequestDTO.getTrackId())
                .build();

        ChartTrack chartTrack = ChartTrack.builder()
                .id(chartTrackId)
                .chart(chart)
                .track(track)
                .rank(chartTrackRequestDTO.getRank())
                .build();
        chartTrackRepository.save(chartTrack);

        List<TrackResponseDTO> tracks = chartTrackRepository.findTracksByChartId(chartTrackRequestDTO.getChartId())
                .stream()
                .map(trackResponse -> TrackResponseDTO.fromEntity(trackResponse))
                .toList();
        return ChartTrackResponseDTO.builder()
                .chartId(chartTrackRequestDTO.getChartId())
                .title(chart.getTitle())
                .image(chart.getImage())
                .tracks(tracks)
                .build();
    }

    public ChartTrackResponseDTO getChartById(Long id) {
        Chart chart = chartRepository.findById(id).orElseThrow(() -> new RuntimeException("Chart not found"));
        List<TrackResponseDTO> tracks = chartTrackRepository.findTracksByChartId(id).stream()
                .map(track -> TrackResponseDTO.fromEntity(track))
                .toList();
        return ChartTrackResponseDTO.builder()
                .chartId(id)
                .title(chart.getTitle())
                .image(chart.getImage())
                .tracks(tracks)
                .build();
    }
}
