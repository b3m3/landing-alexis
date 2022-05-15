import webp from './lib/webp.js';
import burger from './lib/burger.js';
import playVideo from './modules/play-video.js';
import {tabs, createDots} from './modules/tabs.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  webp();
  burger(768);
  playVideo();
  tabs('.card-team', '.info-team__item', '.info-team', 'center');
  createDots();
  tabs('.testimonials__dots span', '.item-testimonials', '.testimonials__items', 'start');
});