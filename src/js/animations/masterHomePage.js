import { TimelineMax } from 'gsap';
import { sun, wavesTL } from './homePage/homePage';

// Master timeline
const master = new TimelineMax();
master
  .add('start')
  .add(wavesTL)
  .add(sun(), 'start+=1');
