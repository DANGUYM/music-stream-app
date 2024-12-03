package music_stream_app_backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import music_stream_app_backend.dtos.ChartTrackRequestDTO;
import music_stream_app_backend.models.Chart;
import music_stream_app_backend.services.ChartService;

@RestController
@RequestMapping("/charts")
@RequiredArgsConstructor
public class ChartController {
    private final ChartService chartService;

    @PostMapping
    public ResponseEntity<Chart> insert(@RequestBody Chart chart) {
        Chart createChart = chartService.createChart(chart);
        return ResponseEntity.ok(createChart);
    }

    @PostMapping("/add-to-chart")
    public ResponseEntity<?> addTrackToChart(@RequestBody ChartTrackRequestDTO chartTrackRequestDTO) {
        return ResponseEntity.ok(chartService.addTrackToChart(chartTrackRequestDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTracksByChartId(@PathVariable Long id) {
        return ResponseEntity.ok(chartService.getChartById(id));
    }

    @GetMapping
    public ResponseEntity<?> getAllCharts() {
        return ResponseEntity.ok(chartService.getAllCharts());
    }
}
