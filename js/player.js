document.querySelectorAll('.audio-box').forEach((box, index) => {
  const audio = box.querySelector('audio');
  const playBtn = box.querySelector('.play');
  const progress = box.querySelector('.progress');
  const time = box.querySelector('.time');

  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = '⏸';
    } else {
      audio.pause();
      playBtn.textContent = '▶';
    }
  });

  audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.value = percent || 0;
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
    time.textContent = `${minutes}:${seconds}`;
  });

  progress.addEventListener('input', () => {
    const newTime = (progress.value / 100) * audio.duration;
    audio.currentTime = newTime;
  });
});
