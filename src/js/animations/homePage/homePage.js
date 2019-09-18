import { TweenMax, TimelineMax, SlowMo, Power1 } from 'gsap';
import MorphSVGPlugin from '../gsap-plugins/MorphSVGPlugin';

// eslint-disable-next-line no-unused-vars
let plugins = [MorphSVGPlugin];

// ------------------------------------------
//     Home page animations
// ------------------------------------------

let wave1 = document.querySelector('#wave1'),
  wave2 = document.querySelector('#wave2'),
  wave3 = document.querySelector('#wave3'),
  wave4 = document.querySelector('#wave4'),
  wave5 = document.querySelector('#wave5'),
  wave6 = document.querySelector('#wave6'),
  sunImage = document.querySelector('.hero__sun'),
  planes = document.querySelectorAll('.plane');

// ------------------------------------------

// Setting our waves back to visible
TweenMax.set([wave1, wave3, wave5], { visibility: 'visible' });

// ------------------------------------------

// Sun animation
const sun = () => {
  const tl = new TimelineMax();
  tl.to(sunImage, 5, {
    transformOrigin: '50% bottom',
    scale: 1,
    autoAlpha: 1,
    ease: SlowMo.ease.config(0.3, 0.1, false)
  });

  return tl;
};

// ------------------------------------------

// Waves animation
const wave = (item1, time, item2) => {
  const tl = new TimelineMax();
  tl.to(item1, time, {
    morphSVG: item2,
    transformOrigin: 'bottom',
    ease: Power1.easeOut,
    yoyo: true,
    repeat: 1,
    scaleY: 0,
    opacity: 1
  });

  return tl;
};

const wavesTL = new TimelineMax();
wavesTL
  .add(wave(wave1, 15, wave3), 'start')
  .add(wave(wave3, 15, wave4), 'start')
  .add(wave(wave5, 15, wave6), 'start');

// ------------------------------------------

// Section News animation
const path = MorphSVGPlugin.pathDataToBezier('#motionPath', { align: planes });

const tl = new TimelineMax();
tl.staggerTo(
  planes,
  8,
  {
    bezier: { values: path, type: 'cubic', autoRotate: true },
    ease: SlowMo.ease.config(0.3, 0.1, false),
    repeat: -1
  },
  0.5
);

// ------------------------------------------

export { sun, wavesTL };
