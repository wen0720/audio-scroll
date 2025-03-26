# audio-scroll

![npm (latest)](https://img.shields.io/npm/v/audio-scroll/latest)

## Introduction
`audio-scroll` is just a simple tool for developer to implement audio feature when reading articles on website.

It works as follows:

When the **top entry point** scroll up to the middle of the webpage, audio is automatically triggered. When the top entry point scroll down and leaves the middle of the webpage, the audio is paused.

When the **bottom entry point** scroll down to the middle of the webpage, audio is automatically triggered. When the top bottom point scroll up and leaves the middle of the webpage, the audio is paused.

There two versions. React and DOM.

## React Hooks
The React version is a hook for developer to easy implement aduio storytelling.

Basically, you need to implement your own HTML and position all entryRef(`topEntryRef` and `bottomEntryRef`) correctly.

Note that `toggleMute` is a important method because audio won't play automatically until user interaction with web page. It's a known issue for browser and I haven't a found good solution. So you need to call `toggleMute` one time to let audio trigger automatically when scroll.

```js
import { useAudioScroll } from 'audio-scroll';

const Section = () => {
    const {
        topEntryRef,
        bottomEntryRef,
        isPlaying,
        toggleMute,
        isMuted,
    } = useAudioScroll({
        path: '{your audio path}',
    });

    return (
        <button onClick={toggleMute}>{ isMuted ? '請同意聲音自動播放' : '關閉聲音自動播放'}</button>
        // top entry point
        <div ref={topEntryRef}></div>
        // ... some code

        // bottom entry point
        <div ref={bottomEntryRef}></div>
        // icons
        <button onClick={toggleMute}>{
          isMuted
          ? {maybeSVGPlayIcon}
          : {maybeSVGMutedIcon}
        }</button>
    )
}

```

## DOM
To Be Documented
