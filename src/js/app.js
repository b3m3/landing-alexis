import webp from './lib/webp.js';
import burger from './lib/burger.js';
import fixedHeader from './lib/fixedHeader.js';
import playVideo from './modules/play-video.js';
import {tabs, createDots} from './modules/tabs.js';
import pageScrollEvents from './lib/pageScrollEvents.js';


document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  webp();
  burger(768);
  fixedHeader(50);
  playVideo();
  tabs('.card-team', '.info-team__item', '.info-team');
  createDots();
  tabs('.testimonials__dots span', '.item-testimonials', '.testimonials__items');
  pageScrollEvents();
});