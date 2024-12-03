
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const VisualizerCurrentSong = ({isPlaying}) => {
  const [levels, setLevels] = useState(new Array(64).fill(0));

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        const randomLevels = Array.from({ length: 64 }, () => Math.random() * 100);
        setLevels(randomLevels);
      }, 100);
    } else {
      setLevels(new Array(64).fill(0));
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  const renderBars = (data, size) => {
    const barWidth = (size / data.length) * 15;
    const barSpacing = 2.5;

    return data.map((value, index) => {
      const barHeight = value / 4;
      const x = index * (barWidth + barSpacing);
      const colorIndex = index / data.length;
      const fillColor = `rgb(${Math.floor(255 * colorIndex)}, 255, ${Math.floor(255 * (1 - colorIndex))})`;

      return (
        <Rect
          key={index}
          x={x}
          y={size - barHeight}
          width={barWidth}
          height={barHeight}
          rx={4}
          ry={4}
          fill={fillColor}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <Svg height={25} width={25}>
        {renderBars(levels, 25)}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VisualizerCurrentSong;