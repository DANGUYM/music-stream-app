

import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const VisualizerRight = ({isPlaying}) => {
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
    const barHeight = (size / data.length) * 3;
    const barSpacing = 2;

    return data.map((value, index) => {
      const barWidth = value / 4;
      const y = index * (barHeight + barSpacing);
      const colorIndex = index / data.length;
      const fillColor = `rgb(${Math.floor(255 * colorIndex)}, 50, ${Math.floor(255 * (1 - colorIndex))})`;

      return (
        <Rect
          key={index}
          x={0}
          y={y}
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
      <Svg height={250} width={50} style={styles.visualizerRight}>
        {renderBars(levels, 50)}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  visualizerRight: {
    position: 'absolute',
    top: -300,
    left: 125,
  },
});

export default VisualizerRight;