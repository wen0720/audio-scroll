import { useState, useCallback, useEffect, useRef } from 'react';

export function useAudioScroll({ path }) {
  const [audio] = useState(() => {
    const audio = new Audio(path);
    return audio;
  });
  const isAllowAudioPlay = useRef(false);
  const topObserverRef = useRef(null);
  const bottomObserverRef = useRef(null);
  const localIsPlaying = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [isMuted, setIsMuted] = useState(true);
  audio.muted = isMuted;

  const cleanupObserver = useCallback(() => {
    if (topObserverRef.current) {
      topObserverRef.current.disconnect();
      topObserverRef.current = null;
    }
    if (bottomObserverRef.current) {
      bottomObserverRef.current.disconnect();
      bottomObserverRef.current = null;
    }
  }, []);

  const playAudio = useCallback(() => {
    audio.play()
      .then(() => {
        localIsPlaying.current = true;
        setIsPlaying(true);
      })
      .catch(() => { console.log('播放失敗'); });
  }, [audio]);

  const pauseAudio = useCallback(() => {
    audio.pause();
    localIsPlaying.current = false;
    setIsPlaying(false);
  }, [audio]);

  const topEntryRef = useCallback((element) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!isAllowAudioPlay.current) {
          return;
        }
        if (entry.isIntersecting && !localIsPlaying.current) {
          playAudio();
        } else if (
          !entry.isIntersecting
          && entry.boundingClientRect.top > 0
          && localIsPlaying.current
        ) {
          pauseAudio();
        }
      });
    }, {
      rootMargin: '0px 0px -50% 0px',
    });
    observer.observe(element);

    topObserverRef.current = observer;
  }, [playAudio, pauseAudio]);

  const bottomEntryRef = useCallback((element) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!isAllowAudioPlay.current) {
          return;
        }
        if (entry.isIntersecting && !localIsPlaying.current) {
          playAudio();
        } else if (
          !entry.isIntersecting
          && entry.boundingClientRect.top < window.innerHeight / 2
          && localIsPlaying.current
        ) {
          pauseAudio();
        }
      });
    }, {
      rootMargin: '-50% 0px 0px 0px',
    });

    observer.observe(element);

    bottomObserverRef.current = observer;
  }, [playAudio, pauseAudio]);

  // clean up
  useEffect(() => {
    return () => {
      cleanupObserver();
    };
  }, [cleanupObserver]);

  return {
    topEntryRef,
    bottomEntryRef,
    isPlaying,
    toggleMute: () => {
      isAllowAudioPlay.current = true;
      setIsMuted(!isMuted);
    },
    isMuted,
    play: playAudio,
    pause: pauseAudio
  };
}
