import './index.css';

import AudioScroll from '../src/dom.js';

const audioScroll = new AudioScroll();
audioScroll.addAudio({
  path: 'https://storytelling-storage.twreporter.org/files/cafe-music-0417-7n87gToMulIAwpW4EC0.mp3',
  audioTopEntry: document.querySelector('.audio-top-entry'),
  audioBottomEntry: document.querySelector('.audio-bottom-entry'),
  allowAudioPlayElement: document.querySelector('#allow-audio-autoplay-button'),
  toggleAudioPlayElement: document.querySelector('.fixed-audio-play-button'),
  onChangeAllowAudioPlay: (isAllowAudioPlay) => {
    document.querySelector('#allow-audio-autoplay-button').textContent = isAllowAudioPlay ? '請同意聲音自動播放' : '關閉聲音自動播放';
    document.querySelector('.fixed-audio-play-button').textContent = isAllowAudioPlay ? 'muted' : 'unmuted';
  }
});

audioScroll.addAudio({
  path: 'https://storytelling-storage.twreporter.org/files/cafe-music-0417-7n87gToMulIAwpW4EC0.mp3',
  audioTopEntry: document.querySelector('.audio-top-entry2'),
  audioBottomEntry: document.querySelector('.audio-bottom-entry2'),
  allowAudioPlayElement: document.querySelector('#allow-audio-autoplay-button2'),
  toggleAudioPlayElement: document.querySelector('.fixed-audio-play-button2'),
  onChangeAllowAudioPlay: (isAllowAudioPlay) => {
    document.querySelector('#allow-audio-autoplay-button2').textContent = isAllowAudioPlay ? '請同意聲音自動播放' :'關閉聲音自動播放';
    document.querySelector('.fixed-audio-play-button2').textContent = isAllowAudioPlay ? 'unmuted' : 'muted';
  }
});
