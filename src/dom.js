// TODO: 錯誤處理

export default class AudioScroll {
  audioConfigs = {};
  isAllowAudioplay = false;
  aduioWrapper;
  topEntryObserver;
  bottomEntryObserver;

  constructor() {
    this.#init();
    this.topEntryObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const audioId = entry.target.getAttribute('data-audio-id');
        const audio = this.audioConfigs?.[audioId].audio;
        if (!this.isAllowAudioplay) {
          return;
        }
        if (entry.isIntersecting && audio && !this.isAudioPlaying(audio)) {
            const playPromise = audio.play();
            playPromise.catch(error => { console.log(error); });
        } else if (
          !entry.isIntersecting
          && entry.boundingClientRect.top > 0
          && this.isAudioPlaying(audio)) {
            audio.pause();
        }
      });
    }, {
      rootMargin: '0px 0px -50% 0px',
    });

    this.bottomEntryObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const audioId = entry.target.getAttribute('data-audio-id');
        const audio = this.audioConfigs?.[audioId].audio;
        if (!this.isAllowAudioplay) {
          return;
        }
        if (entry.isIntersecting && audio && !this.isAudioPlaying(audio)) {
          const playPromise = audio.play();
          playPromise.catch(error => { console.log(error); });
        } else if (!entry.isIntersecting
            && entry.boundingClientRect.top < window.innerHeight / 2
            && this.isAudioPlaying(audio)) {
            audio.pause();
        }
      });
    }, {
      rootMargin: '-50% 0px 0px 0px',
    });
  }

  #init() {
    this.aduioWrapper = document.createElement('div');
    this.aduioWrapper.style.pointerEvents = 'none';
    this.aduioWrapper.style.opacity = '0';
    this.aduioWrapper.style.display = 'none';
    document.body.appendChild(this.aduioWrapper);
  }

  createAudioElement(path) {
    const audio = document.createElement('audio');
    audio.src = path;
    audio.style.display = 'none';
    audio.muted = true;
    audio.controls = true;
    audio.playsinline = 'true';

    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      const playPromise = audio.play();
      playPromise.catch(error => { console.log(error); });
    });

    return audio;
  }

  isAudioPlaying(audio) {
    return audio && !audio.paused && !audio.ended && audio.currentTime > 0;
  }


  addAudio({
    path,
    audioTopEntry,
    audioBottomEntry,
    allowAudioPlayElement,
    toggleAudioPlayElement,
    onChangeAllowAudioPlay
  }) {
    const audio = this.createAudioElement(path);
    // TODO: 報錯，el 不存在，或 top 大於 bottom

    this.aduioWrapper.appendChild(audio);
    const id = `${Date.now().toString(36) + Math.random().toString(36).substring(2)}`;
    this.audioConfigs[id] = {
      path,
      isPlaying: false,
      audioTopEntry,
      audioBottomEntry,
      audio,
      allowAudioPlayElement,
      onChangeAllowAudioPlay
    };
    audioTopEntry.setAttribute('data-audio-id', id);
    audioBottomEntry.setAttribute('data-audio-id', id);

    this.topEntryObserver.observe(audioTopEntry);
    this.bottomEntryObserver.observe(audioBottomEntry);
    allowAudioPlayElement.addEventListener('click', () => {
      this.isAllowAudioplay = true;
      Object.values(this.audioConfigs).forEach(config => {
        config.audio.muted = !config.audio.muted;
      });
      onChangeAllowAudioPlay(this.audioConfigs[id].audio.muted);
    });

    toggleAudioPlayElement.addEventListener('click', () => {
      this.isAllowAudioplay = true;
      Object.values(this.audioConfigs).forEach(config => {
        config.audio.muted = !config.audio.muted;
      });
      onChangeAllowAudioPlay(this.audioConfigs[id].audio.muted);
    });
  }
}
