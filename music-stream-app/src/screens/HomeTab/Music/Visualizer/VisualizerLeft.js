
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const VisualizerLeft = ({isPlaying}) => {
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
      const y = (data.length - 1 - index) * (barHeight + barSpacing);
      const colorIndex = index / data.length;
      const fillColor = `rgb(${Math.floor(255 * colorIndex)}, 50, ${Math.floor(255 * (1 - colorIndex))})`;

      return (
        <Rect
          key={index}
          x={50 - barWidth}
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
      <Svg height={250} width={50} style={styles.visualizerLeft}>
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
  visualizerLeft: {
    position: 'absolute',
    top: -300,
    right: 125,
  },
});

export default VisualizerLeft;