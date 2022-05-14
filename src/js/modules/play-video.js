const playVideo = () => {
  document.addEventListener('click', (e) => {
    const content = document.querySelector('.content-video');
    const video = document.querySelector('._video');
    const playBtn = document.querySelector('._play');

    if (e.target === playBtn) {
      content.classList.add('play');
      video.setAttribute('controls', '');
      video.play();
    }

    if (
      e.target !== playBtn && 
      e.target !== video || 
      e.target === video
      ) {
      content.classList.remove('play');
      video.removeAttribute('controls');
      video.pause();
    }
  });
};

export default playVideo;