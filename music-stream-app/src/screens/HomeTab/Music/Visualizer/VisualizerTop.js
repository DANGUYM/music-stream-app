

import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const VisualizerTop = ({isPlaying}) => {
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
    const barWidth = (size / data.length) * 4;
    const barSpacing = 2;

    return data.map((value, index) => {
      const barHeight = value / 2;
      const x = index * (barWidth + barSpacing);
      const colorIndex = index / data.length;
      const fillColor = `rgb(${Math.floor(255 * colorIndex)}, 50, ${Math.floor(255 * (1 - colorIndex))})`;

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
      <Svg height={80} width={293}>
        {renderBars(levels, 80)}
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

export default VisualizerTop;