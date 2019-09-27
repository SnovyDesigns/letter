import { TimelineMax, TweenLite } from 'gsap';
import drawHand from './updatesPage/drawHand';

// ------------------------------------------

// To disable blink on page load
const updatesAside = document.querySelector('.updates__aside');
TweenLite.set(updatesAside, { visibility: 'visible' });

// ------------------------------------------

// Master timeline
const master = new TimelineMax({ delay: 0.5 });
master.add(drawHand());
