import webp from './lib/webp.js';
import burger from './lib/burger.js';
import playVideo from './modules/play-video.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  webp();
  burger(768);
  playVideo();
});