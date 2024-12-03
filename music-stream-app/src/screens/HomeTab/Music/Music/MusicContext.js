// import React, { createContext, useState, useEffect } from 'react';
// import { Audio } from 'expo-av';

// export const MusicContext = createContext();

// export const MusicProvider = ({ children }) => {
//   const [currentSong, setCurrentSong] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [sound, setSound] = useState(null);

//   useEffect(() => {
//     return sound
//       ? () => {
//           sound.unloadAsync();
//         }
//       : undefined;
//   }, [sound]);

//   const handlePlayPause = async () => {
//     if (sound) {
//       if (isPlaying) {
//         await sound.pauseAsync();
//       } else {
//         await sound.playAsync();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const playSound = async (song) => {
//     if (sound) {
//       await sound.unloadAsync();
//     }
//     const { sound: newSound } = await Audio.Sound.createAsync({ uri: song.link });
//     setSound(newSound);
//     setCurrentSong(song);
//     setIsPlaying(true);
//     await newSound.playAsync();
//   };

//   return (
//     <MusicContext.Provider value={{ currentSong, isPlaying, handlePlayPause, playSound }}>
//       {children}
//     </MusicContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handlePlayPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playSound = async (song) => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync({ uri: song.link });
    setSound(newSound);
    setCurrentSong({ ...song, sound: newSound });
    setIsPlaying(true);
    await newSound.playAsync();
  };

  return (
    <MusicContext.Provider value={{ currentSong, isPlaying, handlePlayPause, playSound }}>
      {children}
    </MusicContext.Provider>
  );
};